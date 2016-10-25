var myApp = angular.module("Demoservice", []);

		myApp.controller("ctrl",function($scope,$http){
			$http.get("/demoangularjs/angularjsbService/webservicephp.php").then(function(response){
				$scope.emp=response.data;
			});
		});