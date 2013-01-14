/*global describe:false beforeEach:false it:false expect:false Moviestack:false */
(function(Moviestack, describe, beforeEach, it, expect) {
  "use strict";

  describe('Model: Movie', function() {

    var movie;

    beforeEach(function(){
      movie = new Moviestack.Movie({}, {localStorage: {}});
    });


    it('should be initialized with correct default values', function() {
      expect(movie.toJSON()).to.deep.equal({title: '', watched: false});
    });

    it("can toggle it's 'watched' status", function(){
      expect(movie.get('watched')).to.be.false;
      movie.toggle();
      expect(movie.get('watched')).to.be.true;
    });

  });

})(Moviestack, describe, beforeEach, it, expect);

