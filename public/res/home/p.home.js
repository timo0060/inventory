(function(){
    'use strict';
    
    angular.module("inventory").controller("HomeController", function($state, $log, $http, $scope){
        
        $scope.test = function(){
            
            var data = {
                data: "test"
            };
            
            $http({
                method: "POST",
                url: "http://server.inventory:443/api/test",
                data: data
            }).then(function success(res){
                $log.debug(res.data.data);
            }, function error(res){
                
            });
        }
        
    });
}());