/*global describe:false beforeEach:false it:false expect:false Moviestack:false _:false */
(function(Moviestack, describe, beforeEach, it, expect, _) {
  "use strict";

  describe('View: HeaderView', function() {

    var fixture;
    var view, movies;

    beforeEach(function(){
      fixture = $('<div id="header"><input id="toggle-all" type="checkbox"><label for="toggle-all">x</label><input id="new-movie"></div>');
      movies = new Moviestack.Movies([
        {title: "movie 1", watched: false, order: 1},
        {title: "movie 2", watched: true,  order: 2},
        {title: "movie 3", watched: false, order: 3},
        {title: "movie 4", watched: true,  order: 4},
        {title: "movie 5", watched: false, order: 5},
        {title: "movie 6", watched: false, order: 6}
      ], {localStorage: {}});
      view = new Moviestack.HeaderView({
        el: fixture,
        collection: movies
      }).render();
    });

    describe("Toggle All Checkbox", function(){

      it("should toggle the 'watched' state of all the movies in the view's collection.", function() {
        expect(movies.pluck("watched")).to.deep.equal([false, true, false, true, false, false]);
        // First click sets all movies to unwatched
        view.$("#toggle-all").trigger("click");
        expect(movies.pluck("watched")).to.deep.equal([false, false, false, false, false, false]);
        // Subsequent clicks toggles watched state
        view.$("#toggle-all").trigger("click");
        expect(movies.pluck("watched")).to.deep.equal([true, true, true, true, true, true]);
      });

      it("should be automatically selected when none of the movies are unwatched.", function() {
        expect(view.$("#toggle-all").prop("checked")).to.be.false;
        movies.each(function(m){m.set("watched", true)});
        expect(view.$("#toggle-all").prop("checked")).to.be.true;
      });

    });

    describe("Add New Movie Input-field", function(){

      it("should give the name of the new movie.", function() {
        var newTitle = "New movie";
        view.$("#new-movie").val(newTitle);
        expect(view.newAttributes()).to.deep.equal({title: newTitle, order: movies.nextOrder(), watched: false});
      });

      it("should add a new movie on pressing enter.", function() {
        var newTitle = "New Title";
        view.$("input#new-movie").val(newTitle);
        var e = jQuery.Event("keypress", { which: Moviestack.ENTER_KEY });
        view.$("#new-movie").trigger(e);
        var m = movies.last().toJSON();
        expect({title:m.title, watched:m.watched, order:m.order}).to.deep.equal({title: newTitle, watched: false, order: 7});
      });

    });

  });

})(Moviestack, describe, beforeEach, it, expect, _);

