const express=require('express')
const ExpressError=require('../utilities/ExpressError');
const Places=require('../models/places');
const Reviews=require('../models/Reviews')
const {placeSchema,reviewSchema}=require('../schema')



module.exports.isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated()){
        res.status(401).json({
            success:false,
            message:"User Not Logged in",
        })
    }
    else{
        next();
    }
}

module.exports.isAuthor=async (req,rs,next)=>{
    const{id}=req.params;
    const place=await Places.findById(id);
    if(!place.author.equals(req.user._id)){
        res.status(401).json({
            success:false,
            message:"User unauthorized",
        })
    }
    else{
        next();
    }
}
module.exports.isReviewAuthor=async (req,rs,next)=>{
    const{review_id}=req.params;
    const review=await Reviews.findById(review_id);
    if(!review.author.equals(req.user._id)){
        res.status(401).json({
            success:false,
            message:"User unauthorized",
        })
    }
    else{
        next();
    }
}
module.exports.validatePlaces=(req,res,next)=>{
    const{error}=placeSchema.validate(req.body);
    if(error){
        const msg=error.details.map(el=>el.message).join(',');
        throw new ExpressError(msg,400);
    }
    else{
        next();
    }
}
module.exports.validateReviews=(req,res,next)=>{
     req.body.review.rating=parseInt(req.body.review.rating);
    const{error}=reviewSchema.validate(req.body);
    if(error){
        const msg=error.details.map(el=>el.message).join(',');
        throw new ExpressError(msg,400);
    }else{
        next();
    }
}