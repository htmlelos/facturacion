'use strict';

/**
 * @ngdoc service
 * @name facturasApp.ServicioProducto
 * @description
 * # ServicioProducto
 * Factory in the facturasApp.
 */
angular.module('facturasApp')
  .factory('ServicioProducto', function ($http) {
    // Service logic
    // ...

    var listadoProductos = function (callback) {
      $http.get('http://localhost:3000/api/productos', {})
        .success(function (data) {
          callback(data);
        });
    };

    var detalleProducto = function (id, callback) {
      $http.get('http://localhost:3000/api/producto/' + id, {})
        .success(function (data) {
          callback(data);
        });
    };

    return {
      listadoProductos: listadoProductos,
      detalleProducto: detalleProducto
    };

  });
