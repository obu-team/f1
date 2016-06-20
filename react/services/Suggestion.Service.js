import $ from 'superagent'

class SuggestionService {
	static getSuggestions(cb) {
		$.get('/ai/suggestions')
		.end((err, res) => {
			cb(err ? [] : res.body)
		})
	}
}

export default SuggestionService
