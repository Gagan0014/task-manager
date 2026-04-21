const updateTaskValidation = (req,res,next)=>{
    const {title} = req.body;

    if(title!==undefined){
        if(title.trim()===""){
            return res.json({
                success:false,
                message:"title can't be empty"
            });
        }
    }
    return next();
}

export default updateTaskValidation;