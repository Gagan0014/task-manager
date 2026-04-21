const taskValidation = (req,res,next)=>{
    const {title} = req.body;
    
    if(!title || title.trim() === ""){
        return res.json({
            status:false,
            messgae:"title is required"
        });
    }
    return next();

}
export default taskValidation;