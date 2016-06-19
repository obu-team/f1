const _ = require('lodash')
const async = require('async')
const $ = require('superagent')

const Consts = require('../lib/Consts')
const AIService = require('./AI.Service')
const F1Service = require('./F1.Service')
const Database = require('../lib/Database')
const Utils = require('../lib/Utils')

const Entity = Database.model('Entity')

class AnalyseService {
	static analyseText(text, cb) {
		let data = {}
		data.dates = []
		async.parallel([
			cb => AIService.keywords('textRazor', text, (err, r) => {
				if(err) return cb(err)
				data.countries = r.countries
				data.drivers = r.drivers
				data.gps = r.gps
				data.teams = r.teams
				cb()
			})/*,
			cb => AIService.dates('alchemy', text, (err, r) => {
				if(err) return cb(err)
				data.dates = r
				cb()
			})*/
		], err => {
			if(err) return cb(err)
			AnalyseService.compare(text, data, cb)
		})
	}

	static compare(text, data, cb) {
		let entities = []
		let dates = []
		async.parallel([
			cb1 => AnalyseService.getRawEntities(text, (err, es) => {
				if(err) return cb1(err)
				entities.push(es)
				cb1()
			}),
			cb1 => AnalyseService.getRawDates(text, ds => {
				dates.push(ds)
				cb1()
			}),
			cb1 => AnalyseService.analyseDrivers(data.drivers, (err, drivers) => {
				if(err) return cb1(err)
				entities.push(drivers)
				cb1()
			}),
			cb1 => AnalyseService.analyseTeams(data.teams, (err, teams) => {
				if(err) return cb1(err)
				entities.push(teams)
				cb1()
			}),
			cb1 => AnalyseService.analyseTracks(data.countries, (err, tracks) => {
				if(err) return cb1(err)
				entities.push(tracks)
				cb1()
			})
		], err => {
			if(err) return cb(err)
			entities = _.flattenDeep(entities)
			entities = _.uniqBy(entities, 'ergastID')
			dates.push(data.dates)
			dates = _(dates).flattenDeep().uniq().value()
			_.forEach(dates, date => {
				entities.push({
					type: 'date',
					name: date
				})
			})
			cb(null, entities)
		})
	}

	static getRawDates(text, cb) {
		let dates = _(text.split(' ')).filter(k => /^\d{4}$/.test(k)).uniq().value()
		cb(dates || [])
	}

	static getRawEntities(text, cb) {
		let keys = text.split(' ')
		let naturalKeys = Utils.naturalKeywordCombinations(keys)
		Entity.find({
			$or: [
				{name: new RegExp('^'+text+'$', "i")},
				{name: {$in: naturalKeys}},
				{keywords: {$elemMatch: {$in: naturalKeys}}}
			]
		}, (err, es) => {
			if(err) return cb(err)
			cb(null, es)
		})
	}

	static analyseDrivers(drivers, cb) {
		let _drivers = []
		let apiDrivers = []
		async.series([
			cb1 => {
				F1Service.getAllDrivers((err, _ds) => {
					if(err) return cb1(err)
					apiDrivers = _ds
					cb1()
				})
			},
			cb1 => {
				async.forEach(drivers, (driver, cb2) => {
					AnalyseService.analyseDriverDb(apiDrivers, driver, (err, d) => {
						if(!err) _drivers.push(d)
						cb2()
					})
				}, cb1)
			}
		], err => {
			cb(err, _drivers)
		})
	}

	static analyseDriverDb(apiDrivers, driver, cb) {
		Entity.find({
			type: 'driver',
			$or: [
				{name: new RegExp('^'+driver.text.toLowerCase()+'$', "i")},
				{keywords: driver.text},
				{keywords: driver.driver.toLowerCase()}
			]
		}, (err, ds) => {
			if(err) return cb(err)
			if(!ds.length) return AnalyseService.analyseDriverApi(apiDrivers, driver, cb)
			let drivers = []
			async.forEach(ds, (d, cb1) => {
				let {keywords} = d
				keywords.push(driver.text)
				keywords = _.uniq(keywords)
				d.keywords = keywords
				Entity.update({
					_id: d._id
				}, d, err => {
					drivers.push(d)
					cb1()
				})
			}, err => {
				cb(err, drivers)
			})
		})
	}

	static analyseDriverApi(apiDrivers, driver, cb) {
		let _ds = _.filter(apiDrivers, ad => driver.driver.toLowerCase()==`${ad.givenName.toLowerCase()} ${ad.familyName.toLowerCase()}`)
		if(!_ds.length) return cb(true)
		let drivers = []
		async.forEach(_ds, (_d, cb1) => {
			Entity.findOne({ergastID: _d.driverId}, (err, d) => {
				if(err) return cb1()
				if(!d) {
					let newDriver = new Entity({
						name: `${_d.givenName} ${_d.familyName}`,
						type: 'driver',
						owlType: driver.owlType,
						dbpediaID: '',
						ergastID: _d.driverId,
						keywords: [`${_d.givenName.toLowerCase()} ${_d.familyName.toLowerCase()}`, _d.givenName.toLowerCase(), _d.familyName.toLowerCase(), driver.text]
					})
					newDriver.save(err => {
						if(!err) drivers.push(newDriver)
						return cb1()
					})
				} else {
					let {keywords} = d
					keywords.push(driver.text)
					keywords = _.uniq(keywords)
					d.keywords = keywords
					Entity.update({
						_id: d._id
					}, d, err => {
						drivers.push(d)
						return cb1()
					})
				}
			})
		}, err => {
			cb(err, drivers)
		})
	}

