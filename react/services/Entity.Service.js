import $ from 'superagent'

class EntityService {
	static getEntity(entity, cb) {
		$.post('/ai/entity')
		.send(entity)
		.end((err, res) => {
			cb(err, res)
		})
	}
}

export default EntityService
