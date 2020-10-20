var express = require('express');
var controllerPost = require('../controller/post');
var router = express.Router();

var multer = require('multer');  //用于接收上传文件的第三个node模块
var upload = multer({ dest: './public/uploads/' });  //接收到上传的文件需要存储的位置

// 职位添加的功能-->single上传单个文件
router.post('/add', upload.single('companyLogo') ,controllerPost.add);
router.post('/update', upload.single('companyLogo') ,controllerPost.update);
router.get('/remove', controllerPost.remove) ;

module.exports = router;
