import $ from 'superagent'
import _ from 'lodash'

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
}

export default F1Service
