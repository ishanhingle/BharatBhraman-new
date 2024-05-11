const Places=require('../models/places');
const Reviews=require('../models/Reviews');
const Users=require('../models/Users')

module.exports.addReview=async(req,res)=>{
    const{id}=req.params
    console.log(req.body);
    const place=await Places.findById(id);
    const review=new Reviews(req.body)
    review.rating=parseInt(review.rating);
    review.author=req.user._id;
    place.review.push(review);
    await review.save();
    await place.save();
    res.status(200).json({
        success:true,
        message:"Review Added successfully",
    })
}

module.exports.deleteReview=async(req,res,next)=>{
    const {id,review_id}=req.params;
    await Places.findByIdAndUpdate(id,{$pull:{review:review_id}});
    await Reviews.findByIdAndDelete(review_id);
    res.status(200).json({
        success:true,
        message:"Review Deleted Successfully",
    })
}