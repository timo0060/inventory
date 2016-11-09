(function(){
    'use strict';
    
    angular.module("inventory").controller("LoginController", function($state, $log, $http, $scope, Flash){
        $scope.user = {};
        
        $scope.login = function(){
            $http({
                method: "POST",
                url: "http://server.inventory:443/api/login",
                data: {
                    username: $scope.user.username,
                    password: $scope.user.password
                }
            }).then(function success(res){
                $log.debug(res);
                
                if(!res.data.error){
                    
                }else{
                    var id = Flash.create('danger', res.data.message, 5000, {}, true);
                }
            }, function error(res){
                $log.error(res);
            });
        };
    });
}());