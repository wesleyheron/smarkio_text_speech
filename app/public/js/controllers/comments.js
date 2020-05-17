angular.module('smarkio').controller('CommentsController', function($scope, $http) {

	$scope.comment = {};
	$scope.count = '';
	$scope.showFirstComment = false;
	$scope.showErroMessage = false;
	$scope.showSucceedAddedComment = false;
	$scope.showErrorAddedComment = false;
	$scope.message = '';
	$scope.errorMessage = '';


	const endPoint = 'http://localhost:3000/api/comments/';


	$scope.get = function () {
		$http({
			method: 'GET',
			url: endPoint
		}).then(function (comments) {
			$scope.comments = comments.data;
			
			comments.data.forEach((e, index) => {
				$scope.comments[index].audio = '../../audios/' + e.id + '.ogg';
			});
			
			$scope.count = comments.data.length;
			if($scope.count <= 0)
				$scope.showFirstComment = true;
				
		}, function (error) {
			$scope.showErroMessage = true;
			$scope.errorMessage = error.statusText + ' ' + '(' + error.status + ')';
		});
	};

	 $scope.get();

	 $scope.add = function() {
		if ($scope.formComment.$valid) {
			$http.post(endPoint, $scope.comment)
			.success(function(result) {
				$scope.comment = {};
				$scope.message = result.message;
				showAlertSuccess();		
				
			})
			.error(function(erro) {
				showAlertError();
				$scope.message = erro.message;
			})
			.finally(function(){
				$scope.get();
			});
		};
	 };

	 function showAlertSuccess (){
		$scope.showSucceedAddedComment = true;
		$("#succeedMessage").fadeTo(2000, 500).slideUp(500, function() {
			$("#succeedMessage").slideUp(500);
			$scope.showSucceedAddedComment = false;
		  });		
	 };

	 function showAlertError (){
		$scope.showErrorAddedComment = true;
		$("#errorMessage").fadeTo(2000, 500).slideUp(500, function() {
			$("#errorMessage").slideUp(500);
			$scope.showErrorAddedComment = false;
		  });		
	 };	 
});