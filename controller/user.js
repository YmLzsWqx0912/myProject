
var UserModel = require('../model/user') ;
var getCrypto = require('../common/crypto')

var login = async (req, res, next) => {
    var { username , password , checkCode } = req.body ;
    if(checkCode.toLowerCase() != req.session.captcha.toLowerCase()){
        res.send('<script>alert("验证码输入有误！"); location.href="/login" ;</script>') ;
        return ;
    }

    var info = await UserModel.findOne({
        username,
        password : getCrypto(password)
    });
    if(info){
        //写入session ，可以知道是哪一个用户
        req.session.username = username ;

        res.send('<script>alert("登录成功！"); location.href="/admin"; </script>');
    }
    else{
        res.send('<script>alert("登录失败！"); location.href="/login"; </script>');
    }

};

var register = async (req,res,next)=>{
    // res.send('register');
    var { username , password } = req.body;
    var info = await UserModel({
        username , 
        password : getCrypto(password)
    }).save().catch((err)=>{
        res.send('<script>alert("注册失败！"); location.href="/register"; </script>');
    });
    if(info){
        res.send('<script>alert("注册成功！"); location.href="/login"; </script>');
    }
};

var logout = async (req,res,next)=>{
    //退出时，将username清空
    req.session.username = null ;
    res.send('logout');
};

module.exports = {
    login,
    register,
    logout
};
