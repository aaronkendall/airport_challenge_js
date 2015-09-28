describe("Plane", function() {
  var plane;

  beforeEach(function() {
    plane = new Plane();
  });

  describe('Plane flight', function() {

    it('is flying when created', function() {
      expect(plane.isFlying).toBe(true);
    });

    it('is not flying when it lands', function() {
      plane.land();
      expect(plane.isFlying).toBe(false);
    });
  });

});
