import $ from 'superagent'
import _ from 'lodash'
import async from 'async'

class F1Service {
	static getEntity(entity, cb) {
		let type = 'drivers'
		if(entity.type == 'track') {
			type = 'circuits'
		} else if(entity.type == 'team') {
			type = 'constructors'
		}
		$.get(`http://ergast.com/api/f1/${type}/${entity.ergastID}.json`)
		.end((err, res) => {
			if(err) return cb(err)
			if(entity.type=='driver') {
				let data = res.body.MRData.DriverTable.Drivers
				if(!data.length) return cb(true)
				data = _.first(data)
				return cb(null, {
					givenName: {value: data.givenName || 'n/a'},
					familyName: {value: data.familyName || 'n/a'},
					code: {value: data.code || 'n/a'},
					dateOfBirth: {value: data.dateOfBirth || 'n/a'},
					nationality: {value: data.nationality || 'n/a'},
					number: {value: data.permanentNumber || 'n/a'},
					url: {value: data.url || 'n/a'}
				})
			} else if(entity.type=='track') {
				let data = res.body.MRData.CircuitTable.Circuits
				if(!data.length) return cb(true)
				data = _.first(data)
				return cb(null, {
					name: {value: data.circuitName || 'n/a'},
					city: {value: data.Location.city || 'n/a'},
					country: {value: data.Location.country || 'n/a'},
					url: {value: data.url || 'n/a'}
				})
			} else if(entity.type=='team') {
				let data = res.body.MRData.ConstructorTable.Constructors
				if(!data.length) return cb(true)
				data = _.first(data)
				return cb(null, {
					name: {value: data.name || 'n/a'},
					nationality: {value: data.nationality || 'n/a'},
					url: {value: data.url || 'n/a'}
				})
			} else {
				return cb(true)
			}
		})
	}

	static getSummary(summary, cb) {
		switch(summary.type) {
			case 'raceCalendar':
				F1Service.getRaceCalendar(summary.year, cb)
				break
			case 'driverStandings':
				F1Service.getDriverSeasonResults(summary.year, cb)
				break
			case 'constructorStandings':
				F1Service.getTeamSeasonResults(summary.year, cb)
				break
			case 'driverWorldTitles':
				F1Service.getDriverWorldTitles(summary.driver, cb)
				break
			case 'driverSeasonFinishes':
				F1Service.getDriverSeasonFinishes(summary.driver, cb)
				break
			case 'driverTeams':
				F1Service.getDriverTeams(summary.driver, cb)
				break
			case 'driverSeasonStanding':
				F1Service.getDriverSeasonStanding(summary.driver, cb)
				break
			case 'nextRace':
				F1Service.getNextRace(cb)
				break
			default:
				cb(true)
				break
		}
	}

	static getDriverSeasonResults(year, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/driverStandings.json`, ['StandingsTable', 'StandingsLists', 'DriverStandings'], cb)
	}

	static getTeamSeasonResults(year, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/constructorStandings.json`, ['StandingsTable', 'StandingsLists', 'ConstructorStandings'], cb)
	}

	static getRaceCalendar(year, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}.json`, ['RaceTable', 'Races'], cb)
	}

	static getDriverResultsBySeason(driver, year, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/drivers/${driver}/results.json`, ['RaceTable', 'Races'], cb)
	}

	static getDriverWorldTitles(driver, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/drivers/${driver}/driverStandings/1/seasons.json`, ['SeasonTable', 'Seasons'], cb)
	}

	static getDriverSeasonFinishes(driver, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/drivers/${driver}/driverStandings.json`, ['StandingsTable', 'StandingsLists'], cb)
	}

	static getDriverTeams(driver, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/drivers/${driver}/constructors.json`, ['ConstructorTable', 'Constructors'], cb)
	}

	static getDriverSeasonStanding(driver, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/current/drivers/${driver}/driverStandings.json`, ['StandingsTable', 'StandingsLists', 'DriverStandings'], cb)
	}

	static getNextRace(cb) {
		F1Service.callApi(`http://ergast.com/api/f1/current/next.json`, ['RaceTable', 'Races'], cb)
	}

	static callApi(link, keys, cb) {
		$.get(link)
		.end((err, res) => {
			if(err) return cb(true)
			let data = res.body.MRData
			async.forEachSeries(keys, (k, cb1) => {
				if(!data[k]) return cb1(true)
				data = data[k]
				if(_.isArray(data)) {
					if(!data.length) return cb1(true)
					if(_.last(keys)!=k) data = _.first(data)
				}
				cb1()
			}, err => cb(err, data))
		})
	}

	static resultsFormater(type) {
		switch(type) {
			case 'raceCalendar':
				return [{
					name: 'Round',
					key: ['round']
				}, {
					name: 'Name',
					key: ['raceName']
				}, {
					name: 'Date',
					key: ['date']
				}, {
					name: 'Circuit',
					key: ['Circuit', 'circuitName']
				}, {
					name: 'Country',
					key: ['Circuit', 'Location', 'country']
				}]
				break
			case 'driverStandings':
				return [{
					name: 'Position',
					key: ['position']
				}, {
					name: 'First Name',
					key: ['Driver', 'givenName']
				}, {
					name: 'Last Name',
					key: ['Driver', 'familyName']
				}, {
					name: 'Team',
					key: ['Constructors', 'name']
				}, {
					name: 'Points',
					key: ['points']
				}]
				break
			case 'constructorStandings':
				return [{
					name: 'Position',
					key: ['position']
				}, {
					name: 'Team',
					key: ['Constructor', 'name']
				}, {
					name: 'Points',
					key: ['points']
				}, {
					name: 'Wins',
					key: ['wins']
				}]
				break
			case 'driverWorldTitles':
				return [{
					name: 'Season',
					key: ['season']
				}, {
					name: 'More info',
					key: ['url']
				}]
				break
			case 'driverSeasonFinishes':
				return [{
					name: 'Season',
					key: ['season']
				}, {
					name: 'Position',
					key: ['DriverStandings', 'position']
				}, {
					name: 'Points',
					key: ['DriverStandings', 'points']
				}, {
					name: 'Wins',
					key: ['DriverStandings', 'wins']
				}, {
					name: 'Team',
					key: ['DriverStandings', 'Constructors', 'name']
				}]
				break
			case 'driverTeams':
				return [{
					name: 'Team',
					key: ['name']
				}, {
					name: 'Nationality',
					key: ['nationality']
				}, {
					name: 'More Info',
					key: ['url']
				}]
				break
			case 'driverSeasonStanding':
				return [{
					name: 'Position',
					key: ['position']
				}, {
					name: 'Points',
					key: ['points']
				}, {
					name: 'Wins',
					key: ['wins']
				}, {
					name: 'Team',
					key: ['Constructors', 'name']
				}]
				break
			case 'nextRace':
				return [{
					name: 'Round',
					key: ['round']
				}, {
					name: 'Name',
					key: ['raceName']
				}, {
					name: 'Date',
					key: ['date']
				}, {
					name: 'Circuit',
					key: ['Circuit', 'circuitName']
				}, {
					name: 'Country',
					key: ['Circuit', 'Location', 'country']
				}]
				break
			default:
				return []
				break
		}
	}
}

export default F1Service
