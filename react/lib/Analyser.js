import _ from 'lodash'
import async from 'async'
import Combinatorics from 'js-combinatorics'
import {specialKeywords} from './Keywords'
import moment from 'moment'

import Utils from './Utils'
import F1Service from '../services/F1.Service'

class Analyser {
	static parseEntities(query, entities, cb) {
		let dates = _(entities).filter(e => e.type=='date').map('name').value()
		let _profiles = _.filter(entities, e => e.type!='date')
		Analyser.evaluateProfiles(query, _profiles, profiles => {
			Analyser.dataCase(query, profiles, dates, summaries => {
				//console.log(summaries)
				cb({dates, profiles, summaries})
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
				let apiData = ['raceCalendar', 'driverStandings', 'constructorStandings']
				if(Utils.oneOfCombinations(words, ['season', 'standing'])) apiData = ['driverStandings', 'constructorStandings']
				else if(Utils.oneOfCombinations(words, ['calendar', 'season'])) apiData = ['raceCalendar']
				else if(Utils.oneOfCombinations(words, ['driver', 'standing', 'season'])) apiData = ['driverStandings']
				else if(Utils.oneOfCombinations(words, ['team', 'standing', 'season'])) apiData = ['constructorStandings']
				return Analyser.getDataInfo(dates, apiData, cb)
			}
		} else {
			if(Utils.onlyInArray(keys, ['driver'])) {
				let apiData = ['driverSeasonStanding', 'driverWorldTitles', 'driverSeasonFinishes', 'driverTeams']
				if(Utils.oneOfCombinations(words, ['current', 'standing', 'driver'], ['standing'])) apiData = ['driverSeasonStanding']
				else if(Utils.oneOfCombinations(words, ['title', 'driver'], ['title'])) apiData = ['driverWorldTitles']
				return Analyser.getDataInfo(grouped.driver, apiData, cb)
			} else if(Utils.onlyInArray(keys, ['team'])) {

			} else if(Utils.onlyInArray(keys, ['track'])) {

			} else if(words.length) {
				if(Utils.onlyInArray(words, ['next'])) return Analyser.getDataInfo(['current'], ['nextRace'], cb)
				else if(Utils.oneOfCombinations(words, ['current', 'season', 'summary'], ['current', 'summary'])) return Analyser.getDataInfo(['current'], ['nextRace', 'raceCalendar','driverStandings', 'constructorStandings'], cb)
				else if(Utils.oneOfCombinations(words, ['current', 'season', 'standing'], ['current', 'standing'])) return Analyser.getDataInfo(['current'], ['driverStandings', 'constructorStandings'], cb)
				else if(Utils.oneOfCombinations(words, ['current', 'season', 'calendar'], ['current', 'calendar'])) return Analyser.getDataInfo(['current'], ['raceCalendar'], cb)
			}
		}
		cb([])
	}

	static getDataInfo(data, selection, cb) {
		let summaries = []
		async.forEach(data, (d, cb1) => {
			d = d=='current' ? moment().format('YYYY') : d
			summaries.push(_.filter([{
				name: 'Next Race', type: 'nextRace'
			}, {
				name: `${d} Race Calendar`,
				type: 'raceCalendar',
				year: d
			}, {
				name: `${d} Driver Standings`,
				type: 'driverStandings',
				year: d
			}, {
				name: `${d} Constructor Standings`,
				type: 'constructorStandings',
				year: d
			}, {
				name: `${d.name}'s Current Season Info`,
				type: 'driverSeasonStanding',
				driver: d.ergastID
			}, {
				name: `${d.name}'s World Titles`,
				type: 'driverWorldTitles',
				driver: d.ergastID
			}, {
				name: `${d.name}'s Season Finishes`,
				type: 'driverSeasonFinishes',
				driver: d.ergastID
			}, {
				name: `${d.name}'s Constructors`,
				type: 'driverTeams',
				driver: d.ergastID
			}], _d => _.indexOf(selection, _d.type)>-1))
			cb1()
		}, err => cb(_.flatten(summaries)))
	}
}

export default Analyser
