(function(){
	var app=angular.module('Social',['ui.router','ngFileUpload']).config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider.state('signup',{
			url:"/signup",
			templateUrl:"app/sign/signup.html",
			controller:'SignupController'
		})
		.state('editprofile',{
			url:'/editprofile',
			templateUrl:"app/profile/profile-edit.html",
			controller:"profile-edit"
		})
		.state('main',{
			url:'/',
			templateUrl:"app/main/main.html",
			controller:"mainController"
            })
		.state('follow',{
		url:'/follow',
		templateUrl:'app/follow/follow.html',
		controller:'followController'
	});
	});
}());