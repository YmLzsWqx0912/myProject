var express = require('express');
var controllerUser = require('../controller/user') ;
var getcheckCode = require('../common/checkCode');
var router = express.Router();

//登录功能
router.post('/login' , controllerUser.login) ;

//注册功能
router.post('/register' , controllerUser.register) ;

//退出功能
router.post('/logout' , controllerUser.logout) ;

//验证码功能
router.get('/checkCode' , getcheckCode) ;


module.exports = router;
