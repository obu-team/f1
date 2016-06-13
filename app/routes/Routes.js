const r = require('express').Router()

const RootController = require('../controllers/Root.Controller')
const AIController = require('../controllers/AI.Controller')

r.get('/', RootController.get)

r.get('/ai/suggestions', AIController.getSuggestions)
r.post('/ai/analyse', AIController.analyse)

r.use('*', RootController.all)

module.exports = r
