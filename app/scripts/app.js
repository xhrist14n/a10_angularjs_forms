'use strict';

/**
 * @ngdoc overview
 * @name adminApp
 * @description
 * # adminApp
 *
 * Main module of the application.
 */
angular
  .module('adminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/control', {
        templateUrl: 'views/control.html',
        controller: 'ControlCtrl'
      })
      .when('/data', {
        templateUrl: 'views/data.html',
        controller: 'DataCtrl'
      })
      .when('/check', {
        templateUrl: 'views/check.html',
        controller: 'CheckCtrl'
      })
      .when('/radio', {
        templateUrl: 'views/radio.html',
        controller: 'RadioCtrl'
      })
      .when('/select', {
        templateUrl: 'views/select.html',
        controller: 'SelectCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
