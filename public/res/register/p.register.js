(function(){
    'use strict';
    
    angular.module("inventory").controller("RegisterController", function($state, $log, $http, $scope, Flash){
        
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
                
                $log.debug(res.data.error);
                
                if(!res.data.error){
                    
                }else{
                    var id = Flash.create('danger', res.data.message, 5000, {}, true);
                }
            }, function error(res){
                
            });
            
        };
        
    });
}());