const adminOnly = async(req,res,next)=>{
    if(!req.user){
        return res.json({
            sucess:false,
            message:"Unauthorized"
        });
    }
    if(req.user.role==="admin"){
        return next();
    }
    res.json({
        sucess:false,
        message:"Access Denied Admin Only"
    });
}

export default adminOnly;