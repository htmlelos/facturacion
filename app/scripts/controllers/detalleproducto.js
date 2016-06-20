/**
 * @ngdoc function
 * @name facturasApp.controller:DetalleproductoCtrl
 * @description
 * # DetalleproductoCtrl
 * Controller of the facturasApp
 */
/*global angular*/
angular.module('facturasApp')
  .controller('DetalleproductoCtrl', function ($scope, $routeParams, $log, ServicioProducto) {
    'use strict';

    var promise = ServicioProducto.detalleProducto($routeParams.id);

    promise.then(
      function (payload) {
        console.log('PRODUCTO: %O', payload.data.product);
        $scope.producto = payload.data.product;
      },
      function (errorPayload) {
        $log.error('Fallo cargando los productos', errorPayload);
      }
    );
  });
