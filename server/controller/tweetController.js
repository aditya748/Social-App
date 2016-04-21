var mongoose=require('mongoose');
var Tweet=require('../dataset/tweets');

module.exports.abc=function(req,res){
	console.log(req.body);
	var xyz = new Tweet(req.body);
	console.log("..............................");
	xyz.save();
	Tweet.find({},function(err,data){
		if(err){
			res.error(err);
		}
		else{
			res.json(data);
		}
	})
}
module.exports.getTweets=function(req,res){
	//alert("okk");
	Tweet.find({}).sort({date:-1}).exec(function(err,data){
		if(err){
			res.json(err);
		}
		else{
			res.json(data);
		}
	});
}