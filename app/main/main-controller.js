(function(){
	angular.module('Social')
	.controller('mainController',['$scope','$http','$interval',function($scope,$http,$interval){
		if(localStorage['UserData']!==undefined){
			$scope.user=JSON.parse(localStorage['UserData']);
			console.log($scope.user);
		}
		$scope.sendTweets=function(event){
			if(event.which===13){
				var request={
					user:$scope.user.email,
					userId:$scope.user._id,
					content:$scope.tweet
				}
				$http.post('api/waste/tweet',request).success(function(data){
					console.log((data));
					$scope.tweets=data;
					alert($scope.tweets);
				}).error(function(err){
					console.log(err);
				});
			}

		}

		function getTweets(init){
				$http.get('api/waste/getTweets').success(function(response){
					if(init){
						$scope.tweets=response;
					}
					else{
						$scope.incoming=response;
					}
				}).error(function(err){
					console.log(err);
				});
			}
			
			$interval(function(){
				getTweets(false);
			},5000);
	}]);
}());