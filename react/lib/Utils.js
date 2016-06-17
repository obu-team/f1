import {DOM} from 'react'
import _ from 'lodash'
import moment from 'moment'
import Masonry from 'masonry-layout'

let query = ''

class Utils {
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

	static naturalKeywordCombinations(keys) {
		let chunks = keys.length
		let ret = []
		for(let x=1;x<=chunks;x++) {
			for(let y=1;y<=(chunks-x+1);y++) {
				ret.push(_.slice(keys, y-1, (y-1+x)).join(' '))
			}
		}
		return ret
	}

	static onlyInArray(array, shouldBeIn) {
		if(array.length != shouldBeIn.length) return false
		let ret = true
		_.forEach(shouldBeIn, sbi => {
			if(_.indexOf(array, sbi)==-1) ret = false
		})
		return ret
	}

	static pluckValue(data, keys) {
		_.forEach(keys, k => {
			data = data[k]
			if(_.isArray(data)) data = _.first(data)
		})
		return data
	}

	static reposition() {
		let grid = document.querySelector('.masonryGrid')
		new Masonry(grid, {
	  	itemSelector: '.gridItem',
	  	columnWidth: '.gridSizer',
		  percentPosition: true
	  })
	}

	static setQuery(q) {
		query = q
	}

	static getQuery() {
		return query
	}
}

export default Utils
