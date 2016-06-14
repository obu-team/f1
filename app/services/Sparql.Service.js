const _ = require('lodash')
const async = require('async')
const $ = require('superagent')
const sparqls = require( 'sparqling-star' )

const Consts = require('../lib/Consts')
const StringUtilService = require('./StringUtil.Service')
const Database = require('../lib/Database')

const Entity = Database.model('Entity')

class SparqlService {

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

	static getTrack(entity, cb) {

	}

	static getRacingDriver(entity, cb) {
		SparqlService.findEntityDB(entity, (err, data) => {
			if(err) return cb(err) 
			if(!data) return cb(null, null) // not found racing driver
			if(!data.dbpediaID) 
				SparqlService.findRacingDriverResourceSparql(data, (err, data) => {
					if(err) return cb(err)
					return SparqlService.getRacingDriver(entity, cb)
				})
			else{
				let myquery = new sparqls.Query()
				let resource = '<' + data.dbpediaID + '>'
				let filterLangName = 'LANG(?name)=\'en\''
				let filterLangAbstract = 'LANG(?abstract)=\'en\''
				let filterLangNationality = 'LANG(?nationality)=\'en\''

				myquery.registerTriple({
							'subject': resource,
							'predicate': 'foaf:name',
							'object': '?name'
						})
						.registerTriple({
							'subject': resource,
							'predicate': 'dbo:abstract',
							'object': '?abstract'
						})
						.registerTriple({
							'subject': resource,
							'predicate': 'dbo:birthDate',
							'object': '?birthDate'
						})
						.registerTriple({
							'subject': resource,
							'predicate': 'dbo:championships',
							'object': '?championships'
						})
						.registerTriple({
							'subject': resource,
							'predicate': 'dbo:wikiPageID',
							'object': '?wikiPageID'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:carNumber',
							'object': '?carNumber }'
						})
						.registerTriple({
							'subject': resource,
							'predicate': 'dbp:nationality',
							'object': '?nationality'
						})
						.registerTriple({
							'subject': resource,
							'predicate': 'dbp:firstRace',
							'object': '?firstRace'
						})
						.filter(filterLangName)
				   		.filter(filterLangAbstract)
				   		.filter(filterLangNationality)

				console.log( myquery.sparqlQuery )

				let sparqler = new sparqls.Client();
				sparqler.send(myquery, (err, data) => {
					if(err) return cb(err)
					console.log( data.results );
					cb(null, data)
				})
			} 
		})
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

	static getDriversFromCountryOrTeam(cb) {
		var myquery = new sparqls.Query();
	}

	static findRacingTrackResourceSparql(entity, cb) {

	}

	static findRacingDriverResourceSparql(entity, cb) {
		let driverName = entity.name.split(' ')
		let myquery = new sparqls.Query({
			'limit': 1
		})
		let resource = {
			'type': 'dbo:Agent',
			'foaf:name': '?name'
		}
		let name = {
			'bif:contains': '"' + driverName[0] + '"'
		}
		let filterLangName = 'LANG(?name)=\'en\''

		myquery.registerVariable('resource', resource)
			   .registerVariable('name', name)

		for(var i=1; i<driverName.length; i++) {
			myquery.filter('CONTAINS(?name, "' + driverName[i] + '")')
		}

		myquery.filter(filterLangName)

		console.log( myquery.sparqlQuery )

		var sparqler = new sparqls.Client();
		sparqler.send(myquery, (err, data) => {
			if(err) cb(err)
			console.log( data.results );
			if(data.results.bindings.length > 0) { //resource found
				entity.dbpediaID = data.results.bindings[0].resource.value
				SparqlService.updateEntityDB(entity, (err, data) => {
					if(err) return cb(err)
					return cb(null, data)
				})
			} else { //resource not found
				console.log('resource not found')
				return cb(null, null)
			}
		});
	}

	static findRacingTeamResourceSparql(entity, cb) {

	}

	static updateEntityDB(entity, cb) {
		console.log('entity:' + entity.id)
		Entity.update(
			{ _id: entity.id },
			{ dbpediaID: entity.dbpediaID }, 
			(err, raw) => {
				if(err) return cb(err)
				console.log('raw: ' + raw)
				return cb(null, raw)
			}
		)
	}

	static findEntityDB(entity, cb) {
		Entity.findOne({
			type: entity.type,
			$or: [
				{name: entity.name},
				{keywords: {$in: entity.keywords}}
			]
		}, (err, ds) => {
			if(err) return cb(err)
			return cb(null, ds)
		})
	}
}

module.exports = SparqlService
