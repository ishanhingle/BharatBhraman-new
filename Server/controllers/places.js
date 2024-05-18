const { array } = require('joi');
const Places=require('../models/places');
const {cloudinary}=require('../cloudinary/index')

module.exports.getPlaces=async (req,res,next)=>{
    const places= await Places.find({});
    res.status(200).json({
        places,
    })
}

module.exports.addNewPlace=async(req,res,next)=>{
   const newplace=new Places(req.body);
   newplace.image=req.files.map(i=>({url:i.path,filename:i.filename}))
   const location=req.body.location.replace(/[, ]+/g, '+')
   const url=`https://geocode.maps.co/search?q=${location}&api_key=66485a88c9729438154120okmf1a9f0`
   console.log(url)
   const addressResponse= await fetch(url);
   console.log(addressResponse);
   const address=await addressResponse.json();
   newplace.lat= address[0].lat;
   newplace.lon= address[0].lon;
   newplace.author=req.user._id;
   await newplace.save();
   res.status(200).json({
    success:true,
    message:"New Place Created Successfully",
})
}

module.exports.updatePlace=async(req,res,next)=>{
    const{id}=req.params
    const updated_place= await Places.findByIdAndUpdate(id,req.body.place);
    if(req.body.deleteImages){
        await updated_place.updateOne({$pull:{image:{filename:{$in:req.body.deleteImages}}}})
        for(filename of req.body.deleteImages){
            await cloudinary.uploader.destroy(filename);
        }
    }
    const images=req.files.map(i=>({url:i.path,filename:i.filename}));
    updated_place.image.push(...images);
    const addressResponse= await fetch(`https://geocode.maps.co/search?q=${req.body.place.location}`);
    const address=await addressResponse.json();
    updated_place.lat= address[0].lat;
    updated_place.lon= address[0].lon;
    await updated_place.save();
    res.status(200).json({
        success:true,
        message:"Place updated successfully",
    })
}

module.exports.deletePlace=async(req,res,next)=>{
    const{id}=req.params
    await Places.findByIdAndDelete(id) ;
    res.status(200).json({
        success:true,
        message:"Place deleted successfully",
    })
}

module.exports.showPlace=async (req,res,next)=>{
    const {id}=req.params
    const place=await Places.findById(id).populate({
        path:'review',
        populate:{
            path:'author'
        }
    }).populate('author');
    if (!place) {
        res.status(404).json({
            message:"place not found",
        })
    }
    res.status(200).json({
        place,
    })
}