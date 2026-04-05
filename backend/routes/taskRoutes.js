import express from 'express'
import Task from '../models/task.js'
const router = express.Router()
import {
    createTask,
    deleteTask,
    getTask,
    updateTask
}from '../controllers/taskControllers.js'


router.post('/task', createTask)
router.get('/task', getTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)

export default router