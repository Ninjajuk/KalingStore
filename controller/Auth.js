

exports.createUser=async(req,res)=>{
    const {user}=req.body
    try {
        user?res.json(user):res.json({message:'User not found'})
    } catch (error) {
        
    }
}