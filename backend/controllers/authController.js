import User from '../models/user.js'
import asyncHandler from '../utils/asyncHandler.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

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

export const login = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        throw new Error("All entries required")
    }

    const user = await User.findOne({email});
    if(!user){
        throw new Error("user doesn't exist : Register first")
    }
    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch){
        throw new Error("Invalid Credentials")
    }
    const token = jwt.sign(
        {id:user.id},
        process.env.JWT_SECRET,
        {expiresIn:'1d'}
    )

    res.json({
        success:true,
        token
    })

})