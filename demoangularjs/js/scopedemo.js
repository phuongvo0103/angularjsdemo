var sApp=angular.module("ScopeDemo",[]);

sApp.controller("classctrl",function($scope,$rootScope){
	//$scope.name="văn phương";
	//$rootScope.name="văn phương & thị thiền";
});

sApp.controller("schoolctrl",function($scope,$rootScope){
	//$scope.name="thị tiền";
});

sApp.controller("topctrl",function($scope,$rootScope){
	$scope.name="thị tiền";
});