var app=angular.module("handleEvent",[])
	.controller("ctrl",function($scope){

		var language=[
			{name:"C#",like:0,dislike:0,minus:0},
			{name:"ASP.NET",like:0,dislike:0,minus:0},
			{name:"SQL Server",like:0,dislike:0,minus:0},
			{name:"AngularJS",like:0,dislike:0,minus:0}
		];

		$scope.language=language;

		$scope.tangLike=function(lang){
			lang.like++;
			lang.minus=lang.like-lang.dislike
		}

		$scope.tangDislike=function(lang){
			lang.dislike++;
			lang.minus=lang.like-lang.dislike
		}
	});