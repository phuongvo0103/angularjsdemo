var app=angular.module("app",[]);
	
	app.controller("ctrl",myController);

	myController.$inject=["$scope","$http","stringService"];

	function myController($scope,$http,stringService){

		//$scope.input="";

		//sự kiện cho nut button
		$scope.transformString=function(input){
			$scope.output=stringService.transformString(input);
		}
	}
