"use strict";

angular.module("myApp", [
	"myApp.filters",
	"myApp.services",
	"myApp.directives",
	"myApp.controllers",
	"ui.router",
	"ui.bootstrap",
	"ipCookie"
]).
config(["$urlRouterProvider", "$stateProvider", function($urlRouterProvider, $stateProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state("view1", {
			url: "/view1",
			templateUrl: "partials/partial1.php",
			controller: "MyCtrl1"
		})
		.state("view2", {
			url: "/view2",
			templateUrl: "partials/partial2.php",
			controller: "MyCtrl2"
		});
}]);
