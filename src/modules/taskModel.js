const connection = require('./connection')

const getAll = async() => {
    const task = await connection.execute('SELECT * FROM tasks')
    return task[0]
}

const createTask = async (tasks) => {
    const {title} = tasks;

    const dataUTC = new Date(Date.now()).toUTCString()

    const query = 'INSERT INTO tasks(title, status, created_at) VALUES(?,?,?)'
    const [createdTask] = await connection.execute(query,[title, 'pendente', dataUTC])

    return {insertId: createdTask.insertId}
}

const deleteTask = async (id) => {
    const [removedTask] = await connection.execute('DELETE FROM tasks WHERE id = ?', [id]);
    return removedTask;
}
const updataTask = async (id, data) => {
    const {title, status} = data
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?'
    const [updataTask] = await connection.execute(query, [title, status, id]);
    return updataTask;
}
module.exports = {
    getAll,
    createTask,
    deleteTask,
    updataTask
}