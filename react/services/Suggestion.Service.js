import $ from 'superagent'

const temp = [
	'Lewis Hamilton',
	'Nico Rosberg',
	'Sebastian Vettel',
	'Kimi Raikkonen',
	'Daniel Ricciardo',
	'Max Verstappen',
	'Felippe Massa',
	'Valtteri Bottas',
	'Sergio Perez',
	'Nico Hulkenberg',
	'Daniil Kvyat',
	'Carlos Sainz',
	'Romain Grosjean',
	'Fernando Alonso',
	'Jenson Button',
	'Kevin Magnussen',
	'Esteban Gutierrez',
	'Jolyon Palmer',
	'Marcus Ericsson',
	'Pascal Wehrlein',
	'Felipe Nasr',
	'Rio Haryanto'
]

class SuggestionService {
	static getSuggestions(cb) {
		cb(temp)
	}
}

export default SuggestionService
