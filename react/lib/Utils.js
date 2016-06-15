import _ from 'lodash'

class Utils {
	static parseEntities(entities) {
		let grouped = _.groupBy(entities, 'type')
		let types = _.keys(grouped)
		console.log(grouped)
		console.log(types)
	}
}

export default Utils
