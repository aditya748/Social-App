var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
var multipart=require('connect-multiparty');
var mutimiddle=multipart();

var app=express();

mongoose.connect('mongodb://localhost:27017/social');
app.use(bodyparser.json());
app.use(mutimiddle);
var authenticationcontroller=require('./server/controller/authenticationcontroller');
var profileController=require('./server/controller/profileController');
var tweetController=require('./server/controller/tweetController');
var userController=require('./server/controller/userController');

app.use('/app',express.static(__dirname+'/app'));
app.use('/css',express.static(__dirname+'/css'));
app.use('/js',express.static(__dirname+'/js'));
app.use('/node_modules',express.static(__dirname+'/node_modules'));
app.get('/',function(req,res){
	res.sendfile("index.html");
});

app.post('/api/user/signup',authenticationcontroller.signup);
app.post('/api/user/login',authenticationcontroller.login);
app.get('/api/waste/getTweets',tweetController.getTweets);
app.get('/api/users/get',userController.getUsers);
app.post('/api/profile/edit',mutimiddle,profileController.update);
app.post('/api/profile/updateUsername',profileController.updateusername);
app.post('/api/waste/tweet',tweetController.abc);
app.post('/api/users/follow',userController.followuser);
app.listen('3333',function(){
	console.log("this works...");
});
