//module and directives
var singlePageApp = angular.module("SPApp",['ngRoute','ngTable','pascalprecht.translate']);
//route provider to redirect to respective url
singlePageApp.config(function($routeProvider){
	$routeProvider.when("/home",{
		templateUrl:"home/home.html",
		controller:"homeCtrl"
	})
	.when("/jobs",{
		templateUrl:"jobs/jobs.html",
		controller:"jobsCtrl"
	})
	.when("/contactus",{
		templateUrl:"contactus/contactus.html",
		controller:"contactusCtrl"
	})
	.when("/edit/:jtitle",{
		templateUrl:"jobs/edit.html",
		controller:"editCtrl"
	})
	.when("/add",{
		templateUrl:"jobs/add.html",
		controller:"addCtrl"
	})
	.otherwise({
		redirectTo:"/home"
	})
});