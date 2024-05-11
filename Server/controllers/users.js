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
            const {salt,hash,...user}=req.user._doc
            res.status(200).json({
                success:true,
                message:"user registerd successfully",
                user,
            })
        }
    })
    }
    catch(e){
        next(e);
    }
}

module.exports.login=(req,res)=>{
    const {salt,hash,...user}=req.user._doc
    console.log();
    res.json({
        message:"user logged in successfully",
        user,
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