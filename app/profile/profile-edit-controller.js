(function(){
	angular.module('Social')
	.controller('profile-edit',['Upload','$state','$scope','$http',function(Upload,$state,$scope,$http){
		$scope.user=JSON.parse(localStorage['UserData']);
		$scope.$watch(function(){
			return $scope.file;
		},function(){
			$scope.upload($scope.file);
		});
		$scope.upload=function(file){
			if(file){
				Upload.upload({
					url:'api/profile/edit',
					method:'post',
					data:{userid:$scope.user._id},
					file:file
				}).progress(function(prog){
					console.log("works");
				}).success(function(data){

				}).error(function(err){
					console.log(err);
				});
			}
		};
		$scope.updateUsername=function(){
			var request={
				userid:$scope.user._id,
				username:$scope.user.username
			}
			$http.post('api/profile/updateUsername',request).success(function(){
				console.log("success......");
			}).error(function(err){
				console.log(err);
			});
		};
		
	}]);
}());