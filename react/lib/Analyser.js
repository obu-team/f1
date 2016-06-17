import _ from 'lodash'
import async from 'async'
import Combinatorics from 'js-combinatorics'
import {specialKeywords} from './Keywords'

import Utils from './Utils'
import F1Service from '../services/F1.Service'

class Analyser {
	static parseEntities(query, entities, cb) {
		let dates = _(entities).filter(e => e.type=='date').map('name').value()
		let _profiles = _.filter(entities, e => e.type!='date')
		Analyser.evaluateProfiles(query, _profiles, profiles => {
			Analyser.dataCase(query, profiles, dates, summaries => {
				console.log(summaries)
				cb({dates, profiles})
			})
		})
	}

	static evaluateProfiles(query, profiles, cb) {
		let keys = _(query.split(' ')).map(k => _.deburr(k.toLowerCase())).uniq().value()
		let combinations = Utils.naturalKeywordCombinations(keys)
		let ps = _(profiles).map(p => {
			let keywords = _(Utils.naturalKeywordCombinations(p.keywords)).flattenDeep().map(k => _.deburr(k)).uniq().value()
			let intersect = _.intersection(keys, keywords)
			p.confident = intersect.length
			p.intersect = intersect
			if(_.indexOf(combinations, _.deburr(p.name.toLowerCase()))>-1) p.confident=100
			return p
		}).orderBy(['confident', 'name'], ['desc', 'asc']).value()
		Analyser.createDependencyGraph(ps, cb)
	}

	static createDependencyGraph(profiles, cb) {
		let profs = _.groupBy(profiles, 'type')
		profs._keys = _.keys(profs)
		profs = _.map(profs._keys, k => {
			let p = profs[k]
			let group = _.groupBy(p, 'intersect')
			let keys = _.keys(group)
			return {_keys: keys, data: group}
		})
		profs = _(profs).map(p => {
			return _(p._keys).map(k => {
				let pr = p.data[k]
				let max = _.maxBy(pr, 'confident').confident
				return _(pr).filter(_p => _p.confident == max).flatten().value()
			}).flatten().value()
		}).flatten().orderBy(['confident', 'type', 'name'], ['desc', 'asc', 'asc']).uniqBy('_id').value()
		cb(profs)
	}

	static dataCase(query, profiles, dates, cb) {
		let keywords = _(query.split(' ')).map(k => _.deburr(k.toLowerCase())).uniq().value()
		let combinations = Utils.naturalKeywordCombinations(keywords)
		let words = _(specialKeywords).filter(sk => _.intersection(sk.words, combinations).length).map('key').uniq().value()
		let grouped = _.groupBy(profiles, 'type')
		let keys = _.keys(grouped)
		if(dates.length) {
			if(profiles.length) {

			} else {
				if(words.length) {
					if(Utils.onlyInArray(words, ['calendar'])) return Analyser.getSeasonRaceCalendar(dates, cb)
					if(Utils.onlyInArray(words, ['driver'])) return Analyser.getSeasonDriverStandings(dates, cb)
					if(Utils.onlyInArray(words, ['team'])) return Analyser.getSeasonConstructorStandings(dates, cb)
				} else {
					return Analyser.getSeasonSummary(dates, cb)
				}
			}
		}
		cb([])
	}

	static getSeasonSummary(dates, cb) {
		let summaries = []
		async.forEach(dates, (date, cb1) => {
			summaries.push([{
				name: `${date} Race Calendar`,
				type: 'raceCalendar',
				year: date
			}, {
				name: `${date} Driver Standings`,
				type: 'driverStandings',
				year: date
			}, {
				name: `${date} Constructor Standings`,
				type: 'constructorStandings',
				year: date
			}])
			cb1()
		}, err => cb(_.flatten(summaries)))
	}

	static getSeasonRaceCalendar(dates, cb) {
		let summaries = []
		async.forEach(dates, (date, cb1) => {
			summaries.push({
				name: `${date} Race Calendar`,
				type: 'raceCalendar',
				year: date
			})
			cb1()
		}, err => cb(summaries))
	}

	static getSeasonDriverStandings(dates, cb) {
		let summaries = []
		async.forEach(dates, (date, cb1) => {
			summaries.push({
				name: `${date} Driver Standings`,
				type: 'driverStandings',
				year: date
			})
			cb1()
		}, err => cb(summaries))
	}

	static getSeasonConstructorStandings(dates, cb) {
		let summaries = []
		async.forEach(dates, (date, cb1) => {
			summaries.push({
				name: `${date} Constructor Standings`,
				type: 'constructorStandings',
				year: date
			})
			cb1()
		}, err => cb(summaries))
	}
}

export default Analyser
