singlePageApp.controller("editCtrl",function($scope,$http,$location,$routeParams, jobsservice){
	//jtitle from route config
	var titleUrl = $routeParams.jtitle;
	//get the data from webservices with respect to title
    var getJobDetails = $http.get(URL.host + "/" + titleUrl);
    //display the old data into fields
    getJobDetails.then(function(res) {
        var jobDetails = res.data;
        $scope.type = jobDetails.type;
        $scope.desc = jobDetails.desc;
    	$scope.title = jobDetails.title;
        $scope.experience = jobDetails.experience;
       
	$scope.editJob =function(){
		          var type = $scope.type;
	              var desc = $scope.desc;
	              var title = $scope.title;
	              var experience = $scope.experience;
	              //updated data
	              var editData = {
	            		  type: type,
	                      desc: desc,
	                      title: title,
	                  	  experience: experience
	              };
	              //to update the data back into webservices
	              var editObj = $http.put(URL.host, editData);
	              editObj.then(function(res) {
	                  alert("Successfully edited");
	                  $location.path("jobs");
	              });
		    }
       });
});
