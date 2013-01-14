/*global Mustache:false Backbone:false _:false Store:false */

/**
 * View: AppView
 */
var Moviestack = (function(Moviestack, $) {
  "use strict";

  // The Application
  // ---------------

  // Our overall **AppView** is the top-level piece of UI.
  Moviestack.AppView = Backbone.View.extend({

    initialize: function() {
      var store = new Store("moviestack");
      this.movies = new Moviestack.Movies([], {localStorage: store});
      this.movies.fetch();

      // Uncomment to add some initial test-data
      // this.movies.create({title: "Movie 1"});
      // this.movies.create({title: "Movie 2"});
      // this.movies.create({title: "Movie 3"});
      // this.movies.create({title: "Movie 4"});

      this.headerView = new Moviestack.HeaderView({collection: this.movies});
      this.footerView = new Moviestack.FooterView({collection: this.movies});
      this.movieListView = new Moviestack.MovieListView({collection: this.movies});
    },

    // return this for chaining.
    render: function() {
      this.assign(this.headerView, "#header");
      this.assign(this.footerView, "#footer");
      this.assign(this.movieListView, "#main");
      return this;
    },

    assign : function (view, selector) {
      view.setElement(this.$(selector)).render();
    }

 });

  return Moviestack;

})(Moviestack || {}, $);
