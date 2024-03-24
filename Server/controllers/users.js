const Users=require('../models/Users')

module.exports.register=async (req, res, next) => {
    try{
        const { username, email, password } = req.body;
    const newUser = new Users({ email, username });
    const registeredUser= await Users.register(newUser, password);
    req.logIn(registeredUser,(err)=>{
        if(err){
            next(err)
        }
        else{
            res.status(200).json({
                success:true,
                message:"user registerd successfully",
            })
        }
    })
    }
    catch(e){
        next(e);
    }
}

module.exports.login=(req,res)=>{
    res.json({
        message:"user logged in successfully",
    })
}

module.exports.logout=(req,res,next)=>{
    req.logOut((err)=>{
        if(err){
            next(err);
        }else{
            res.status(200).json({
                message:"logged out succesfully",
            })
        }
    })
}