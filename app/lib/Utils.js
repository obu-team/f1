const _ = require('lodash')

class Utils {
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
}

module.exports = Utils
