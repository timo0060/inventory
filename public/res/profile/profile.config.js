(function(){
  'use strict';
  angular.module('inventory')
    .config(function($stateProvider){
      $stateProvider.state('profile', {
          url: '/profile',
          templateUrl: 'res/profile/p.profile.html',
          controller: 'ProfileController',
          auth: true
      }).state('editProfile', {
          url: '/profile/edit',
          templateUrl: 'res/profile/p.edit.html',
          controller: 'EditProfileController',
          auth: true
      });
    });
}());