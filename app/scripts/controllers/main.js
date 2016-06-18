'use strict';

/**
 * @ngdoc function
 * @name facturasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the facturasApp
 */
angular.module('facturasApp')
  .controller('MainCtrl', function ($scope, ServicioProducto) {
    ServicioProducto.listadoProductos(function (productos) {
      $scope.productos = productos.products;
    });

    $scope.items = [];

    $scope.busqueda = '';

    $scope.subTotal = 0;
    $scope.impuestos = 0;
    $scope.total = 0;
    $scope.aPagar = 0;

    $scope.agregarProducto = function (id) {

      var item = {
        _id: $scope.productos[id]._id,
        nombre: $scope.productos[id].nombre,
        cantidad: 1,
        precio: $scope.productos[id].precio
      };

      var exists = $scope.items.filter(function (item) {
        return item._id === $scope.productos[id]._id;
      });

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
