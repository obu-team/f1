const _ = require('lodash')
const async = require('async')
const $ = require('superagent')
const sparqls = require( 'sparqling-star' )

const Consts = require('../lib/Consts')
const StringUtilService = require('./StringUtil.Service')
const AnalyseService = require('./Analyse.Service')

class SparqlService {
	/*static getResults(text, cb) {
		AnalyseService.analyseText(text, (err, data) => {
			if(err) return cb(err)
			let keywords = data
			SparqlService.executeSparqlQuery(keywords, (err, query) => {
				if(err) return cb(err)
				cb(null, query)
			})
			//cb(null, data)
		})
	}*/

	/*static executeSparqlQuery(keywords, cb) {
		let query = 'query za seznam dirkačev po državah ali ekipah'
		if((keywords.countries.length > 0 || keywords.teams.length > 0) 
			&& keywords.drivers.length === 0 && StringUtilService.hasDriversKeyword) {
			cb(null, query)
		} else {
			cb(null, 'neki drugi query')
		}
	}*/

	static getEntity(entity, cb) {
		switch(entity.type) {
			case 'track':
				//TODO: implement return track
				break;
			case 'driver':
				//TODO: implement return driver
				break;
			case 'team':
				SparqlService.getRacingTeam(entity, cb)
				break;
		}
	}

	static getRacingTeam(entity, cb) {	
		var myquery = new sparqls.Query()
		var team = {
			'type': 'dbo:FormulaOneTeam',
			'foaf:name': '?name',
			'dbo:thumbnail': '?thumbnail',
			'foaf:homepage': '?homepage',
			'dbo:abstract': '?abstract',
			'dbp:consChamp': '?consChamp',
			'dbp:driversChamp': '?driversChamp',
			'dbp:debut': '?debut',
			'dbp:fastestLaps': '?fastestLaps',
			'dbp:wins': '?wins',
			'dbp:poles': '?poles',
			'dbp:races': '?races'
		}
		var regex = 'regex(str(?team), \'^.*' + entity.name + '.*\', \'i\')'
		var regexlang = 'LANG(?abstract)=\'en\''
		myquery.registerVariable('team', team)
			   .filter(regex)
		       .filter(regexlang)

		console.log( myquery.sparqlQuery )
		
		var sparqler = new sparqls.Client();
		sparqler.send(myquery, (err, data) => {
			if(err) cb(err)
			console.log( data.results );
			cb(null, data)
		});
	}

	static getDriver(entity, cb) {

	}

	static getTrack(entity, cb) {

	}

	static getDriversFromCountryOrTeam(cb) {
		var myquery = new sparqler.Query();
	}
}

module.exports = SparqlService
