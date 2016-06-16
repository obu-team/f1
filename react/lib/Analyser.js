import _ from 'lodash'
import async from 'async'
import Combinatorics from 'js-combinatorics'
import {specialKeywords} from './Keywords'

import Utils from './Utils'

class Analyser {
	static parseEntities(query, entities, cb) {
		let dates = _.filter(entities, e => e.type=='date')
		let _profiles = _.filter(entities, e => e.type!='date')
		Analyser.evaluateProfiles(query, _profiles, profiles => {
			Analyser.dataCase(profiles, dates, summaries => cb({dates, profiles}))
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

	static dataCase(profiles, dates, cb) {
		let summaries = []
		let grouped = _.groupBy(profiles, 'type')
		let keys = _.keys(grouped)
		if(dates.length) {
			if(profiles.length) {

			} else {

			}
		}
		cb(summaries)
	}
}

export default Analyser
