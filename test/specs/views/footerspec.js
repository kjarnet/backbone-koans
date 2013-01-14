/*global describe:false beforeEach:false it:false expect:false Moviestack:false */
(function(Moviestack, describe, beforeEach, it, expect, _) {
  "use strict";

  describe('View: FooterView', function() {

    var movies, view;

    beforeEach(function(){
      movies = new (Moviestack.Movies.extend({
        watched: function(){
          return [this.get(2),
                  this.get(4)];
        },
        unwatched: function(){
          return [this.get(1),
                  this.get(3),
                  this.get(5),
                  this.get(6)];
        }
      }))([
        {id: 1, title: "movie 1", watched: false},
        {id: 2, title: "movie 2", watched: true},
        {id: 3, title: "movie 3", watched: false},
        {id: 4, title: "movie 4", watched: true},
        {id: 5, title: "movie 5", watched: false},
        {id: 6, title: "movie 6", watched: false}
      ], {localStorage: {}});
      view = new Moviestack.FooterView({
        collection: movies
      }).render();
    });

    it('should render a footer with some stats.', function() {
      expect(view.$("#movie-count").html()).to.contain("<strong>4</strong>");
      expect(view.$("#movie-count").html()).to.contain("movie");
      expect(view.$("#movie-count").html()).to.contain("movies");
      expect(view.$("#clear-watched").html()).to.contain("Clear watched (2)");

    });

    it("should update when it's collection changes", function(){
        movies.watched = function(){
          return [
            this.get(1),
            this.get(2),
            this.get(3),
            this.get(5),
            this.get(4)
            ];};
        movies.unwatched = function(){
          return [this.get(6)];
        };
      movies.trigger("change");
      expect(view.$("#movie-count").html()).to.contain("<strong>1</strong>");
      expect(view.$("#movie-count").html()).not.to.contain("movies");
      expect(view.$("#movie-count").html()).to.contain("movie");
      expect(view.$("#clear-watched").html()).to.contain("Clear watched (5)");
      movies.watched = function(){
        return [
          this.get(1),
          this.get(2),
          this.get(3),
          this.get(5),
          this.get(4)
          ];};
      movies.unwatched = function(){
        return [
          this.get(6),
          this.get(7)
        ];};
      movies.create({id: 7, title: "new movie", watched: false});
      expect(view.$("#movie-count").html()).to.contain("<strong>2</strong>");
      expect(view.$("#movie-count").html()).to.contain("movies");
      expect(view.$("#clear-watched").html()).to.contain("Clear watched (5)");
    });

    it("should set it's collection's filter on clicking a filter-link.", function(){
      expect(movies.getFilter()).to.equal(null);
      view.$("#filter-watched").trigger(jQuery.Event("click"));
      expect(movies.getFilter()).to.equal("watched");
      view.$("#filter-unwatched").trigger(jQuery.Event("click"));
      expect(movies.getFilter()).to.equal("unwatched");
      view.$("#filter-all").trigger(jQuery.Event("click"));
      expect(movies.getFilter()).to.equal(null);
    });

    it("should destroy all watched movies on clicking the clear-watched link.", function(){
      expect(movies.length).to.equal(6);
      view.$("#clear-watched").trigger(jQuery.Event("click"));
      expect(movies.length).to.equal(4);
    });

  });

})(Moviestack, describe, beforeEach, it, expect, _);

