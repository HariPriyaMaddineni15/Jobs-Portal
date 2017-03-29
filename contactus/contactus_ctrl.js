singlePageApp.controller("contactusCtrl",function($scope){
	$scope.name = "Pro-IT";
	$scope.ename = "ABC";
	$scope.phno = "9876543210";
	$scope.eid = "abc@pro-it.com";
	angular.element(document).ready(function () {
		$('#tabs').tab();
	});
});