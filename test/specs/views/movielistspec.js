/*global describe:false beforeEach:false it:false expect:false Moviestack:false _:false */
(function(Moviestack, describe, beforeEach, it, expect, _) {
  "use strict";

  describe('View: MovieListView', function() {

    var movies, view;

    beforeEach(function(){
      movies = new Moviestack.Movies([
        {id: 1, title: "movie 1", watched: false},
        {id: 2, title: "movie 2", watched: true},
        {id: 3, title: "movie 3", watched: false},
        {id: 4, title: "movie 4", watched: true},
        {id: 5, title: "movie 5", watched: false},
        {id: 6, title: "movie 6", watched: false}
      ], {localStorage: {}});
      var fixture = $('<div id="main"> <ul id="movie-list"></ul> </div>');
      view = new Moviestack.MovieListView({
        collection: movies,
        el: fixture
      }).render();
    });


    it.skip('should render a simple list.', function() {
      var rows = view.$(".movie-row");
      expect(rows.size()).to.equal(6);
    });

    it.skip("should update when a model is added.", function(){
      var rows = view.$(".movie-row");
      expect(rows.size()).to.equal(6);
      movies.create({title: "movie 6", watched: true});
      rows = view.$(".movie-row");
      expect(rows.size()).to.equal(7);
    });

    // Actually best implemented in MovieRowView!
    it.skip("should update when a model is removed.", function(){
      var rows = view.$(".movie-row");
      expect(rows.size()).to.equal(6);
      movies.get(2).destroy();
      rows = view.$(".movie-row");
      expect(rows.size()).to.equal(5);
    });

    // Asynchronous test
    it.skip("should propagate 'filter' events from it's collection down to all models in the collection (in the form of 'visible' events to prevent bubble-loop).", function(done){
      var newFilter = "test";
      movies.get(5).on("visible", function(filter){
        expect(filter).to.equal(newFilter);
        done();
      });
      movies.trigger("change:filter", newFilter);
    });

    // Note: A 'hidden' class is included in base.css and is to be used to hide filtered elements.
    it.skip("should hide unwatched movies when filter is set to 'watched'.", function(){
      view.$(".movie-row").each(function(el){
        expect($(el).hasClass("hidden")).to.be.false;
      });
      movies.setFilter("watched");
      var labels = view.$(".movie-row.hidden .title");
      var titles = _(labels).map(function(l){return $(l).html();});
      expect(titles).to.deep.equal(["movie 1", "movie 3", "movie 5", "movie 6"]);
    });

    // Note: A 'hidden' class is included in base.css and is to be used to hide filtered elements.
    it.skip("should hide watched movies when filter is set to 'unwatched'.", function(){
      view.$(".movie-row").each(function(el){
        expect($(el).hasClass("hidden")).to.be.false;
      });
      movies.setFilter("unwatched");
      var labels = view.$(".movie-row.hidden .title");
      var titles = _(labels).map(function(l){return $(l).html();});
      expect(titles).to.deep.equal(["movie 2", "movie 4"]);
    });

  });

})(Moviestack, describe, beforeEach, it, expect, _);

