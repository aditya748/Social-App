var User=require('../dataset/user');

module.exports.signup=function(req,res)
{
	var user=new User(req.body);
	user.save();
	res.json(user);
}

module.exports.login=function(req,res)
{
	console.log("doing......");
	User.find(req.body,function(err,results){
		if(err)
			console.log("error........");
	console.log(req.body);
	console.log(results);
		if(results && results.length===1){
				console.log("done...");
				var userData=results[0];
				res.json({"email":req.body.email,"_id":userData._id,"following":results[0].following,"followers":results[0].followers});
			}
			else{
				console.log("user.....");
			}
		});
	
}