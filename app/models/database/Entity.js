const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EntitySchema = new Schema({
	name: String,
	type: String,
	owlType: [],
	dbpediaID: String,
	ergastID: String,
	keywords: []
}, {versionKey: false})

const Entity = module.exports = mongoose.model('Entity',EntitySchema)
