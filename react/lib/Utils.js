import _ from 'lodash'

class Utils {
	static parseEntities(entities) {
		let dates = _.filter(entities, e => e.type=='date')
		let profiles = _.filter(entities, e => e.type!='date')
		return {dates, profiles}
		/*let grouped = _.groupBy(entities, 'type')
		let types = _.keys(grouped)
		console.log(grouped)
		console.log(types)
		return {dates, profile}*/
	}
}

export default Utils
