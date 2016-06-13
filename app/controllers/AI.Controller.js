const _ = require('lodash')
const async = require('async')

const Database = require('../lib/Database')
const AnalyseService = require('../services/Analyse.Service')

const Entity = Database.model('Entity')

class AIController {
	static analyse(req, res) {
		let {text} = req.body
		text = text.toLowerCase()
		AnalyseService.analyseText(text, (err, data) => {
			if(err) return res.sendStatus(500)
			res.json(data)
		})
	}

	static getSuggestions(req, res) {
		Entity.find({}, (err, es) => {
			if(err) return res.sendStatus(500)
			let keywords = _(es).map('keywords').flattenDeep().uniq().value()
			res.json(keywords)
		})
	}
}

module.exports = AIController
