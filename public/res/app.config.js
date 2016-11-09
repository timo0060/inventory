(function(){
  'use strict';

  angular.module('inventory').config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
  })
}())