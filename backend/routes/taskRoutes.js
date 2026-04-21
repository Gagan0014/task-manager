import express from 'express'
const router = express.Router()
import protect from '../middleware/authMiddleware.js'
import adminOnly from '../middleware/adminOnly.js'
import {
    createTask,
    deleteTask,
    getTask,
    updateTask,
    getTaskByid,
    getAllTask
}from '../controllers/taskControllers.js'

router.post('/task',protect, createTask)
router.get('/task',protect, getTask)
router.put('/task/:id',protect, updateTask)
router.delete('/task/:id',protect, deleteTask)
router.get('/task/:id',protect,getTaskByid)
router.get('/admin/tasks',protect,adminOnly,getAllTask);
export default router