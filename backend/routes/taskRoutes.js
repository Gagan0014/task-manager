import express from 'express'
import Task from '../models/task.js'
const router = express.Router()

router.post('/task',async(req,res)=>{
    try{
    const data = req.body;
    if(!data.title){
       return res.status(400).send("title is required") 
    }
    const newTask = new Task(data);
    const savedTask = await newTask.save();

    res.status(201).json(savedTask);
    }catch(error){
        res.status(500).json({message: error.message});
    }
});

export default router