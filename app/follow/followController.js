(function(){
	angular.module('Social')
	.controller('followController',['$scope','$http',function($scope,$http){
		$scope.user=JSON.parse(localStorage['UserData']);


		$http.get('api/users/get').then(function(response){
			
			$scope.users=response.data;
			console.log($scope.users);
		});
		 $scope.follow=function(userid,myid){
		 	var data={
		 		userid:userid,
		 		myid:myid
		 	}
		 	$http.post('api/users/follow',data).then(function(){
		 		console.log("okk");
		 	});
		 }
		 $scope.checkfollow=function(userid){
		 	for(var i=0;i<$scope.user.following.length;i++){
		 		if($scope.user.following[i]===userid){
		 			return true;
		 		}
		 	}
		 	return false;
		 }
	}]);
}());