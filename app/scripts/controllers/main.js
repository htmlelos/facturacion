/**
 * @ngdoc function
 * @name facturasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the facturasApp
 */
/*global angular*/
angular.module('facturasApp')
  .controller('MainCtrl', function ($scope, $log, ServicioProducto) {
    'use strict';

    var promise = ServicioProducto.listadoProductos();

    promise.then(
      function (payload) {
        $scope.productos = payload.data;
      },
      function (errorPayload) {
        $log.error('Fallo cargando producto', errorPayload);
      }
    );

    $scope.items = [];

    $scope.busqueda = '';

    $scope.subTotal = 0;
    $scope.impuestos = 0;
    $scope.total = 0;
    $scope.aPagar = 0;

    $scope.agregarProducto = function (id) {

      /*jslint nomen: true*/
      var item = {
          _id: $scope.productos.products[id]._id,
          nombre: $scope.productos.products[id].nombre,
          cantidad: 1,
          precio: $scope.productos.products[id].precio
        },
        exists = $scope.items.filter(function (item) {
          return item._id === $scope.productos.products[id]._id;
        });
      /*jslint nomen: true*/
      if (exists.length === 0) {
        $scope.items.push(item);
        $scope.calcularTotal();
      }

    };

    $scope.incrementarCantidad = function (id) {
      $scope.items[id].cantidad += 1;
      $scope.calcularTotal();
    };

    $scope.calcularTotal = function () {
      $scope.subTotal = $scope.items.map(function (item) {
        return (item.precio * item.cantidad);
      }).reduce(function (valorAnterior, valorActual) {
        return valorAnterior + valorActual;
      });

      $scope.impuestos = $scope.subTotal * 0.21;
      $scope.total = $scope.subTotal + $scope.impuestos;
      $scope.aPagar = $scope.total;
    };
  });
