import _ from 'lodash'
import async from 'async'
import Combinatorics from 'js-combinatorics'
import {specialKeywords} from './Keywords'
import moment from 'moment'

import Utils from './Utils'
import F1Service from '../services/F1.Service'

class Analyser {
	static parseEntities(query, entities, cb) {
		let dates = _(entities).filter(e => e.type=='date').map('name').value()
		let _profiles = _.filter(entities, e => e.type!='date')
		Analyser.evaluateProfiles(query, _profiles, profiles => {
			Analyser.dataCase(query, profiles, dates, (summaries, _ents) => {
				if(_ents!=undefined && !_ents) profiles = []
				cb({dates, profiles, summaries})
			})
		})
	}

	static evaluateProfiles(query, profiles, cb) {
		let keys = _(query.split(' ')).map(k => _.deburr(k.toLowerCase())).uniq().value()
		let combinations = Utils.naturalKeywordCombinations(keys)
		let ps = _(profiles).map(p => {
			let keywords = _(Utils.naturalKeywordCombinations(p.keywords)).flattenDeep().map(k => _.deburr(k)).uniq().value()
			let intersect = _.intersection(keys, keywords)
			p.confident = intersect.length
			p.intersect = intersect
			if(_.indexOf(combinations, _.deburr(p.name.toLowerCase()))>-1) p.confident=100
			return p
		}).orderBy(['confident', 'name'], ['desc', 'asc']).value()
		Analyser.createDependencyGraph(ps, cb)
	}

	static createDependencyGraph(profiles, cb) {
		let profs = _.groupBy(profiles, 'type')
		profs._keys = _.keys(profs)
		profs = _.map(profs._keys, k => {
			let p = profs[k]
			let group = _.groupBy(p, 'intersect')
			let keys = _.keys(group)
			return {_keys: keys, data: group}
		})
		profs = _(profs).map(p => {
			return _(p._keys).map(k => {
				let pr = p.data[k]
				let max = _.maxBy(pr, 'confident').confident
				return _(pr).filter(_p => _p.confident == max).flatten().value()
			}).flatten().value()
		}).flatten().orderBy(['confident', 'type', 'name'], ['desc', 'asc', 'asc']).uniqBy('_id').value()
		cb(profs)
	}

