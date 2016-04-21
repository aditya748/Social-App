var mongoose=require('mongoose');
module.exports=mongoose.model('Tweet',{
	user:String,
	userId:String,
	content:String,
	date:{type:Date,default:Date.now}
});