const _ = require('lodash')
const async = require('async')

const AnalyseService = require('../services/Analyse.Service')
const SparqlService = require('../services/Sparql.Service')

class AIController {
	static analyse(req, res) {
		let {text} = req.body
		text = text.toLowerCase()
		AnalyseService.analyseText(text, (err, data) => {
			if(err) return res.sendStatus(500)
			res.json(data)
		})
	}

	static sparql(req, res) {
		let {text} = req.body
		SparqlService.getResults(text, (err, data) => {
			res.json(data);
		})
	}
}

module.exports = AIController
