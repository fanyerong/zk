'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .directive('auto',function($http){
  	return{
  		restrict:'ECMA',
  		template:'<div><ul><li ng-repeat="a in aa">{{a.title | u}}</li><p ng-repeat="b in bb"><img ng-src="{{b.img}}" alt="..."></p></ul></div>',
  		replace:true,
  		scope:true,
  		link:function(s,e,attr){
	  	$http({
	  		url:'http://www.somenote.cn:1510/test',
	  		method:'get'
	  	}).success(function(e){
	  		s.aa=e
	  	}),
	  	$http({
	  		url:'http://www.somenote.cn:1510/aut',
	  		method:'get'
	  	}).success(function(e){
	  		s.bb=e
	  	})
	  	
	  	
  		}
  	}
  	
  })
  .filter('u',function(){
		return function(input){
			if(input.length>=10){
				return input.substr(0,6)+"......"
			}else{
				return input;
			}
		}
});
