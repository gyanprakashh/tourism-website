const express=require('express');
const router=express.Router();
const {getTemp}=require('../controllers/temp');

router.get('/place/:place',getTemp);

module.exports=router;