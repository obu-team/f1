import _ from 'lodash'
import async from 'async'
import Combinatorics from 'js-combinatorics'
import {specialKeywords} from './Keywords'

import Utils from './Utils'

class Analyser {
	static parseEntities(query, entities, cb) {
		let dates = _.filter(entities, e => e.type=='date')
		let _profiles = _.filter(entities, e => e.type!='date')
		let grouped = _.groupBy(_profiles, 'type')
		let keys = _.keys(grouped)
		Analyser.evaluateProfiles(query, _profiles, profiles => {
			Analyser.dataCase(profiles, dates, summary => cb({dates, profiles}))
		})
	}

	static evaluateProfiles(query, profiles, cb) {
		let keys = _(query.split(' ')).map(k => _.deburr(k.toLowerCase())).uniq().value()
		let combinations = Utils.naturalKeywordCombinations(keys)
		let ps = _(profiles).map(p => {
			let keywords = _(p.keywords).map(k => k.split(' ')).flattenDeep().map(k => _.deburr(k)).uniq().value()
			p.confident = _.intersection(keys, keywords).length / keywords.length
			if(_.indexOf(combinations, _.deburr(p.name.toLowerCase()))>-1) p.confident+=1
			return p
		}).orderBy(['confident', 'name'], ['desc', 'asc']).value()
		cb(ps)
	}

	static dataCase(profiles, dates, cb) {
		cb()
	}
}

export default Analyser
