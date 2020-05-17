angular.module('smarkio', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {

	$locationProvider.html5Mode(true).hashPrefix('!');
	
	$routeProvider.when('/comments', {
		templateUrl: 'views/home.html',
		controller: 'CommentsController'
	});
	

	$routeProvider.otherwise({ redirectTo: '/comments'});

});