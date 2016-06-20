/**
 * @ngdoc overview
 * @name facturasApp
 * @description
 * # facturasApp
 *
 * Main module of the application.
 */
/*global angular*/
angular
  .module('facturasApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    'use strict';
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/producto/:id/detalle', {
        templateUrl: 'views/detalleproducto.html',
        controller: 'DetalleproductoCtrl',
        controllerAs: 'detalleProducto'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
