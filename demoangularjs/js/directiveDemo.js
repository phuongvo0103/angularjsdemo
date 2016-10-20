var myApp=angular.module("DirectiveDemo",[])
.controller("ctrl",function($scope){

}).directive("welcomeText",function(){
	//var html="<h1>Welcome PhuongVo95</h1>";
	return{
		//template: html
		templateUrl: "customdirective.html"
	}
});