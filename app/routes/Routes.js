const r = require('express').Router()

const RootController = require('../controllers/Root.Controller')
const AIController = require('../controllers/AI.Controller')

r.get('/', RootController.get)

r.get('/ai/suggestions', AIController.getSuggestions)
r.post('/ai/analyse', AIController.analyse)
r.post('/ai/entity', AIController.getEntity)
r.post('/ai/drivers', AIController.getDrivers)

r.use('*', RootController.all)

module.exports = r
