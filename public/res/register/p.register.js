(function(){
    'use strict';
    
    angular.module("inventory").controller("RegisterController", function($state, $log, $http, $scope){
        
        $scope.user = {};
        
        $scope.register = function(){
            
            $http({
                method: "POST",
                url: "http://server.inventory:443/api/register",
                data: {
                    name: $scope.user.name,
                    username: $scope.user.username,
                    email: $scope.user.email,
                    password: $scope.user.password,
                    repass: $scope.user.repass
                }
            }).then(function success(res){
                $log.debug(res.data);
            }, function error(res){
                
            });
            
        };
        
    });
}());