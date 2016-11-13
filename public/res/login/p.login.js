(function(){
    'use strict';
    
    angular.module("inventory").controller("LoginController", function($state, $log, $http, $scope, Flash, $cookies){
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
                
                if(!res.data.error){
                    
                    var user = {
                        name: res.data.name,
                        userid: res.data.userid,
                        _token: res.data._token
                    }
                    
                    $cookies.putObject('user', user);
                    $state.go('profile');
                }else{
                    var id = Flash.create('danger', res.data.message, 5000, {}, true);
                }
            }, function error(res){
                $log.error(res);
            });
        };
    });
}());