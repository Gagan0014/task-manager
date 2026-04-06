import User from '../models/user.js'
import asyncHandler from '../utils/asyncHandler.js'
import bcrypt from 'bcryptjs'

export const register = asyncHandler(async (req,res)=>{
    const {email,password,name} = req.body
    if(!name || !password || !email){
        throw new Error("All fields are required");
    }

    const existingUser = await User.findOne({email})
    if(existingUser){
        throw new Error("User already exist");
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new User({
        name,
        email,
        password: hashedPassword
    });
    await newUser.save()
    res.json({
        success:true,
        message:"user registered successfully"
    })
})