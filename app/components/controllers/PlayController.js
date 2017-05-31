'use strict';

angular.module('penduApp.play', ['ngRoute'])

// Routing configuration for this module
.config(['$routeProvider',function($routeprovider){
	$routeprovider.when('/about', {
		controller: 'PlayController',
		templateUrl: 'components/views/playView.html'
	});
}])

.controller('PlayController', ['$scope', function($scope) {

	var dict=['mot', 'angular', 'jeu', 'test', 'image', 'technique']
	var word = "";

	init();

	function init(){
		$scope.hang = "hang_1.gif"
		$scope.life=1

		word=dict[Math.floor((Math.random() * 5))]
		$scope.displayed_word=""
		for(var c in word){
			$scope.displayed_word+='*';
		}
	};






	$scope.play = function () {
		var indexes = getIndexes(word, $scope.char);
		for(var i in indexes){
			var index = indexes[i]
			$scope.displayed_word = $scope.displayed_word.substr(0, index) + word[index] + $scope.displayed_word.substr(index + 1);
		}

		if($scope.displayed_word.indexOf('*')<0){
			alert('Bravo, vous avez gagner')
		}
		if(indexes.length<=0){
			$scope.life++
			$scope.hang = "hang_"+$scope.life+".gif"
			if($scope.life>=7){
				alert('Vous avez perdu !')
				init()
			}
		}
	}

	function getIndexes(str, chr) {
		var indexes = [];
		for(var i=0; i<str.length;i++) {
			if (str[i] === chr) indexes.push(i);
		}
		return indexes
	}


}]);