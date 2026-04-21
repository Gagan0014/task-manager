const loginValidation = (req,res,next)=>{
    const {email , password} = req.body;
    if(!email || !password){
        return res.json({
            success:false,
            message:"All credentials are required"
        });
    }
    if(!email.include("@")){
        return res.json({
            success:false,
            message:"email must contain @"
        });
    }
    return next();
}