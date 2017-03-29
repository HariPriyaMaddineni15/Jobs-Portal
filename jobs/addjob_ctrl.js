singlePageApp.controller("addCtrl",function($scope,$http,$location, jobsservice){
	$scope.addJob =function(){
	          var type = $scope.type;
              var desc = $scope.desc;
              var title = $scope.title;
              var experience = $scope.experience;
              
              var newData = {
            		  type: type,
                      desc: desc,
                      title: title,
                  	  experience: experience
              };
              //enter the new data
              var addObj = $http.post(URL.host, newData);
              addObj.then(function(res) {
                  alert("JOb Added" + res);
                  //location redirecting to jobs after add is done
                  $location.path("jobs");
              });
	   }
});