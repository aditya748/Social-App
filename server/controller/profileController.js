var user=require('../dataset/user');
var fs=require('fs-extra');
var path=require('path'); 
module.exports.update=function(req,res){
	var filename=req.files.file;
	var userid=req.body.userid;
	//console.log("usr....="+userid+" file="+filename);
	var uploadDate=new Date();
	
	var temppath=filename.path;
	var target=path.join(__dirname+"../../upload/"+userid+uploadDate+filename.name);
	fs.rename(temppath,target,function(err){
		if(err){
			console.log(err);
			res.json({'status':500});
		}
		else{
			console.log("moved");
			res.json({'status':200});
		}
	});
}
module.exports.updateusername=function(req,res){
	var username=req.body.username;
	var userid=req.body.userid;
	user.findById(userid,function(err,data){
		var user=data;
		user.username=username;
		user.save(function(err){
			if(err){
				console.log(err);
				res.json({'status':500});
			}
			else{
				console.log("success");
				res.json({'status':200});
			}
		});
	});
}