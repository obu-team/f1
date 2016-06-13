const _ = require('lodash')
const async = require('async')
const mongoose = require('mongoose')

class RootController {
	static get(req, res) {
		res.render('index')
	}

	static all(req, res) {
		if(req.xhr) return res.sendStatus(404)
		res.render('index')
	}
}

module.exports = RootController
