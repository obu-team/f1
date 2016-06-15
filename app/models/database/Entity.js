const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EntitySchema = new Schema({
	name: String,
	type: String,
	owlType: [String],
	dbpediaID: String,
	ergastID: String,
	keywords: [String],
	data: {
		type: [],
		default: []
	}
}, {versionKey: false})

const Entity = module.exports = mongoose.model('Entity',EntitySchema)
