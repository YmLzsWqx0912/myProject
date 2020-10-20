
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

    var page = req.params.page ;
    var count = 5 ;

    Promise.all([
        PostModel.find().skip((page-1)*count).limit(count),
        PostModel.find().count()
    ]).then((infos)=>{
        res.render('admin_postedit',{
            username : req.session.username,
            infos : infos[0],
            pages : Math.ceil(infos[1]/count),
            now : Number(page)
        });
    }).catch((err)=>{
        res.render('admin_postedit',{
            username : req.session.username,
            infos : [] ,
            pages : 0,
            now : 0
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