	static dataCase(query, profiles, dates, cb) {
		let keywords = _(query.split(' ')).map(k => _.deburr(k.toLowerCase())).value()
		let combinations = Utils.naturalKeywordCombinations(keywords)
		let words = _(specialKeywords).filter(sk => _.intersection(sk.words, combinations).length).map('key').uniq().value()
		let grouped = _.groupBy(profiles, 'type')
		let keys = _.keys(grouped)
		if(dates.length) {
			if(profiles.length) {
				if(Utils.onlyInArray(keys, ['driver'])) {
					let apiData = Analyser.inspectDriverData(words)
					apiData = apiData.map(a => `${a}ByYear`)
					let combos = []
					_.forEach(dates, d => {_.forEach(grouped.driver, dr => combos.push({date: d, driver: dr}))})
					return Analyser.getDataInfo(combos, apiData, cb)
				}
				else if(Utils.onlyInArray(keys, ['team'])) {
					let apiData = Analyser.inspectTeamData(words)
					apiData = apiData.map(a => `${a}ByYear`)
					let combos = []
					_.forEach(dates, d => {_.forEach(grouped.team, tm => combos.push({date: d, team: tm}))})
					return Analyser.getDataInfo(combos, apiData, cb)
				}
				else if(Utils.onlyInArray(keys, ['track'])) return Analyser.getDataInfo(grouped.track, Analyser.inspectTrackData(words), cb)
				else if(Utils.onlyInArray(keys, ['driver', 'team'])) {
					let driverData = Analyser.inspectDriverData(words, true)
					let teamData = Analyser.inspectTeamData(words, true)
					let combos = []
					_.forEach(grouped.driver, d => {_.forEach(grouped.team, t => combos.push({driver: d, team: t}))})
					let summaries = []
					return async.parallel([
						cb1 => Analyser.getDataInfo(combos, ['driverRaceResultsByTeam'], sum => {
							summaries.push(sum)
							cb1()
						}),
						cb1 => Analyser.getDataInfo(grouped.driver, driverData, sum => {
							summaries.push(sum)
							cb1()
						}),
						cb1 => Analyser.getDataInfo(grouped.team, teamData, sum => {
							summaries.push(sum)
							cb1()
						})
					], () => {
						cb(_.flatten(summaries))
					})
				}
				else if(Utils.onlyInArray(keys, ['driver', 'track'])) {
					let driverData = Analyser.inspectDriverData(words, true)
					let trackData = Analyser.inspectTrackData(words, true)
					let combos = []
					_.forEach(grouped.driver, d => {_.forEach(grouped.track, t => combos.push({driver: d, track: t}))})
					let summaries = []
					return async.parallel([
						cb1 => Analyser.getDataInfo(combos, ['driverRaceResultsByTrack'], sum => {
							summaries.push(sum)
							cb1()
						}),
						cb1 => Analyser.getDataInfo(grouped.driver, driverData, sum => {
							summaries.push(sum)
							cb1()
						}),
						cb1 => Analyser.getDataInfo(grouped.track, trackData, sum => {
							summaries.push(sum)
							cb1()
						})
					], () => {
						cb(_.flatten(summaries))
					})
				}
				else if(Utils.onlyInArray(keys, ['team', 'track'])) {
					let teamData = Analyser.inspectTeamData(words, true)
					let trackData = Analyser.inspectTrackData(words, true)
					let combos = []
					_.forEach(grouped.team, d => {_.forEach(grouped.track, t => combos.push({team: d, track: t}))})
					let summaries = []
					return async.parallel([
						cb1 => Analyser.getDataInfo(combos, ['teamAttendanceByTrack'], sum => {
							summaries.push(sum)
							cb1()
						}),
						cb1 => Analyser.getDataInfo(grouped.team, teamData, sum => {
							summaries.push(sum)
							cb1()
						}),
						cb1 => Analyser.getDataInfo(grouped.track, trackData, sum => {
							summaries.push(sum)
							cb1()
						})
					], () => {
						cb(_.flatten(summaries))
					})
				}
				else if(Utils.onlyInArray(keys, ['driver', 'team', 'track'])) {
					let driverData = Analyser.inspectDriverData(words, true)
					let teamData = Analyser.inspectTeamData(words, true)
					let trackData = Analyser.inspectTrackData(words, true)
					let combos = []
					_.forEach(grouped.driver, d => {_.forEach(grouped.team, t => {_.forEach(grouped.track, tr => combos.push({driver: d, team: t, track: tr}))})})
					let summaries = []
					return async.parallel([
						cb1 => Analyser.getDataInfo(combos, ['driverRaceResultsByTeamAndTrack'], sum => {
							summaries.push(sum)
							cb1()
						}),
						cb1 => Analyser.getDataInfo(grouped.driver, driverData, sum => {
							summaries.push(sum)
							cb1()
						}),
						cb1 => Analyser.getDataInfo(grouped.team, teamData, sum => {
							summaries.push(sum)
							cb1()
						})
					], () => {
						cb(_.flatten(summaries))
					})
				}
			} else {
				let apiData = ['raceCalendar', 'driverStandings', 'constructorStandings']
				if(Utils.oneOfCombinations(words, ['season', 'standing'])) apiData = ['driverStandings', 'constructorStandings']
				else if(Utils.oneOfCombinations(words, ['calendar', 'season'])) apiData = ['raceCalendar']
				else if(Utils.oneOfCombinations(words, ['driver', 'standing', 'season'])) apiData = ['driverStandings']
				else if(Utils.oneOfCombinations(words, ['team', 'standing', 'season'])) apiData = ['constructorStandings']
				return Analyser.getDataInfo(dates, apiData, cb)
			}
		} else {
			if(Utils.onlyInArray(keys, ['driver'])) return Analyser.getDataInfo(grouped.driver, Analyser.inspectDriverData(words), cb)
			else if(Utils.onlyInArray(keys, ['team'])) return Analyser.getDataInfo(grouped.team, Analyser.inspectTeamData(words), cb)
			else if(Utils.onlyInArray(keys, ['track'])) {
				let apiData = Analyser.inspectTrackData(words)
				let _ents = true
				if(apiData.length==1 && _.first(apiData)=='driversByNationality') {
					grouped.track = [_.first(grouped.track)]
					_ents = false
				}
				return Analyser.getDataInfo(grouped.track, apiData, cb, _ents)
			}
			else if(Utils.onlyInArray(keys, ['driver', 'team'])) {
				let driverData = Analyser.inspectDriverData(words, true)
				let teamData = Analyser.inspectTeamData(words, true)
				let combos = []
				_.forEach(grouped.driver, d => {_.forEach(grouped.team, t => combos.push({driver: d, team: t}))})
				let summaries = []
				return async.parallel([
					cb1 => Analyser.getDataInfo(combos, ['driverRaceResultsByTeam'], sum => {
						summaries.push(sum)
						cb1()
					}),
					cb1 => Analyser.getDataInfo(grouped.driver, driverData, sum => {
						summaries.push(sum)
						cb1()
					}),
					cb1 => Analyser.getDataInfo(grouped.team, teamData, sum => {
						summaries.push(sum)
						cb1()
					})
				], () => {
					cb(_.flatten(summaries))
				})
			}
			else if(Utils.onlyInArray(keys, ['driver', 'track'])) {
				let driverData = Analyser.inspectDriverData(words, true)
				let trackData = Analyser.inspectTrackData(words, true)
				let combos = []
				_.forEach(grouped.driver, d => {_.forEach(grouped.track, t => combos.push({driver: d, track: t}))})
				let summaries = []
				return async.parallel([
					cb1 => Analyser.getDataInfo(combos, ['driverRaceResultsByTrack'], sum => {
						summaries.push(sum)
						cb1()
					}),
					cb1 => Analyser.getDataInfo(grouped.driver, driverData, sum => {
						summaries.push(sum)
						cb1()
					}),
					cb1 => Analyser.getDataInfo(grouped.track, trackData, sum => {
						summaries.push(sum)
						cb1()
					})
				], () => {
					cb(_.flatten(summaries))
				})
			}
			else if(Utils.onlyInArray(keys, ['team', 'track'])) {
				let teamData = Analyser.inspectTeamData(words, true)
				let trackData = Analyser.inspectTrackData(words, true)
				let combos = []
				_.forEach(grouped.team, d => {_.forEach(grouped.track, t => combos.push({team: d, track: t}))})
				let summaries = []
				return async.parallel([
					cb1 => Analyser.getDataInfo(combos, ['teamAttendanceByTrack'], sum => {
						summaries.push(sum)
						cb1()
					}),
					cb1 => Analyser.getDataInfo(grouped.team, teamData, sum => {
						summaries.push(sum)
						cb1()
					}),
					cb1 => Analyser.getDataInfo(grouped.track, trackData, sum => {
						summaries.push(sum)
						cb1()
					})
				], () => {
					cb(_.flatten(summaries))
				})
			}
			else if(Utils.onlyInArray(keys, ['driver', 'team', 'track'])) {
				let driverData = Analyser.inspectDriverData(words, true)
				let teamData = Analyser.inspectTeamData(words, true)
				let trackData = Analyser.inspectTrackData(words, true)
				let combos = []
				_.forEach(grouped.driver, d => {_.forEach(grouped.team, t => {_.forEach(grouped.track, tr => combos.push({driver: d, team: t, track: tr}))})})
				let summaries = []
				return async.parallel([
					cb1 => Analyser.getDataInfo(combos, ['driverRaceResultsByTeamAndTrack'], sum => {
						summaries.push(sum)
						cb1()
					}),
					cb1 => Analyser.getDataInfo(grouped.driver, driverData, sum => {
						summaries.push(sum)
						cb1()
					}),
					cb1 => Analyser.getDataInfo(grouped.team, teamData, sum => {
						summaries.push(sum)
						cb1()
					})
				], () => {
					cb(_.flatten(summaries))
				})
			}
			else if(words.length) {
				if(Utils.onlyInArray(words, ['next'])) return Analyser.getDataInfo(['current'], ['nextRace'], cb)
				else if(Utils.oneOfCombinations(words, ['current', 'season', 'summary'], ['current', 'summary'])) return Analyser.getDataInfo(['current'], ['nextRace', 'raceCalendar','driverStandings', 'constructorStandings'], cb)
				else if(Utils.oneOfCombinations(words, ['current', 'season', 'standing', 'driver'], ['current', 'standing', 'driver'])) return Analyser.getDataInfo(['current'], ['driverStandings'], cb)
				else if(Utils.oneOfCombinations(words, ['current', 'season', 'standing', 'team'], ['current', 'standing', 'team'])) return Analyser.getDataInfo(['current'], ['constructorStandings'], cb)
				else if(Utils.oneOfCombinations(words, ['current', 'season', 'standing'], ['current', 'standing'])) return Analyser.getDataInfo(['current'], ['driverStandings', 'constructorStandings'], cb)
				else if(Utils.oneOfCombinations(words, ['current', 'season', 'calendar'], ['current', 'calendar'])) return Analyser.getDataInfo(['current'], ['raceCalendar'], cb)
				else if(_.indexOf(words, 'current')>-1) {
					let apiData = []
					if(_.indexOf(words, 'next')>-1) apiData.push('nextRace')
					if(_.indexOf(words, 'standing')>-1 && _.indexOf(words, 'driver')==-1 && _.indexOf(words, 'team')==-1) apiData.push(['driverStandings', 'constructorStandings'])
					if(_.indexOf(words, 'driver')>-1) apiData.push('driverStandings')
					if(_.indexOf(words, 'team')>-1) apiData.push('constructorStandings')
					if(_.indexOf(words, 'calendar')>-1) apiData.push('raceCalendar')
					apiData = _.flatten(apiData)
					if(apiData.length) return Analyser.getDataInfo(['current'], apiData, cb)
				}
			}
		}
		cb([])
	}

