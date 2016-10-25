var app=angular.module("demo_nginclude",[]);
	app.controller("ctrl",function($scope){
		var employees=[
			{name:"phuong",brithday:new Date("05/25/1995"),salary:20000000,gender:"nam",status:true},
			{name:"tien",brithday:new Date("03/01/1997"),salary:1000000,gender:"nu",status:true}
		];

		$scope.employees=employees;
		$scope.reverse=false;
		$scope.employeeview="tableemployeeview.html";

		$scope.sortData=function(column){
			if ($scope.sort==column) {
				$scope.reverse=!$scope.reverse;
			}
			$scope.reverse=$scope.reverse;
			$scope.sort=column;
			$scope.searchText="";
		}

		$scope.getsortClass=function(column){
			if ($scope.sort==column) {
				return $scope.reverse? "arrow-up":"arrow-down"
			}
			
			return "";
		}
	});

	app.filter('bolgstatus',function(){
		return{
			function(input){
				//return input==true ?"Kích hoạt":"Khóa";
				if (input) {
					return "Kích hoạt";
				}
				return "Khóa";
			}
		}
	});