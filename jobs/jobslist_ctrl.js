singlePageApp.controller("jobsCtrl",function($scope, $http, ngTableParams, jobsservice){
	  $scope.getJobs = function() {
		  var getObj = jobsservice.getJobs();
               getObj.then(function(res) {
               $scope.data = res.data;
			
               //pagination
               var	initialPaginateData = {
			count:10,page:1
			};
			var	 tableData = {
		    total:$scope.data.length,
		    getData: function($defer,params){
	   	             var startIndex = (params.page()-1)*params.count();
			   	     var endIndex = params.page()*params.count();
			   	     $defer.resolve($scope.data.slice(startIndex,endIndex));
				     }
				};
	 $scope.tableParams = new ngTableParams(initialPaginateData,tableData); 
          });
	  }
	 $scope.getJobs();
	 //delete the data with reference to tiltle
		$scope.deleteJob = function(title){
			 var deleteObj = $http.delete(URL.host+ "/" + title);
	          
			deleteObj.then(function() {
                 alert("Job deleted successfully");
                 $scope.getJobs();
             });
		}
});