	static inspectDriverData(words, empty = false) {
		let apiData = empty ? [] : ['driverSeasonStanding', 'driverWorldTitles', 'driverSeasonFinishes', 'driverTeams']
		if(Utils.oneOfCombinations(words, ['current', 'standing', 'driver'], ['current'])) apiData = ['driverSeasonStanding']
		else if(Utils.oneOfCombinations(words, ['title', 'driver'], ['title'])) apiData = ['driverWorldTitles']
		else if(Utils.oneOfCombinations(words, ['season', 'driver', 'standing'], ['season'])) apiData = ['driverSeasonFinishes']
		else if(Utils.oneOfCombinations(words, ['team', 'driver'], ['team'])) apiData = ['driverTeams']
		else {
			let _apiData = []
			if(_.indexOf(words, 'current')>-1) _apiData.push('driverSeasonStanding')
			if(_.indexOf(words, 'title')>-1) _apiData.push('driverWorldTitles')
			if(_.indexOf(words, 'season')>-1) _apiData.push('driverSeasonFinishes')
			if(_.indexOf(words, 'team')>-1) _apiData.push('driverTeams')
			apiData = _apiData.length ? _apiData : apiData
		}
		return apiData
	}

	static inspectTeamData(words, empty = false) {
		let apiData = empty ? [] : ['teamSeasonStanding', 'teamWorldTitles', 'teamSeasonFinishes', 'teamDrivers']
		if(Utils.oneOfCombinations(words, ['current', 'standing', 'team'], ['current'])) apiData = ['teamSeasonStanding']
		else if(Utils.oneOfCombinations(words, ['title', 'team'], ['title'])) apiData = ['teamWorldTitles']
		else if(Utils.oneOfCombinations(words, ['season', 'team', 'standing'], ['season'])) apiData = ['teamSeasonFinishes']
		else if(Utils.oneOfCombinations(words, ['team', 'driver'], ['driver'])) apiData = ['teamDrivers']
		else {
			let _apiData = []
			if(_.indexOf(words, 'current')>-1) _apiData.push('teamSeasonStanding')
			if(_.indexOf(words, 'title')>-1) _apiData.push('teamWorldTitles')
			if(_.indexOf(words, 'season')>-1) _apiData.push('teamSeasonFinishes')
			if(_.indexOf(words, 'driver')>-1) _apiData.push('teamDrivers')
			apiData = _apiData.length ? _apiData : apiData
		}
		return apiData
	}

