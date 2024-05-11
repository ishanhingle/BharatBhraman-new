const express = require('express');
const passport=require('passport');
const Users = require('../models/Users')
const catchAsync = require('../utilities/catchasync');
const catchasync = require('../utilities/catchasync');
const {storeReturnTo} = require('../utilities/middleware');
const users=require('../controllers/users');


const router = express.Router();

router.use(express.urlencoded({ extended: true }));
router.use(express.json());

router.post('/register',catchAsync(users.register))
router.post('/login',passport.authenticate('local'),users.login)
router.get('/logout',users.logout);
module.exports = router;