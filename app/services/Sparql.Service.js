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
				SparqlService.getRacingDriver(entity, cb)
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
			'foaf:homepage': '?homepage',
			'dbo:wikiPageID': '?wikiPageID',
			'dbp:base': '?base',
			'dbo:abstract': '?abstract',
			'dbp:consChamp': '?consChamp',
			'dbp:driversChamp': '?driversChamp',
			'dbp:debut': '?debut',
			'dbp:fastestLaps': '?fastestLaps',
			'dbp:wins': '?wins',
			'dbp:poles': '?poles',
			'dbp:races': '?races',

		}
		var name = { 
			'bif:contains': '"' + entity.name + '"'
		}
		//var regex = 'regex(str(?team), \'^.*' + entity.name + '.*\', \'i\')'
		var filterLang = 'LANG(?abstract)=\'en\''
		myquery.registerVariable('team', team)
			   .registerVariable('name', name)
		       .filter(filterLang)

		console.log( myquery.sparqlQuery )
		
		var sparqler = new sparqls.Client();
		sparqler.send(myquery, (err, data) => {
			if(err) cb(err)
			console.log( data.results );
			cb(null, data)
		});
	}

	static getRacingDriver(entity, cb) {
		let driverName = entity.name.split(' ')
		var myquery = new sparqls.Query({
			'limit': 1
		})
		var driver = {
			'type': 'dbo:Agent',
			'foaf:name': '?name',
			'dbo:abstract': '?abstract',
			'dbo:birthDate': '?birthDate',
			'dbo:championships': '?championships',
			'dbo:wikiPageID': '?wikiPageID',
			'dbp:carNumber': '?carNumber',
			'dbp:nationality': '?nationality',
			'dbp:firstRace': '?firstRace'
		}
		var name = {
			'bif:contains': '"' + driverName[0] + '"'
		}
		var filterContains = 'CONTAINS(?name, "' + driverName[1] + '")'
		var filterLangName = 'LANG(?name)=\'en\''
		var filterLangAbstract = 'LANG(?abstract)=\'en\''
		var filterLangNationality = 'LANG(?nationality)=\'en\''
		myquery.registerVariable('resource', driver)
			   .registerVariable('name', name)
			   .filter(filterContains)
			   .filter(filterLangName)
			   .filter(filterLangAbstract)
			   .filter(filterLangNationality)

		console.log( myquery.sparqlQuery )

		var sparqler = new sparqls.Client();
		sparqler.send(myquery, (err, data) => {
			if(err) cb(err)
			console.log( data.results );
			cb(null, data)
		});
	}

	static getTrack(entity, cb) {

	}

	static getDriversFromCountryOrTeam(cb) {
		var myquery = new sparqls.Query();
	}
}

module.exports = SparqlService
