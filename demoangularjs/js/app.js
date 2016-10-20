
var app=angular.module("myApp",[]);

app.controller("ctrl",myController);

function myController($scope,$http){
	var employee={
		FirstName:"Phương",
		LastName:"Võ Văn",
		Gender:"Nam"
	}

	$scope.employee=employee;
}