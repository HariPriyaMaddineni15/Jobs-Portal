//Home Controller to provide image urls
singlePageApp.controller("homeCtrl", function($scope,$sce){
	$scope.myImgSrc1 = $sce.trustAsResourceUrl('https://www.lcs.com/images/proit_logo.png');	
	$scope.myImgSrc2 = $sce.trustAsResourceUrl('https://assets.dice.com/external/images/empLogos/c3445c93ba6c666beffeabcc17e4bf1f.png');
	$scope.myImgSrc3 = $sce.trustAsResourceUrl('http://2miniml.com/pictures/big/2b3e5b6e440fea4492eedbefc494d803.gif');
	$scope.myImgSrc4 = $sce.trustAsResourceUrl('https://pbs.twimg.com/profile_images/2329839026/o26szz21nmozmvey3236_400x400.png');
	$scope.countries = [
        {name:'United States', locale:'en-us'},
        {name:'France', locale:'fr-fr'},
        {name:'Russia', locale:'ru-ru'}
        ]
	
	angular.element(document).ready(function () {
		$('#myCarousel').carousel({
			interval : false,
			cycle : true
		})
	});
	
	$scope.changeLanguage = function() {
		var selectedLocale = $scope.locale;
		sessionStorage.setItem("SELECTED_LOCALE", selectedLocale);
		$window.reload();
	}

});

