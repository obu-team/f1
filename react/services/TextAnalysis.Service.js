import $ from 'superagent'

class TextAnalysisService {
	static analyse2(txt, cb) {
		$.post('https://apiv2.indico.io/keywords?key=275989e7911da3e3fe044ec34474996d')
		.send(JSON.stringify({data: txt, relative: true}))
		.end((err, res) => {
			cb(err, res)
		})
	}
	static analyse(txt, cb) {
		$.post(`/ai/analyse`)
		.send({text: txt})
		.end((err, res) => {
			cb(err, res)
		})
	}
}

export default TextAnalysisService
