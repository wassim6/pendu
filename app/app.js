'use strict';

// Defining Angular app model with all other dependent modules
var penduApp = angular.module('penduApp',['ngRoute',
	'penduApp.home','penduApp.play']);

penduApp.config(function($routeProvider, $locationProvider) {

	$routeProvider.otherwise({ redirectTo: '/'});

	$locationProvider.hashPrefix('');
});
