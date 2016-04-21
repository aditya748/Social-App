 var Users=require('../dataset/user');
 module.exports.getUsers=function(req,res){
 	Users.find({},function(err,data){
 		if(err){
 			res.json(err);
 		}
 		else{
 			res.json(data);
 		}
 	})
 }
 module.exports.followuser=function(req,res){
 	var userid=req.body.userid,
 	myid=req.body.myid;
 	Users.findById(userid,function(err,userId){
 		userId.followers.push({userId:myid});
 		userId.save();
 	});
 	Users.findById(myid,function(err,myId){
 		myId.following.push({userId:userid});
 		myId.save();
 	});
 }