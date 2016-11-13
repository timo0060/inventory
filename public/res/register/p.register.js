(function(){
    'use strict';
    
    angular.module("inventory").controller("RegisterController", function($state, $log, $http, $scope, Flash, $rootScope, $cookies){
        
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
                
                if(!res.data.error){
                    $log.debug(res.data)
                    var user = {
                        name: res.data.name,
                        userid: res.data.userid,
                        _token: res.data._token
                    }
                    
                    $cookies.putObject('user', user);
                    $rootScope.UserLoggedIn = true;
                    
                    $state.go('profile');
                    
                }else{
                    var id = Flash.create('danger', res.data.message, 5000, {}, true);
                }
            }, function error(res){
                
            });
            
        };
        
    });
}());