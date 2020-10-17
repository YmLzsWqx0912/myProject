
var svgCaptcha = require('svg-captcha') ;

function getcheckCode(req, res, next){
    var captcha = svgCaptcha.create({
        //配置验证码的干扰线
        noise : 3
    });
    req.session.captcha = captcha.text ;
    res.type('svg') ;
    res.status(200).send(captcha.data) ;
}

module.exports = getcheckCode;









