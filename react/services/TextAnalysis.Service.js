import $ from 'superagent'

class TextAnalysisService {
	static analyse(txt, cb) {
		$.post(`/ai/analyse`)
		.send({text: txt})
		.end((err, res) => {
			cb(err, res.body)
		})
	}
}

export default TextAnalysisService
