var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postRouter = require('./routes/post');

var app = express();

app.use(session({
  secret: 'hasjkd$%@13',    //给cookie进行加盐，也就是混淆，让其更安全。
  name : 'sessionid',        //可以改变cookie的name , 默认是 : connect_sid
  resave: false,            // 不去重复生成cookie
  saveUninitialized: true,   //在不初始化session时候，创建cookie
  cookie: {
    maxAge : 1000 * 60 * 60  // 超过一小时就过期
  }   // secure : true 表示https
}))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//只会拦截admin标识的get请求，没登录之前时不能访问admin的
app.get(/\/admin/,(req,res,next)=>{
  if( !req.session.username ){
    res.redirect('/login');
  }
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/post', postRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  //next(createError(404));
  res.redirect('/login');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
