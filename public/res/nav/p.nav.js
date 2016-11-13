(function(){
    'use strict';
    
    angular.module("inventory").controller("NavController", function($rootScope, $log, $scope, $state,$cookies){
        $rootScope.$watch('UserLoggedIn', function(oldVal, newVal){
            
            if(newVal){                
                $scope.loggedIn = true;
                $scope.user = $cookies.getObject('user');
            }
        });
        
        $scope.logout = function(){
            $cookies.remove('user');
            $rootScope.UserLoggedIn = false;
            $scope.loggedIn = false;
        };
    });
}())