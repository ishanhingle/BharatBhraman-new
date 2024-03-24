const express=require('express')

const router=express.Router();

const catchAsync=require('../utilities/catchasync');

const Places=require('../models/places');
const Users=require('../models/Users');
const Reviews=require('../models/Reviews');

const places=require('../controllers/places');

const {isLoggedIn,isAuthor,validatePlaces}=require('../utilities/middleware');

const{storage}=require('../cloudinary/index')

const multer  = require('multer')
const upload = multer({ storage })

router.get('/',catchAsync(places.getPlaces));

router.post('/new',isLoggedIn,upload.array('place[image]'),validatePlaces,catchAsync(places.addNewPlace));

router.put('/edit/:id',upload.array('place[image]'),catchAsync(places.updatePlace));

router.delete('/delete/:id',isLoggedIn,isAuthor,catchAsync(places.deletePlace));

router.get('/:id',catchAsync(places.showPlace));

module.exports=router;