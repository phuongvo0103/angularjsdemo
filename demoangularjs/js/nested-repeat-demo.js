var myApp=angular.module("nesteadrepeatDemo",[])
	.controller("ctrl",function($scope){
		
		var countries=[
			{
				name:"UK",
				cities:[
					{name:"London"},
					{name:"Manchester"},
					{name:"Liverpool"}
				]
			},
			{
				name:"USA",
				cities:[
					{name:"Los angeles"},
					{name:"Chicago"},
					{name:"Houton"}
				]
			},
			{
				name:"India",
				cities:[
					{name:"Hyderabad"},
					{name:"Chennai"},
					{name:"Mumbai"}
				]
			}
		];

		$scope.countries=countries;

	});