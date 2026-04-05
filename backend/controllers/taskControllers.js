import Task from '../models/task.js'

export const createTask = async (req,res)=>{
    try{
        const data = req.body;
        if(!data.title){
            return res.status(400).send("title is required");
        }
        const newTask = new Task(data);
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export const getTask = async (req,res)=>{
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const updateTask = async (req,res)=>{
    try{
        const id = req.params.id;
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            req.body,
            {
                new:true
            }
        )
        res.json(updatedTask);
    }catch(error){
        res.status(500).json({message:error.message});
    }
}

export const deleteTask = async (req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return res.status(400).json({message:"task not found"});
        }
        res.json({message:"task deleted successfully"});
    }catch(error){
        res.status(500).json({message:error.message});
    }
}