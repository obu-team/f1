const _ = require('lodash')
const async = require('async')
const $ = require('superagent')

const Consts = require('../lib/Consts')
const AIService = require('./AI.Service')
const F1Service = require('./F1.Service')

class AnalyseService {
	static analyseText(text, cb) {
		let data = {}
		async.parallel([
			cb => AIService.keywords('textRazor', text, (err, r) => {
				if(err) return cb(err)
				data.countries = r.countries
				data.drivers = r.drivers
				data.gps = r.gps
				data.teams = r.teams
				cb()
			}),
			cb => AIService.dates('alchemy', text, (err, r) => {
				if(err) return cb(err)
				data.dates = r
				cb()
			}),
			cb => AIService.keywords('aylien', text, (err, r) => {
				if(err) return cb(err)
				data.keywords = r.keyword
				cb()
			})
		], err => {
			if(err) return cb(err)
			cb(null, data)
		})
	}
}

module.exports = AnalyseService
