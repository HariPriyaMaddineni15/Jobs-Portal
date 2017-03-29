singlePageApp.service("jobsservice", function($http){
	this.getJobs = function(){
		var getObj = $http.get(URL.host);
		return getObj;
	}
})