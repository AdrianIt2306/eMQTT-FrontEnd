const express = require('express');
const router = express.Router();
const logger = require('../lib/logger');
const path = require('path');

// routes/router.js
router.get('/executions',function(req,res){
  logger.info("Serving to :" + path.join(__dirname+'/views/executions.html'))
  res.sendFile(path.join(__dirname+'/views/executions.html'));
});

router.get('/home',function(req,res){
  logger.info("Serving to :" + path.join(__dirname+'/views/executions.html'))
  res.sendFile(path.join(__dirname+'/views/executions.html'));
});

router.get('/sensors',function(req,res){
  logger.info("Serving to :" + path.join(__dirname+'/views/sensors.html'))
  res.sendFile(path.join(__dirname+'/views/sensors.html'));
});

router.get('/login',function(req,res){
  logger.info("Serving to :" + path.join(__dirname+'/views/login.html'))
  res.sendFile(path.join(__dirname+'/views/login.html'));
});

router.get('/signup',function(req,res){
  logger.info("Serving to :" + path.join(__dirname+'/views/signup.html'))
  res.sendFile(path.join(__dirname+'/views/signup.html'));
});

router.get('/myprofile',function(req,res){
  logger.info("Serving to :" + path.join(__dirname+'/views/myprofile.html'))
  res.sendFile(path.join(__dirname+'/views/myprofile.html'));
});

router.get('/management',function(req,res){
  logger.info("Serving to :" + path.join(__dirname+'/views/management.html'))
  res.sendFile(path.join(__dirname+'/views/management.html'));
});

router.get('/',function(req,res){
  logger.info("Serving to :" + path.join(__dirname+'/views/index.html'))
  res.sendFile(path.join(__dirname+'/views/index.html'));
});


module.exports = router;