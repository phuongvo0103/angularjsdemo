var myApp=angular.module("repeatDemo",[])
	.controller("ctrl",function($scope){
		
		var employees=[
			{firstName:"a",lastName:"m",gender:"nam"},
			{firstName:"b",lastName:"n",gender:"nữ"},
			{firstName:"c",lastName:"l",gender:"nam"},
			{firstName:"d",lastName:"o",gender:"nữ"},
			{firstName:"e",lastName:"h",gender:"nam"}
		];

		$scope.employees=employees;

	});