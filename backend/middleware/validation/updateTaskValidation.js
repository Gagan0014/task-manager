const updateTaskValidation = (req,res,next)=>{
    const {title} = req.body;

    if(title!==undefined){
        if(title.trim()===""){
            throw new Error("title can't be empty");
        }
    }
    return next();
}

export default updateTaskValidation;