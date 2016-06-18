'use strict';

describe('Controller: DetalleproductoCtrl', function () {

  // load the controller's module
  beforeEach(module('facturasApp'));

  var DetalleproductoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetalleproductoCtrl = $controller('DetalleproductoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetalleproductoCtrl.awesomeThings.length).toBe(3);
  });
});
