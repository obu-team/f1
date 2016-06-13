const _ = require('lodash')
const async = require('async')
const $ = require('superagent')

const Consts = require('../lib/Consts')

class AIService {
	static keywords(type = 'aylien', text, cb) {
		switch(type) {
			case 'aylien':
				AIService.aylienKeywords(text, cb)
				break
			case 'alchemy':
				AIService.alchemyKeywords(text, cb)
				break
			case 'indico':
				AIService.indicoKeywords(text, cb)
				break
			case 'textRazor':
				AIService.textRazorKeywords(text, cb)
				break
			default:
				throw new Error('Invalid type')
				break
		}
	}
	static dates(type = 'alchemy', text, cb) {
		switch(type) {
			case 'alchemy':
				AIService.alchemyDates(text, cb)
				break
			default:
				throw new Error('Invalid type')
				break
		}
	}
	static aylienKeywords(text, cb) {
		$.post('https://api.aylien.com/api/v1/entities')
		.set('X-AYLIEN-TextAPI-Application-Key', Consts.aylienKey)
		.set('X-AYLIEN-TextAPI-Application-ID', Consts.aylienApp)
		.set('Accept', 'application/json')
		.query({text})
		.end((err, res) => {
			if(err) return cb(err)
			cb(null, res.body.entities)
		})
	}
	static alchemyKeywords(text, cb) {
		$.get('http://gateway-a.watsonplatform.net/calls/text/TextGetRankedKeywords')
		.query({
			apikey: Consts.alchemyKey,
			text,
			outputMode: 'json'
		})
		.end((err, res) => {
			if(err) return cb(err)
			cb(null, res.body.keywords)
		})
	}
	static indicoKeywords(text, cb) {
		$.post(`https://apiv2.indico.io/keywords?key=${Consts.indicoKey}`)
		.send(JSON.stringify({data: text, relative: true}))
		.end((err, res) => {
			if(err) return cb(err)
			cb(null, JSON.parse(res.text).results)
		})
	}
	static textRazorKeywords(text, cb) {
		$.post(`http://api.textrazor.com/`)
		.type('form')
		.set('X-TextRazor-Key', Consts.textRazorKey)
		.send({
			text,
			extractors: 'entities',
			languageOverride: 'eng'
		})
		.end((err, res) => {
			if(err) return cb(err)
			let {entities} = res.body.response
			let data = {}
			data.countries = _(entities).filter(e => _.indexOf(e.type, 'Place')>-1 || _.indexOf(e.type, 'Country')>-1)
			.map(e => ({
				type: 'country',
				owlType: e.type,
				country: e.entityId,
				text: e.matchedText
			})).value()
			data.drivers = _(entities).filter(e => _.indexOf(e.type, 'Person')>-1 || _.indexOf(e.type, 'RacingDriver')>-1)
			.map(e => ({
				type: 'driver',
				owlType: e.type,
				driver: e.entityId,
				text: e.matchedText
			})).value()
			data.gps = _(entities).filter(e => _.indexOf(e.type, 'GrandPrix')>-1)
			.map(e => ({
				type: 'grandPrix',
				owlType: e.type,
				gp: e.entityId,
				text: e.matchedText
			})).value()
			data.teams = _(entities).filter(e => _.indexOf(e.type, 'FormulaOneTeam')>-1)
			.map(e => ({
				type: 'team',
				owlType: e.type,
				gp: e.entityId,
				text: e.matchedText
			})).value()
			cb(null, data)
		})
	}
	static alchemyDates(text, cb) {
		$.get('http://gateway-a.watsonplatform.net/calls/text/TextExtractDates')
		.query({
			apikey: Consts.alchemyKey,
			text,
			outputMode: 'json'
		})
		.end((err, res) => {
			if(err) return cb(err)
			let dates = _.map(res.body.dates, d => d.text)
			cb(null, dates)
		})
	}
}

module.exports = AIService