	static analyseTeams(teams, cb) {
		let _teams = []
		let apiTeams = []
		async.series([
			cb1 => F1Service.getAllTeams((err, _ts) => {
				if(err) return cb1(err)
				apiTeams = _ts
				cb1()
			}),
			cb1 => {
				async.forEach(teams, (team, cb2) => {
					AnalyseService.analyseTeamDb(apiTeams, team, (err, t) => {
						if(!err) _teams.push(t)
						cb2()
					})
				}, cb1)
			}
		], err => {
			cb(err, _teams)
		})
	}

	static analyseTeamDb(apiTeams, team, cb) {
		Entity.find({
			type: 'team',
			$or: [
				{name: new RegExp('^'+team.text.toLowerCase()+'$', "i")},
				{keywords: team.text},
				{keywords: team.team.toLowerCase()}
			]
		}, (err, ts) => {
			if(err) return cb(err)
			if(!ts.length) return AnalyseService.analyseTeamApi(apiTeams, team, cb)
			let teams = []
			async.forEach(ts, (t, cb1) => {
				let {keywords} = t
				keywords.push(team.text)
				keywords = _.uniq(keywords)
				t.keywords = keywords
				Entity.update({
					_id: t._id
				}, t, err => {
					teams.push(t)
					cb1()
				})
			}, err => {
				cb(err, teams)
			})
		})
	}

	static analyseTeamApi(apiTeams, team, cb) {
		let _ts = _.filter(apiTeams, ad => team.team.toLowerCase()==ad.name.toLowerCase() || team.text==ad.name.toLowerCase())
		if(!_ts.length) return cb(true)
		let teams = []
		async.forEach(_ts, (_t, cb1) => {
			Entity.findOne({ergastID: _t.constructorId}, (err, t) => {
				if(err) return cb1()
				if(!t) {
					let keys = _t.name.split(' ')
					if(keys.length>1) keys.push(_t.name)
					keys = _.map(keys, k => k.toLowerCase())
					let newteam = new Entity({
						name: _t.name,
						type: 'team',
						owlType: team.owlType,
						dbpediaID: '',
						ergastID: _t.constructorId,
						keywords: keys
					})
					newteam.save(err => {
						if(!err) teams.push(newteam)
						return cb1()
					})
				} else {
					let {keywords} = t
					keywords.push(team.text)
					keywords = _.uniq(keywords)
					t.keywords = keywords
					Entity.update({
						_id: t._id
					}, t, err => {
						teams.push(t)
						return cb1()
					})
				}
			})
		}, err => {
			cb(err, teams)
		})
	}

	static analyseTracks(tracks, cb) {
		let _tracks = []
		let apiTracks = []
		async.series([
			cb1 => F1Service.getAllTracks((err, _ts) => {
				if(err) return cb1(err)
				apiTracks = _ts
				cb1()
			}),
			cb1 => {
				async.forEach(tracks, (track, cb2) => {
					AnalyseService.analyseTrackDb(apiTracks, track, (err, t) => {
						if(!err) _tracks.push(t)
						cb2()
					})
				}, cb1)
			}
		], err => {
			cb(err, _tracks)
		})
	}

	static analyseTrackDb(apiTracks, track, cb) {
		Entity.find({
			type: 'track',
			$or: [
				{name: new RegExp('^'+track.text.toLowerCase()+'$', "i")},
				{name: new RegExp('^'+track.country.toLowerCase()+'$', "i")},
				{keywords: track.text},
				{keywords: track.country.toLowerCase()}
			]
		}, (err, ts) => {
			if(err) return cb(err)
			if(!ts.length) return AnalyseService.analyseTrackApi(apiTracks, track, cb)
			let tracks = []
			async.forEach(ts, (t, cb1) => {
				let {keywords} = t
				keywords.push(track.text)
				keywords = _.uniq(keywords)
				t.keywords = keywords
				Entity.update({
					_id: t._id
				}, t, err => {
					tracks.push(t)
					cb1()
				})
			}, err => {
				cb(err, tracks)
			})
		})
	}

	static analyseTrackApi(apiTracks, track, cb) {
		let _ts = _.filter(apiTracks, ad => ad.Location.country==track.country || ad.Location.locality==track.country || ad.Location.country==track.text || ad.Location.locality==track.text)
		if(!_ts.length) return cb(true)
		let tracks = []
		async.forEach(_ts, (_t, cb1) => {
			Entity.findOne({ergastID: _t.constructorId}, (err, t) => {
				if(err) return cb1()
				if(!t) {
					let keys = _t.Location.country.split(' ')
					if(keys.length>1) keys.push(_t.name)
					let keys2 = _t.Location.locality.split(' ')
					if(keys2.length>1) keys.push(keys2)
					keys = _.flattenDeep(keys)
					keys.push(_t.circuitName)
					keys.push(track.country)
					keys.push(track.text)
					keys = _.map(keys, k => k.toLowerCase())
					let newtrack = new Entity({
						name: _t.circuitName,
						type: 'track',
						owlType: track.owlType,
						dbpediaID: '',
						ergastID: _t.circuitId,
						keywords: keys
					})
					newtrack.save(err => {
						if(!err) tracks.push(newtrack)
						return cb1()
					})
				} else {
					let {keywords} = t
					keywords.push(track.text)
					keywords = _.uniq(keywords)
					t.keywords = keywords
					Entity.update({
						_id: t._id
					}, t, err => {
						tracks.push(t)
						return cb1()
					})
				}
			})
		}, err => {
			cb(err, tracks)
		})
	}
}

module.exports = AnalyseService
