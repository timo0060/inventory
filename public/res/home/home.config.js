(function(){
  'use strict';
  angular.module('inventory')
    .config(function($stateProvider){
      $stateProvider.state('home', {
          url: '/',
          templateUrl: 'res/home/p.home.html',
          controller: 'HomeController',
          auth: false
      });
    });
}());