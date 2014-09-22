"use strict";

angular.module("app", [
	"app.filters",
	"app.services",
	"app.directives",
	"app.controllers",
	"ui.router",
	"ui.bootstrap",
	"ipCookie"
]).
app.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/");
	$stateProvider
		.state('main', {
			url: "/",
			controller: "mainController",
			templateUrl: "partials/main.php"
		});
});
