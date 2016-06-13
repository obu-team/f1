const _ = require('lodash')
const async = require('async')
const $ = require('superagent')

const Consts = require('../lib/Consts')

class F1Service {
	static getAllDrivers(cb) {
		$.get(`${Consts.ergastUrl}/drivers.json?limit=1000`)
		.end((err, res) => {
			if(err) return cb(err)
			cb(null, res.body.MRData.DriverTable.Drivers)
		})
	}

	static getAllTeams(cb) {
		$.get(`${Consts.ergastUrl}/constructors.json?limit=1000`)
		.end((err, res) => {
			if(err) return cb(err)
			cb(null, res.body.MRData.ConstructorTable.Constructors)
		})
	}

	static getAllTracks(cb) {
		$.get(`${Consts.ergastUrl}/circuits.json?limit=1000`)
		.end((err, res) => {
			if(err) return cb(err)
			cb(null, res.body.MRData.CircuitTable.Circuits)
		})
	}
}

module.exports = F1Service
