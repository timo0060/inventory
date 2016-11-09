(function(){
    'use strict';
    
    angular.module("inventory").controller("LoginController", function($state, $log, $http, $scope){
        $scope.user = {};
        
        $scope.login = function(){
            $log.debug($scope.user);
        };
    });
}());