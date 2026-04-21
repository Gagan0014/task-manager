import Task from '../models/task.js'
import asyncHandler from '../utils/asyncHandler.js';

export const getTaskByid = asyncHandler(async (req,res)=>{
    const task = await Task.findOne({
      _id:req.params.id,
      user:req.user._id
    });
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

    const newTask = new Task({
    title: data.title,
    description: data.description,
    user: req.user._id
    });
  const savedTask = await newTask.save();
  res.status(201).json({
    success: true,
    data: savedTask
  });
});

export const getTask = asyncHandler(async(req,res)=>{
    const tasks =await Task.find({user:req.user._id});

    res.json({
        success:true,
        data:tasks
    });
});

export const updateTask = asyncHandler(async (req, res) => {
  const updatedTask = await Task.findOneAndUpdate(
    {
      _id:req.params.id,
      user:req.user._id
    },
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
    const task = await Task.findOneAndDelete({
      _id:req.params.id,
      user:req.user._id
    });
    if(!task){
        throw new Error("task not found");
    }
    res.json({
        success:true,
        message:"task deleted successfully"
    });
}) ;

export const getAllTask = asyncHandler(async(req,res)=>{
    const tasks = await Task.find();

    res.json({
      success:true,
      data:tasks
    })
})