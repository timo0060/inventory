(function(){
  'use strict';
  angular.module('inventory')
    .config(function($stateProvider){
      $stateProvider.state('login', {
          url: '/login',
          templateUrl: 'res/login/p.login.html',
          controller: 'LoginController',
          auth: false
      });
    });
}());