var mongoose = require('mongoose');
var postSchema = mongoose.Schema({
    postName : { type : String , required : true },
    postCity : { type : String , required : true },
    postMoney : { type : String , required : true },
    postYear : { type : String , required : true },
    postEdu : { type : String , required : true },
    companyName : { type : String , required : true },
    companyLogo : { type : String , required : true },
    postMessage : { type : String , required : true },
    postId : { type : Number , required : true }
});

var PostModel = mongoose.model('postList',postSchema);

module.exports = PostModel;