var express = require('express');
var router = express.Router();

//2.引入控制层********************************MVC中的 controller层
var controllerIndex = require('../controller/index') ;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//1.访问三个页面*****************************MVC中的  view层
router.get('/login' ,controllerIndex.login)
//访问login 页面
router.get('/register' , controllerIndex.register)
//访问login 页面
router.get('/admin' , controllerIndex.admin)

module.exports = router;
