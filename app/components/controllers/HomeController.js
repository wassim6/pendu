'use strict';

angular.module('penduApp.home', ['ngRoute'])

.config(['$routeProvider',function($routeprovider){
	$routeprovider.when('/', {
		controller: 'HomeController',
		templateUrl: 'components/views/homeView.html'
	});
}])

// Controller definition for this module
.controller('HomeController', ['$scope', function($scope) {

	init();

	function init(){
	
	};

	this.message = "Hello Home!";

}]);