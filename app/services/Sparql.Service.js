const _ = require('lodash')
const async = require('async')
const $ = require('superagent')

const Consts = require('../lib/Consts')
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
		let query = 'testni query'
		if(keywords.countries && keywords.drivers)
		console.log(keywords)
		cb(null, query)
	}
}

module.exports = SparqlService
