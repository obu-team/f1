'use strict'

const mongoose = require('mongoose')
const config = require('config')
const _ = require('lodash')
const fs = require('fs')

class Database {
	/**
	 * Initializing callback function for each event
	 * Calling methods for loading models and event listeners
	 *
	 * @param  {function} onConnect    [On connection callback function]
	 * @param  {function} onDisconnect [On disconnection callback function]
	 * @param  {function} onError      [On error callback function]
	 */
	constructor() {
		this.callbacks = {
			onConnect: null,
			onDisconnect: null,
			onError: null
		}
		this.models = {}
		this.loadModels()
	}

	loadModels() {
		let files = fs.readdirSync('./app/models/database') || []
		_.forEach(files, file => {
			require(`../models/database/${file}`)
		})
		this.initModels(files)
	}

	initModels(files) {
		_.forEach(files, file => {
			let f = file.replace('.js', '')
			this.models[f] = mongoose.model(f)
		})
	}

	listeners() {
		mongoose.connection.on('connected', this.callbacks.onConnect)
		mongoose.connection.on('disconnected', this.callbacks.onDisconnect)
		mongoose.connection.on('error', this.callbacks.onError)
		process.on('SIGINT', this.callbacks.onDisconnect)
	}

	beforeConnect(cb) {
		cb()
	}

	connect() {
		this.listeners()
		mongoose.connect(config.get('db'))
	}

	/*mock() {
		this.listeners()
		const mockgoose = require('mockgoose')
		mockgoose(mongoose).then(() => {
	  	mongoose.connect(config.get('db'))
		})
	}*/

	disconnect() {
		mongoose.connection.close(this.callbacks.onDisconnect)
	}

	model(key) {
		if(this.models[key] === undefined) throw new Error(`Model ${key} is not defined`)
		return this.models[key]
	}

	onConnect(fn) {
		this.callbacks.onConnect = fn
	}

	onDisconnect(fn) {
		this.callbacks.onDisconnect = fn
	}

	onError(fn) {
		this.callbacks.onError = fn
	}
}

module.exports = new Database()
