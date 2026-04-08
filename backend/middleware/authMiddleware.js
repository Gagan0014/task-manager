import jwt from 'jsonwebtoken'
import User from '../models/user.js';

const protect = async(req,res,next)=>{
    console.log("HEADER:", req.headers.authorization);
    let token;
    const authHeader = req.headers.authorization;
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){
        token = authHeader.split(" ").filter(Boolean)[1];
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id).select('-password')
        next();
    }catch(error){
        console.log("JWT REAL ERROR:", error.message);
        const err = new Error("Not authorized")
        err.statusCode = 401
        next(err)
    }
    }else{
        const error = new Error("NO token provided");
        error.statusCode = 401
        next(error);
    }
}

export default protect;