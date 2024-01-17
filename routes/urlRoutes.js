const express=require('express');
const router=express.Router();  
const {handleGenerateNewShortURL,handleUrlAnalytics}=require('../controllers/urlController');

router.post('/',handleGenerateNewShortURL);
router.get('/analytics/:shortId',handleUrlAnalytics);

module.exports=router;

