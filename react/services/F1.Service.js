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
		$.get(`http://ergast.com/api/f1/${type}/${entity.ergastID}.json?limit=1000`)
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

	static getDriverSeasonResults(year, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/driverStandings.json?limit=1000`, ['StandingsTable', 'StandingsLists', 'DriverStandings'], cb)
	}

	static getTeamSeasonResults(year, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/constructorStandings.json?limit=1000`, ['StandingsTable', 'StandingsLists', 'ConstructorStandings'], cb)
	}

	static getRaceCalendar(year, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getDriverResultsBySeason(driver, year, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/drivers/${driver}/results.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getDriverWorldTitles(driver, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/drivers/${driver}/driverStandings/1/seasons.json?limit=1000`, ['SeasonTable', 'Seasons'], cb)
	}

	static getDriverSeasonFinishes(driver, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/drivers/${driver}/driverStandings.json?limit=1000`, ['StandingsTable', 'StandingsLists'], cb)
	}

	static getDriverTeams(driver, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/drivers/${driver}/constructors.json?limit=1000`, ['ConstructorTable', 'Constructors'], cb)
	}

	static getDriverSeasonStanding(driver, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/current/drivers/${driver}/driverStandings.json?limit=1000`, ['StandingsTable', 'StandingsLists', 'DriverStandings'], cb)
	}

	static getNextRace(cb) {
		F1Service.callApi(`http://ergast.com/api/f1/current/next.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getTeamSeasonStanding(team, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/current/constructors/${team}/constructorStandings.json?limit=1000`, ['StandingsTable', 'StandingsLists', 'ConstructorStandings'], cb)
	}

	static getTeamWorldTitles(team, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/constructors/${team}/constructorStandings/1/seasons.json?limit=1000`, ['SeasonTable', 'Seasons'], cb)
	}

	static getTeamSeasonFinishes(team, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/constructors/${team}/constructorStandings.json?limit=1000`, ['StandingsTable', 'StandingsLists'], cb)
	}

	static getTeamDrivers(team, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/constructors/${team}/drivers.json?limit=1000`, ['DriverTable', 'Drivers'], cb)
	}

	static getTrackWinners(track, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/circuits/${track}/results/1.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getCurrentTrackResults(track, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/current/circuits/${track}/results.json?limit=1000`, ['RaceTable', 'Races', 'Results'], cb)
	}

	static getDriverRaceResultsByTeam(driver, team, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/constructors/${team}/drivers/${driver}/results.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getDriverRaceResultsByTrack(driver, track, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/circuits/${track}/drivers/${driver}/results.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getTeamAttendanceByTrack(team, track, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/circuits/${track}/constructors/${team}/results.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getDriverRaceResultsByTeamAndTrack(driver, team, track, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/constructors/${team}/drivers/${driver}/circuits/${track}/results.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getDriverSeasonStandingByYear(year, driver, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/drivers/${driver}/driverStandings.json?limit=1000`, ['StandingsTable', 'StandingsLists', 'DriverStandings'], cb)
	}

	static getDriverWorldTitlesByYear(year, driver, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/drivers/${driver}/driverStandings/1/seasons.json?limit=1000`, ['SeasonTable', 'Seasons'], cb)
	}

	static getDriverSeasonFinishesByYear(year, driver, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/drivers/${driver}/results.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getDriverTeamsByYear(year, driver, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/drivers/${driver}/constructors.json?limit=1000`, ['ConstructorTable', 'Constructors'], cb)
	}

	static getTeamSeasonStandingByYear(year, team, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/constructors/${team}/constructorStandings.json?limit=1000`, ['StandingsTable', 'StandingsLists', 'ConstructorStandings'], cb)
	}

	static getTeamWorldTitlesByYear(year, team, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/constructors/${team}/constructorStandings/1/seasons.json?limit=1000`, ['SeasonTable', 'Seasons'], cb)
	}

	static getTeamDriversByYear(year, team, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/constructors/${team}/drivers.json?limit=1000`, ['DriverTable', 'Drivers'], cb)
	}

	static getTrackWinnersByYear(year, track, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/circuits/${track}/results/1.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getTrackResultsByYear(year, track, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/circuits/${track}/results.json?limit=1000`, ['RaceTable', 'Races', 'Results'], cb)
	}

	static getDriverRaceResultsByTeamAndYear(year, driver, team, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/constructors/${team}/drivers/${driver}/results.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getDriverRaceResultsByTrackAndYear(year, driver, track, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/circuits/${track}/drivers/${driver}/results.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getDriverQualiResultsByTrackAndYear(year, driver, track, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/circuits/${track}/drivers/${driver}/qualifying.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getTeamAttendanceByTrackAndYear(year, team, track, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/circuits/${track}/constructors/${team}/results.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getDriverRaceResultsByTeamAndTrackAndYear(year, driver, team, track, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/constructors/${team}/drivers/${driver}/circuits/${track}/results.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getDriverQualiResultsByTeamAndTrackAndYear(year, driver, team, track, cb) {
		F1Service.callApi(`http://ergast.com/api/f1/${year}/constructors/${team}/drivers/${driver}/circuits/${track}/qualifying.json?limit=1000`, ['RaceTable', 'Races'], cb)
	}

	static getDriversByNationality(nation, cb) {
		$.post(`/ai/entity/list`)
		.send({name: nation})
		.end((err, res) => {
			if(err || !res.body.results.bindings.length) return cb(true)
			cb(null, res.body.results.bindings)
		})
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
			case 'teamSeasonStanding':
				F1Service.getTeamSeasonStanding(summary.team, cb)
				break
			case 'teamWorldTitles':
				F1Service.getTeamWorldTitles(summary.team, cb)
				break
			case 'teamSeasonFinishes':
				F1Service.getTeamSeasonFinishes(summary.team, cb)
				break
			case 'teamDrivers':
				F1Service.getTeamDrivers(summary.team, cb)
				break
			case 'trackWinners':
				F1Service.getTrackWinners(summary.track, cb)
				break
			case 'currentTrackResults':
				F1Service.getCurrentTrackResults(summary.track, cb)
				break
			case 'driverRaceResultsByTeam':
				F1Service.getDriverRaceResultsByTeam(summary.driver, summary.team, cb)
				break
			case 'driverRaceResultsByTrack':
				F1Service.getDriverRaceResultsByTrack(summary.driver, summary.track, cb)
				break
			case 'teamAttendanceByTrack':
				F1Service.getTeamAttendanceByTrack(summary.team, summary.track, cb)
				break
			case 'driverRaceResultsByTeamAndTrack':
				F1Service.getDriverRaceResultsByTeamAndTrack(summary.driver, summary.team, summary.track, cb)
				break
			case 'driversByNationality':
				F1Service.getDriversByNationality(summary.nation, cb)
				break
			case 'driverSeasonStandingByYear':
				F1Service.getDriverSeasonStandingByYear(summary.year, summary.driver, cb)
				break
			case 'driverWorldTitlesByYear':
				F1Service.getDriverWorldTitlesByYear(summary.year, summary.driver, cb)
				break
			case 'driverSeasonFinishesByYear':
				F1Service.getDriverSeasonFinishesByYear(summary.year, summary.driver, cb)
				break
			case 'driverTeamsByYear':
				F1Service.getDriverTeamsByYear(summary.year, summary.driver, cb)
				break
			case 'teamSeasonStandingByYear':
				F1Service.getTeamSeasonStandingByYear(summary.year, summary.team, cb)
				break
			case 'teamWorldTitlesByYear':
				F1Service.getTeamWorldTitlesByYear(summary.year, summary.team, cb)
				break
			case 'teamDriversByYear':
				F1Service.getTeamDriversByYear(summary.year, summary.team, cb)
				break
			case 'trackWinnersByYear':
				F1Service.getTrackWinnersByYear(summary.year, summary.track, cb)
				break
			case 'trackResultsByYear':
				F1Service.getTrackResultsByYear(summary.year, summary.track, cb)
				break
			case 'driverRaceResultsByTeamAndYear':
				F1Service.getDriverRaceResultsByTeamAndYear(summary.year, summary.driver, summary.team, cb)
				break
			case 'driverRaceResultsByTrackAndYear':
				F1Service.getDriverRaceResultsByTrackAndYear(summary.year, summary.driver, summary.track, cb)
				break
			case 'driverQualiResultsByTrackAndYear':
				F1Service.getDriverQualiResultsByTrackAndYear(summary.year, summary.driver, summary.track, cb)
				break
			case 'teamAttendanceByTrackAndYear':
				F1Service.getTeamAttendanceByTrackAndYear(summary.year, summary.team, summary.track, cb)
				break
			case 'driverRaceResultsByTeamAndTrackAndYear':
				F1Service.getDriverRaceResultsByTeamAndTrackAndYear(summary.year, summary.driver, summary.team, summary.track, cb)
				break
			case 'driverQualiResultsByTeamAndTrackAndYear':
				F1Service.getDriverQualiResultsByTeamAndTrackAndYear(summary.year, summary.driver, summary.team, summary.track, cb)
				break
			default:
				cb(true)
				break
		}
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
			case 'teamSeasonStanding':
				return [{
					name: 'Position',
					key: ['position']
				}, {
					name: 'Points',
					key: ['points']
				}, {
					name: 'Wins',
					key: ['wins']
				}]
				break
			case 'teamWorldTitles':
				return [{
					name: 'Season',
					key: ['season']
				}, {
					name: 'More info',
					key: ['url']
				}]
				break
			case 'teamSeasonFinishes':
				return [{
					name: 'Season',
					key: ['season']
				}, {
					name: 'Position',
					key: ['ConstructorStandings', 'position']
				}, {
					name: 'Points',
					key: ['ConstructorStandings', 'points']
				}, {
					name: 'Wins',
					key: ['ConstructorStandings', 'wins']
				}]
				break
			case 'teamDrivers':
				return [{
					name: 'First Name',
					key: ['givenName']
				}, {
					name: 'Last Name',
					key: ['familyName']
				}, {
					name: 'Birth Date',
					key: ['dateOfBirth']
				}, {
					name: 'Nationality',
					key: ['nationality']
				}]
				break
			case 'trackWinners':
				return [{
					name: 'Date',
					key: ['date']
				}, {
					name: 'First name',
					key: ['Results', 'Driver', 'givenName']
				}, {
					name: 'Last name',
					key: ['Results', 'Driver', 'familyName']
				}, {
					name: 'Nationality',
					key: ['Results', 'Driver', 'nationality']
				}, {
					name: 'Team',
					key: ['Results', 'Constructor', 'name']
				}]
				break
			case 'currentTrackResults':
				return [{
					name: 'Position',
					key: ['position']
				}, {
					name: 'First name',
					key: ['Driver', 'givenName']
				}, {
					name: 'Last name',
					key: ['Driver', 'familyName']
				}, {
					name: 'Nationality',
					key: ['Driver', 'nationality']
				}, {
					name: 'Team',
					key: ['Constructor', 'name']
				}]
				break
			case 'driverRaceResultsByTeam':
				return [{
					name: 'Season',
					key: ['season']
				}, {
					name: 'Race',
					key: ['raceName']
				}, {
					name: 'Position',
					key: ['Results', 'position']
				}]
				break
			case 'driverRaceResultsByTrack':
				return [{
					name: 'Season',
					key: ['season']
				}, {
					name: 'Race',
					key: ['raceName']
				}, {
					name: 'Position',
					key: ['Results', 'position']
				}, {
					name: 'Team',
					key: ['Results', 'Constructor', 'name']
				}]
				break
			case 'teamAttendanceByTrack':
				return [{
					name: 'Season',
					key: ['season']
				}, {
					name: 'Race',
					key: ['raceName']
				}, {
					name: 'Date',
					key: ['date']
				}, {
					name: 'Round',
					key: ['round']
				}]
				break
			case 'driverRaceResultsByTeamAndTrack':
				return [{
					name: 'Season',
					key: ['season']
				}, {
					name: 'Race',
					key: ['raceName']
				}, {
					name: 'Position',
					key: ['Results', 'position']
				}, {
					name: 'More info',
					key: ['url']
				}]
				break
			case 'driversByNationality':
				return [{
					name: 'First Name',
					key: ['firstName', 'value']
				}, {
					name: 'Last Name',
					key: ['lastName', 'value']
				}, {
					name: 'More info',
					key: ['driver', 'value']
				}]
				break
			case 'driverSeasonStandingByYear':
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
			case 'driverWorldTitlesByYear':
				return [{
					name: 'Season',
					key: ['season']
				}, {
					name: 'More info',
					key: ['url']
				}]
				break
			case 'driverSeasonFinishesByYear':
				return [{
					name: 'Position',
					key: ['Results', 'position']
				}, {
					name: 'Race',
					key: ['raceName']
				}, {
					name: 'Date',
					key: ['date']
				}, {
					name: 'Team',
					key: ['Results', 'Constructor', 'name']
				}]
				break
			case 'driverTeamsByYear':
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
			case 'teamSeasonStandingByYear':
				return [{
					name: 'Position',
					key: ['position']
				}, {
					name: 'Points',
					key: ['points']
				}, {
					name: 'Wins',
					key: ['wins']
				}]
				break
			case 'teamWorldTitlesByYear':
				return [{
					name: 'Season',
					key: ['season']
				}, {
					name: 'More info',
					key: ['url']
				}]
				break
			case 'teamDriversByYear':
				return [{
					name: 'First Name',
					key: ['givenName']
				}, {
					name: 'Last Name',
					key: ['familyName']
				}, {
					name: 'Birth Date',
					key: ['dateOfBirth']
				}, {
					name: 'Nationality',
					key: ['nationality']
				}]
				break
			case 'trackWinnersByYear':
				return [{
					name: 'Date',
					key: ['date']
				}, {
					name: 'First name',
					key: ['Results', 'Driver', 'givenName']
				}, {
					name: 'Last name',
					key: ['Results', 'Driver', 'familyName']
				}, {
					name: 'Nationality',
					key: ['Results', 'Driver', 'nationality']
				}, {
					name: 'Team',
					key: ['Results', 'Constructor', 'name']
				}]
				break
			case 'trackResultsByYear':
				return [{
					name: 'Position',
					key: ['position']
				}, {
					name: 'First name',
					key: ['Driver', 'givenName']
				}, {
					name: 'Last name',
					key: ['Driver', 'familyName']
				}, {
					name: 'Nationality',
					key: ['Driver', 'nationality']
				}, {
					name: 'Team',
					key: ['Constructor', 'name']
				}]
				break
			case 'driverRaceResultsByTeamAndYear':
				return [{
					name: 'Race',
					key: ['raceName']
				}, {
					name: 'Position',
					key: ['Results', 'position']
				}, {
					name: 'More info',
					key: ['url']
				}]
				break
			case 'driverRaceResultsByTrackAndYear':
				return [{
					name: 'Race',
					key: ['raceName']
				}, {
					name: 'Position',
					key: ['Results', 'position']
				}, {
					name: 'Team',
					key: ['Results', 'Constructor', 'name']
				}]
				break
			case 'driverQualiResultsByTrackAndYear':
				return [{
					name: 'Race',
					key: ['raceName']
				}, {
					name: 'Position',
					key: ['QualifyingResults', 'position']
				}, {
					name: 'Team',
					key: ['QualifyingResults', 'Constructor', 'name']
				}]
				break
			case 'teamAttendanceByTrackAndYear':
				return [{
					name: 'Race',
					key: ['raceName']
				}, {
					name: 'Date',
					key: ['date']
				}, {
					name: 'Round',
					key: ['round']
				}]
				break
			case 'driverRaceResultsByTeamAndTrackAndYear':
				return [{
					name: 'Race',
					key: ['raceName']
				}, {
					name: 'Position',
					key: ['Results', 'position']
				}, {
					name: 'More info',
					key: ['url']
				}]
				break
			case 'driverQualiResultsByTeamAndTrackAndYear':
				return [{
					name: 'Race',
					key: ['raceName']
				}, {
					name: 'Position',
					key: ['QualifyingResults', 'position']
				}, {
					name: 'More info',
					key: ['url']
				}]
				break
			default:
				return []
				break
		}
	}
}

export default F1Service
