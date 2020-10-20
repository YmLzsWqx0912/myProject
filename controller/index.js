
var PostModel = require('../model/post');

var login = (req,res,next)=>{
    res.render('login');
};
var register = (req,res,next)=>{
    res.render('register');
};
var admin = (req,res,next)=>{
    res.render('admin',{
        username : req.session.username
    });
};

var admin_postedit = (req,res,next)=>{

    PostModel.find().then((infos)=>{
        res.render('admin_postedit',{
            username : req.session.username,
            infos 
        });
    }).catch((err)=>{
        res.render('admin_postedit',{
            username : req.session.username,
            infos : [] 
        });
    });

};
var admin_postadd = (req,res,next)=>{
    res.render('admin_postadd',{
        username : req.session.username
    });
};

var admin_postupdate = (req,res,next) => {
   //回显数据
    PostModel.findOne({ postId :  req.params.postId }).then((info)=>{
        res.render('admin_postupdate',{
            username : req.session.username,
            info
        });
    }).catch((err)=>{
        res.render('admin_postupdate',{
            username : req.session.username,
            info : {}
        });
    });

    
};

module.exports = {
    login,
    register,
    admin,
    admin_postedit,
    admin_postadd,
    admin_postupdate
};