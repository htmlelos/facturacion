/**
 * @ngdoc service
 * @name facturasApp.ServicioProducto
 * @description
 * # ServicioProducto
 * Factory in the facturasApp.
 */
/*global angular*/
angular.module('facturasApp')
  .factory('ServicioProducto', function ($http) {
    'use strict';

    var listadoProductos = function (callback) {
        return $http.get('http://localhost:3000/api/productos', {});
      },
      detalleProducto = function (id, callback) {
        return $http.get('http://localhost:3000/api/producto/' + id, {});
      };

    return {
      listadoProductos: listadoProductos,
      detalleProducto: detalleProducto
    };

  });
