const mongoose = require('mongoose')
const Schema = mongoose.Schema

const SearchQuerySchema = new Schema({
	src: String,
	keywords: []
}, {versionKey: false})

const SearchQuery = module.exports = mongoose.model('SearchQuery',SearchQuerySchema)
