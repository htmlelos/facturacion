'use strict';

describe('Service: ServicioProducto', function () {

  // load the service's module
  beforeEach(module('facturasApp'));

  // instantiate service
  var ServicioProducto;
  beforeEach(inject(function (_ServicioProducto_) {
    ServicioProducto = _ServicioProducto_;
  }));

  it('should do something', function () {
    expect(!!ServicioProducto).toBe(true);
  });

});
