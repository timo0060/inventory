(function(){
  'use strict';
  angular.module('inventory')
    .config(function($stateProvider){
      $stateProvider.state('register', {
          url: '/register',
          templateUrl: 'res/register/p.register.html',
          controller: 'RegisterController'
      });
    });
}());