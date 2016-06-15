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
				SparqlService.getTrack(entity, cb)
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
		SparqlService.findEntityDB(entity, (err, data) => {
			if(err) return cb(err)
			if(!data) return cb(null, null) // not found track
			if(!data.dbpediaID)
				SparqlService.findRacingTrackResourceSparql(data, (err, data) => {
					if(err) return cb(err)
					return SparqlService.getTrack(entity, cb)
				})
			else{
				let myquery = new sparqls.Query({
					'limit': 1
				})
				let resource = '<' + data.dbpediaID + '>'
				let filterLangName = 'LANG(?name)=\'en\''
				let filterLangAbstract = 'LANG(?abstract)=\'en\''
				let filterLangComment = 'LANG(?comment)=\'en\''

				myquery.registerTriple({
							'subject': resource,
							'predicate': 'rdfs:label',
							'object': '?name'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbo:abstract',
							'object': '?abstract }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbo:thumbnail',
							'object': '?thumbnail }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbo:wikiPageID',
							'object': '?wikiPageID }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:capacity',
							'object': '?capacity }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:lengthKm',
							'object': '?lengthKm }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:opened',
							'object': '?opened }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:capacity',
							'object': '?capacity }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'georss:point',
							'object': '?location }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'rdfs:comment',
							'object': '?comment }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'foaf:depiction',
							'object': '?depiction }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'foaf:homepage',
							'object': '?homepage }'
						})
						.filter(filterLangName)
					   	.filter(filterLangAbstract)
					   	.filter(filterLangComment)

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
				let myquery = new sparqls.Query({
					'limit': 1
				})
				let resource = '<' + data.dbpediaID + '>'
				let filterLangName = 'LANG(?name)=\'en\''
				let filterLangAbstract = 'LANG(?abstract)=\'en\''
				let filterLangNationality = 'LANG(?nationality)=\'en\''
				let filterLangComment = 'LANG(?comment)=\'en\''

				myquery.registerTriple({
							'subject': resource,
							'predicate': 'foaf:name',
							'object': '?name'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbo:abstract',
							'object': '?abstract }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'rdfs:comment',
							'object': '?comment }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbo:thumbnail',
							'object': '?thumbnail }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'foaf:depiction',
							'object': '?depiction }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbo:birthDate',
							'object': '?birthDate }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbo:birthPlace',
							'object': '?birthPlace }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbo:championships',
							'object': '?championships }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbo:wikiPageID',
							'object': '?wikiPageID }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:carNumber',
							'object': '?carNumber }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:nationality',
							'object': '?nationality }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:firstRace',
							'object': '?firstRace }'
						})
						.filter(filterLangName)
				   		.filter(filterLangAbstract)
				   		.filter(filterLangNationality)
				   		.filter(filterLangComment)

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
		SparqlService.findEntityDB(entity, (err, data) => {
			if(err) return cb(err)
			if(!data) return cb(null, null) // not found racing team
			if(!data.dbpediaID)
				SparqlService.findRacingTeamResourceSparql(data, (err, data) => {
					if(err) return cb(err)
					return SparqlService.getRacingTeam(entity, cb)
				})
			else{
				let myquery = new sparqls.Query({
					'limit': 1
				})
				let resource = '<' + data.dbpediaID + '>'
				let filterLangName = 'LANG(?name)=\'en\''
				let filterLangAbstract = 'LANG(?abstract)=\'en\''
				let filterLangComment = 'LANG(?comment)=\'en\''

				myquery.registerTriple({
							'subject': resource,
							'predicate': 'foaf:name',
							'object': '?name'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbo:abstract',
							'object': '?abstract }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'rdfs:comment',
							'object': '?comment }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'foaf:homepage',
							'object': '?homepage }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbo:wikiPageID',
							'object': '?wikiPageID }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:base',
							'object': '?base }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:consChamp',
							'object': '?consChamp }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:driversChamp',
							'object': '?driversChamp }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:debut',
							'object': '?debut }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:fastestLaps',
							'object': '?fastestLaps }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:wins',
							'object': '?wins }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:poles',
							'object': '?poles }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:races',
							'object': '?races }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'dbp:principal',
							'object': '?principal }'
						})
						.registerTriple({
							'subject': 'OPTIONAL {' + resource,
							'predicate': 'georss:point',
							'object': '?location }'
						})
						.filter(filterLangName)
				   		.filter(filterLangAbstract)
				   		.filter(filterLangComment)

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

	static getDriversFromCountryOrTeam(cb) {
		var myquery = new sparqls.Query();
	}

	static findRacingTrackResourceSparql(entity, cb) {
		let myquery = new sparqls.Query();

		let x = {
			'rdfs:label': {
				'value': entity.name,
				'literal': true,
				'language': 'en'
			},
			'dbo:wikiPageRedirects': '?resource'
		};

		myquery
			.selection( ['resource'] )
			.registerVariable( 'x', x );

		console.log( myquery.sparqlQuery );

		let sparqler = new sparqls.Client()
		sparqler.send(myquery, (err, data) => {
			if(err) cb(err)
			console.log( data.results )
			if(data.results.bindings.length > 0) { //resource found
				entity.dbpediaID = data.results.bindings[0].resource.value
				SparqlService.updateEntityDB(entity, (err, data) => {
					if(err) return cb(err)
					return cb(null, data)
				})
			} else { //resource not found
				myquery = new sparqls.Query({
					'limit': 1
				});

				let resource = {
					'rdfs:label': {
						'value': entity.name,
						'literal': true,
						'language': 'en'
					}
				};

				myquery
					.selection( ['resource'] )
					.registerVariable( 'resource', resource );

				console.log( myquery.sparqlQuery );

				sparqler.send(myquery, (err, data) => {
					if(err) cb(err)
					console.log( data.results )
					if(data.results.bindings.length > 0) { //resource found
						entity.dbpediaID = data.results.bindings[0].resource.value
						SparqlService.updateEntityDB(entity, (err, data) => {
							if(err) return cb(err)
							return cb(null, data)
						})
					} else {
						console.log('resource not found')
						return cb(null, null)
					}
				})
			}
		})
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

		let sparqler = new sparqls.Client()
		sparqler.send(myquery, (err, data) => {
			if(err) cb(err)
			console.log( data.results )
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
		})
	}

	static findRacingTeamResourceSparql(entity, cb) {
		let teamName = entity.name.split(' ')
		let myquery = new sparqls.Query({
			'limit': 1
		})
		let resource = {
			'type': 'dbo:FormulaOneTeam',
			'foaf:name': '?name'
		}
		let name = {
			'bif:contains': '"' + teamName[0] + '"'
		}
		let filterLangName = 'LANG(?name)=\'en\''

		myquery.registerVariable('resource', resource)
			   .registerVariable('name', name)

		console.log( myquery.sparqlQuery )

		let sparqler = new sparqls.Client()
		sparqler.send(myquery, (err, data) => {
			if(err) cb(err)
			console.log( data.results )
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
		})
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
