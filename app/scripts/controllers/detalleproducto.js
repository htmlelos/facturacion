'use strict';

/**
 * @ngdoc function
 * @name facturasApp.controller:DetalleproductoCtrl
 * @description
 * # DetalleproductoCtrl
 * Controller of the facturasApp
 */
angular.module('facturasApp')
  .controller('DetalleproductoCtrl', function ($scope, $routeParams, ServicioProducto) {
    ServicioProducto.listadoProductos(function(productos) {
      $scope.productos = productos;
    });

    ServicioProducto.detalleProducto($routeParams.id, function(producto){
      console.log('Producto %O', producto.product[0]);
      $scope.producto = producto.product[0];
    });
  });
