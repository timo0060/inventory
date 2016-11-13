(function(){
    'use strict';
    
    angular.module("inventory").run(function($rootScope, $cookies, $log){
        if($cookies.getObject('user') == null){
            $rootScope.UserLoggedIn = false;
            /*var user = {
                name: 'Timothy Radder'
            };
            $cookies.putObject('user', user);*/
        }else{
            $rootScope.UserLoggedIn = true;
        }
    });
}())