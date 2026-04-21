import Task from '../models/task.js';
import asyncHandler from '../utils/asyncHandler.js';

export const getTaskByid = asyncHandler(async (req, res, next) => {
  const task = await Task.findOne({
    _id: req.params.id,
    user: req.user._id
  });

  if (!task) {
    const err = new Error("Task not found");
    err.statusCode = 404;
    return next(err);
  }

  res.status(200).json({
    success: true,
    data: task
  });
});


export const createTask = asyncHandler(async (req, res, next) => {
  const { title, description } = req.body;

  if (!title) {
    const err = new Error("Title is required");
    err.statusCode = 400;
    return next(err);
  }

  const newTask = new Task({
    title,
    description,
    user: req.user._id
  });

  const savedTask = await newTask.save();

  res.status(201).json({
    success: true,
    data: savedTask
  });
});


export const getTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    data: tasks
  });
});

export const updateTask = asyncHandler(async (req, res, next) => {
  const updatedTask = await Task.findOneAndUpdate(
    {
      _id: req.params.id,
      user: req.user._id
    },
    req.body,
    { new: true }
  );

  if (!updatedTask) {
    const err = new Error("Task not found");
    err.statusCode = 404;
    return next(err);
  }

  res.status(200).json({
    success: true,
    data: updatedTask
  });
});


export const deleteTask = asyncHandler(async (req, res, next) => {
  const task = await Task.findOneAndDelete({
    _id: req.params.id,
    user: req.user._id
  });

  if (!task) {
    const err = new Error("Task not found");
    err.statusCode = 404;
    return next(err);
  }

  res.status(200).json({
    success: true,
    message: "Task deleted successfully"
  });
});


export const getAllTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find();

  res.status(200).json({
    success: true,
    data: tasks
  });
});