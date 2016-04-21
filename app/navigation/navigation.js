(function(){
angular.module('Social')
.controller('navigation',['$scope','$http','$state',function($scope,$http,$state)
{
		if(localStorage['UserData']){
			$scope.loggedIn=true;
		}
		else{
			$scope.loggedIn=false;
		}
		$scope.loginuse=function(){
			console.log("inside...sdsdsd");
		$http.post('api/user/login',$scope.login).success(function(data){
			alert(data);
			localStorage.setItem('UserData',JSON.stringify(data));
		}).error(function(data){
			alert(data);
		});
	}
	$scope.logout=function(){
		localStorage.clear();
		$scope.loggedIn=false;
	}
	}])
}());