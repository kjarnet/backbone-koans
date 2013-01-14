/*global describe:false beforeEach:false it:false expect:false Moviestack:false Store:false _:false */
(function(Moviestack, describe, beforeEach, it, expect, _) {
  "use strict";

  describe("Collection: Movies", function() {

    var movies;

    beforeEach(function(){
      movies = new Moviestack.Movies([
        {title: "movie 1", watched: false},
        {title: "movie 2", watched: true},
        {title: "movie 3", watched: false},
        {title: "movie 4", watched: true},
        {title: "movie 5", watched: false},
        {title: "movie 6", watched: false}
      ], {localStorage: {}});
    });


    it("should return all watched movies.", function() {
      var titles = _(movies.watched()).map(function(m){return m.get("title");});
      expect(titles).to.deep.equal(["movie 2", "movie 4"]);
    });

    it("should return all unwatched movies.", function() {
      var titles = _(movies.unwatched()).map(function(m){return m.get("title");});
      expect(titles).to.deep.equal(["movie 1", "movie 3", "movie 5", "movie 6"]);
    });

    // Asynchronous test
    it.skip("should trigger a 'filter' event when filter is updated.", function(done){
      movies.on("change:filter", function(newFilter){
        expect(newFilter).to.equal("watched");
        done();
      });
      movies.setFilter("watched");
    });

  });

})(Moviestack, describe, beforeEach, it, expect, _);

