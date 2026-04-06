import Task from '../models/task.js'
import asyncHandler from '../utils/asyncHandler.js';

export const getByid = asyncHandler(async (req,res)=>{
    const task = await Task.findById(req.params.body);
    if(!task){
        throw new Error("task not found");
    }
    res.json({
        success:true,
        data:task
    });
});

export const createTask = asyncHandler(async (req, res) => {
  const data = req.body;

  if (!data.title) {
    throw new Error("Title is required");
  }

  const newTask = new Task(data);
  const savedTask = await newTask.save();

  res.status(201).json({
    success: true,
    data: savedTask
  });
});

export const getTask = asyncHandler(async(req,res)=>{
    const tasks =await Task.find();

    res.json({
        success:true,
        data:tasks
    });
});

export const updateTask = asyncHandler(async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  if (!updatedTask) {
    throw new Error("Task not found");
  }

  res.json({
    success: true,
    data: updatedTask
  });
});

export const deleteTask =asyncHandler(async (req,res)=>{
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task){
        throw new Error("task not found");
    }
    res.json({
        success:true,
        message:"task deleted successfully"
    });
}) ;