	static inspectTrackData(words, empty = false) {
		let apiData = empty ? [] : ['trackWinners']
		if(Utils.oneOfCombinations(words, ['current', 'standing'])) apiData = ['currentTrackResults']
		else if(!empty && Utils.oneOfCombinations(words, ['driver', 'nation'], ['driver'])) apiData = ['driversByNationality']
		return apiData
	}

	static getDataInfo(data, selection, cb, entities = true) {
		let summaries = []
		async.forEach(data, (d, cb1) => {
			d = d=='current' ? moment().format('YYYY') : d
			summaries.push(_.filter([{
				name: 'Next Race', type: 'nextRace'
			}, {
				name: `${d} Race Calendar`,
				type: 'raceCalendar',
				year: d
			}, {
				name: `${d} Driver Standings`,
				type: 'driverStandings',
				year: d
			}, {
				name: `${d} Constructor Standings`,
				type: 'constructorStandings',
				year: d
			}, {
				name: `${d.name}'s Current Season Info`,
				type: 'driverSeasonStanding',
				driver: d.ergastID
			}, {
				name: `${d.name}'s World Titles`,
				type: 'driverWorldTitles',
				driver: d.ergastID
			}, {
				name: `${d.name}'s Season Finishes`,
				type: 'driverSeasonFinishes',
				driver: d.ergastID
			}, {
				name: `${d.name}'s Constructors`,
				type: 'driverTeams',
				driver: d.ergastID
			}, {
				name: `${d.name}'s Current Season Info`,
				type: 'teamSeasonStanding',
				team: d.ergastID
			}, {
				name: `${d.name}'s World Titles`,
				type: 'teamWorldTitles',
				team: d.ergastID
			}, {
				name: `${d.name}'s Season Finishes`,
				type: 'teamSeasonFinishes',
				team: d.ergastID
			}, {
				name: `${d.name}'s Drivers`,
				type: 'teamDrivers',
				team: d.ergastID
			}, {
				name: `${d.name} Winners`,
				type: 'trackWinners',
				track: d.ergastID
			}, {
				name: `Drivers`,
				type: 'driversByNationality',
				track: d.ergastID
			}, {
				name: `${moment().format('YYYY')} ${d.name} Results`,
				type: 'currentTrackResults',
				track: d.ergastID
			}, {
				name: `${d.driver ? d.driver.name : ''} in ${d.team ? d.team.name : ''} Race Results`,
				type: 'driverRaceResultsByTeam',
				driver: d.driver ? d.driver.ergastID : null,
				team: d.team ? d.team.ergastID : null
			}, {
				name: `${d.driver ? d.driver.name : ''} in ${d.track ? d.track.name : ''} Race Results`,
				type: 'driverRaceResultsByTrack',
				driver: d.driver ? d.driver.ergastID : null,
				track: d.track ? d.track.ergastID : null
			}, {
				name: `${d.team ? d.team.name : ''} in ${d.track ? d.track.name : ''} Attendance`,
				type: 'teamAttendanceByTrack',
				team: d.team ? d.team.ergastID : null,
				track: d.track ? d.track.ergastID : null
			}, {
				name: `${d.driver ? d.driver.name : ''} in ${d.team ? d.team.name : ''} ${d.track ? d.track.name : ''} Race Results`,
				type: 'driverRaceResultsByTeamAndTrack',
				driver: d.driver ? d.driver.ergastID : null,
				team: d.team ? d.team.ergastID : null,
				track: d.track ? d.track.ergastID : null
			}, {
				name: `${d.date} ${d.driver ? d.driver.name : ''} Season Info`,
				type: 'driverSeasonStandingByYear',
				year: d.date,
				driver: d.driver ? d.driver.ergastID : null
			}, {
				name: `${d.date} ${d.driver ? d.driver.name : ''} World Title`,
				type: 'driverWorldTitlesByYear',
				year: d.date,
				driver: d.driver ? d.driver.ergastID : null
			}, {
				name: `${d.date} ${d.driver ? d.driver.name : ''}'s Season Finishes`,
				type: 'driverSeasonFinishesByYear',
				year: d.date,
				driver: d.driver ? d.driver.ergastID : null
			}, {
				name: `${d.date} ${d.driver ? d.driver.name : ''}'s Constructor`,
				type: 'driverTeamsByYear',
				year: d.date,
				driver: d.driver ? d.driver.ergastID : null
			}, {
				name: `${d.date} ${d.team ? d.team.name : ''}'s Season Info`,
				type: 'teamSeasonStandingByYear',
				year: d.date,
				team: d.team ? d.team.ergastID : null
			}, {
				name: `${d.date} ${d.team ? d.team.name : ''}'s World Titles`,
				type: 'teamWorldTitlesByYear',
				year: d.date,
				team: d.team ? d.team.ergastID : null
			}, {
				name: `${d.date} ${d.team ? d.team.name : ''}'s Drivers`,
				type: 'teamDriversByYear',
				year: d.date,
				team: d.team ? d.team.ergastID : null
			}], _d => _.indexOf(selection, _d.type)>-1))
			cb1()
		}, err => cb(_.flatten(summaries), entities))
	}
}

export default Analyser
