(function(){
    'use strict';
    
    angular.module("inventory").controller("EditProfileController", function($state, $log, $http, $scope, Flash, $cookies){
        $scope.user = $cookies.getObject('user');
        
        
    });
}());