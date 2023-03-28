const express = require('express')
const taskController = require('./controllers/taskControllers')
const taskMiddleware = require('./middlewares/tasksMieddlewares')
const router = express.Router()

router.get('/task', taskController.getAll)
router.post('/task', taskMiddleware.validateBodyTitle,taskController.createTask)
router.delete('/task/:id',taskController.deleteTask)
router.put('/task/:id', taskMiddleware.validateBodyTitle,taskMiddleware.validateBodyStatus,taskController.updataTask)

module.exports = router