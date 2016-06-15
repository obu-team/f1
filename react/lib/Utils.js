import {DOM} from 'react'
import _ from 'lodash'
import moment from 'moment'

class Utils {
	static parseEntities(entities) {
		let dates = _.filter(entities, e => e.type=='date')
		let profiles = _.filter(entities, e => e.type!='date')
		return {dates, profiles}
	}

	static capitalize(str) {
		return _(str.split(/(?=[A-Z])/)).map(txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()).value().join(' ')
	}

	static formatEntityString(e) {
		if(e.startsWith('http://') || e.startsWith('https://')) {
			return DOM.a({href: e, target: '_blank'}, e)
		}
		if(/^(\d{4})-(\d{1,2})-(\d{1,2})$/.test(e)) {
			return moment(e, 'YYYY-MM-DD').format('LL')
		}
		return e
	}
}

export default Utils
