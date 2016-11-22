var app = angular.module('jazibApp');

app.controller("viewController", function($scope, wordsService){
	$scope.displayName = wordsService.getName();
	$scope.displayAdjective = wordsService.getAdjective();
	$scope.displayAdjective2 = wordsService.getAdjective2();
	$scope.displayVerb = wordsService.getVerb();
	$scope.displayVerb2 = wordsService.getVerb2();
	$scope.displayNoun = wordsService.getNoun();
	$scope.displayNoun2 = wordsService.getNoun2();

})