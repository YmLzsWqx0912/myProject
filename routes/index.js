var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//访问login 页面
router.get('/login' , (req, res, next) => {
  res.render('login');
})
//访问login 页面
router.get('/register' , (req, res, next) => {
  res.render('register');
  
})
//访问login 页面
router.get('/admin' , (req, res, next) => {
  res.render('admin');
  
})

module.exports = router;
