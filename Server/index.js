 if(process.env.NODE_ENV!=="production"){
     require('dotenv').config();
 }
 
 const express=require('express');
 const mongoose=require('mongoose');
 const path=require('path');
 const methodOverride=require('method-override');
 const joi=require('joi')
 const session=require('cookie-session')
 const passport=require('passport');
 const localStrategy=require('passport-local');
 const passportLocalMongoose=require('passport-local-mongoose');
 const cors=require('cors');
 
 const {placeSchema,reviewSchema}=require('./schema')
 const Places=require('./models/places');
 const Reviews=require('./models/Reviews');
 const Users=require('./models/Users');
 
 const catchAsync=require('./utilities/catchasync');
 const ExpressError=require('./utilities/ExpressError');
 
 
 const placeroute=require('./routes/placeroute');
 const userroute=require('./routes/userroute');
 const reviewroute=require('./routes/reviewroute');

 const DBurl=process.env.DBurl
 mongoose.connect(DBurl).then(console.log("connected"));
 const app=express();
 const corsOptions ={
    origin:'http://localhost:5173', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
 app.use(cors(corsOptions));
 const sessionConfig={
     secret:'ishanisbest',
     resave:false,
     saveUninitialized:true,
     Cookie:{
         expires:Date.now()+1000*60*60*24*7,
         maxAge:1000*60*60*24*7
     },
     httpOnly:false,
 }
 
 app.use(session(sessionConfig))
 
 app.use(passport.initialize());
 app.use(passport.session());
 passport.use(new localStrategy(Users.authenticate()));
 passport.serializeUser(Users.serializeUser());
 passport.deserializeUser(Users.deserializeUser());
 
 
 app.use(methodOverride('_method'))
 app.use(express.urlencoded({extended:true}));
 app.use(express.json());
 
 
 const PORT=process.env.PORT || 3000;
 app.listen(PORT,()=>{
     console.log("server started");
 })
 
 app.use('/places',placeroute);
 app.use('/review',reviewroute)
 app.use('/user',userroute);
 
 app.all('*',(req,res,next)=>{
     next(new ExpressError('page not found',404))
 })
 app.use((err, req, res, next)=>{
    console.log(err); 
    if(!err.message){
         err.message='somthing went wrong :('
     }
     res.json({
        message:err.message
     })
 })
 