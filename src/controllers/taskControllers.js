const taskModel = require('../modules/taskModel')

const getAll = async(_req, res) => {

    const tasks = await taskModel.getAll() 
    return res.status(200).json(tasks)
}

const createTask = async(req, res) => {
    const createdTask = await taskModel.createTask(req.body)
    return res.status(201).json(createdTask)
}

const deleteTask = async(req, res) => {
    const {id} = req.params
    await taskModel.deleteTask(id)
    return res.status(204).json()
}

const updataTask = async (req, res) => {
   const {id} = req.params
   await taskModel.updataTask(id, req.body)
   return res.status(204).json()
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updataTask
}