import Task from '../models/task.js'

export const createTask = async (req,res,next)=>{
    try{
        const data = req.body;
        if(!data.title){
            return next(new Error("title is requires"));
        }
        const newTask = new Task(data);
        const savedTask = await newTask.save();
        res.status(201).json({
            success:true,
            data:savedTask
        });
    }catch(error){
        next(error);
    }
};

export const getTask = async (req,res,next)=>{
    try{
        const tasks = await Task.find();
        res.json({
            success:true,
            data:tasks
        });
    }catch(error){
        next(error)
    }
}

export const updateTask = async (req,res,next)=>{
    try{
        const id = req.params.id;
        const updatedTask = await Task.findByIdAndUpdate(
            id,
            req.body,
            {
                new:true
            }
        )
        if(!updateTask){
            return next(new Error("task not found"))
        }
        res.json({
            success:true,
            data:updatedTask
        });
    }catch(error){
        next(error)
    }
}

export const deleteTask = async (req,res,next)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task){
            return next(new Error("task not found"))
        }
        res.json({
            success:true,
            message:"task deleted successfully"
        });
    }catch(error){
        next(error)
    }
}