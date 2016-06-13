const _ = require('lodash')
const async = require('async')
const $ = require('superagent')

const Consts = require('../lib/Consts')
const StringUtilService = require('./StringUtil.Service')
const AnalyseService = require('./Analyse.Service')

class SparqlService {
	static getResults(text, cb) {
		AnalyseService.analyseText(text, (err, data) => {
			if(err) return cb(err)
			let keywords = data
			SparqlService.generateSparqlQuery(keywords, (err, query) => {
				if(err) return cb(err)
				cb(null, query)
			})
			//cb(null, data)
		})
	}

	static generateSparqlQuery(keywords, cb) {
		let query = 'query za seznam dirkačev po državah ali ekipah'
		if((keywords.countries.length > 0 || keywords.teams.length > 0) 
			&& keywords.drivers.length === 0 && StringUtilService.hasDriversKeyword) {
			cb(null, query)
		} else {
			cb(null, 'neki drugi query')
		}
	}
}

module.exports = SparqlService
