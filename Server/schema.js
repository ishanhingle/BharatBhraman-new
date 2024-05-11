const joi=require('joi');

const placeSchema=joi.object({
        name:joi.string().required(),
        price:joi.number().required().min(0),
        description:joi.string().required(),
        location:joi.string().required(),
        //image:joi.string().required()
}).required();

const reviewSchema=joi.object({
        body:joi.string().required(),
        rating:joi.number().required()
})

module.exports.reviewSchema=reviewSchema;    
module.exports.placeSchema=placeSchema;