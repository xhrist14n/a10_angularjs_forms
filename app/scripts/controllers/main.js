'use strict';

/**
 * @ngdoc function
 * @name adminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adminApp
 */
angular.module('adminApp')
  .controller('MainCtrl', function ($scope) {
      console.log("Main start");
      $scope.curso='Desarrollo de Aplicaciones Web con AngularJS - Formularios';
      $scope.autor = "Christian Portilla Pauca";
      
      var id = "main";
      activeMenu(id);
      console.log("Main end");
  });