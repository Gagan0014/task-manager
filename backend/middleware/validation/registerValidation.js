const validateRegister = (req,res,next)=>{
    const {name , email , password } = req.body;
    if(!name){
        return res.json({
            sucess:false,
            message:"Name is required"
        });
    }
    if(!email){
        return res.json({
            success:false,
            message:"Email is required"
        });
    }
    if(!email.includes("@")){
        return res.json({
            success:false,
            message:"email should contain @ "
        })
    }
    if(!password){
        return res.json({
            success:false,
            message:"Password is required"
        })
    }
    if(password.length<8){
        return res.json({
            success:false,
            message:"Password must be at least 8 characters"
        })
    }
   return next();
}