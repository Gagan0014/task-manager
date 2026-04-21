import User from '../models/user.js';
import asyncHandler from '../utils/asyncHandler.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = asyncHandler(async (req, res, next) => {
  const { email, password, name } = req.body;

  if (!name || !password || !email) {
    const err = new Error("All fields are required");
    err.statusCode = 400;
    return next(err);
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const err = new Error("User already exists");
    err.statusCode = 400;
    return next(err);
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword
  });

  await newUser.save();

  res.status(201).json({
    success: true,
    message: "User registered successfully"
  });
});


export const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const err = new Error("All credentials required");
    err.statusCode = 400;
    return next(err);
  }

  const user = await User.findOne({ email });
  if (!user) {
    const err = new Error("User does not exist. Register first");
    err.statusCode = 404;
    return next(err);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    const err = new Error("Invalid credentials");
    err.statusCode = 401;
    return next(err);
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  res.status(200).json({
    success: true,
    token
  });
});