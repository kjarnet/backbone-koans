/*global Mustache:false Backbone:false _:false*/

/**
 * View: MovieListView
 * Responsible for maintaining the list of movie-rows and propagating filter-events from the collection
 * to each movie (as 'visible' events).
 */
var Moviestack = (function(Moviestack, $, Backbone) {
  "use strict";

  // The Movie List
  // ---------------

  Moviestack.MovieListView = Backbone.View.extend({

    // At initialization we bind to the relevant events on the `Todos`
    // collection, when items are added or changed.
    initialize: function() {
      // TODO: Implement this.
    },

    render: function() {
      // TODO: Implement this.
      return this;
    },

    filter: null,

    // Add a single movie item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function( movie ) {
      // TODO: Implement this.
    },

    // Add all items in the collection at once.
    addAll: function() {
      // TODO: Implement this.
    },

    filterOne : function (movie) {
      // TODO: Implement this.
    },

    onChangeFilter : function (newFilter) {
      // TODO: Implement this.
    }


  });
  return Moviestack;
})(Moviestack || {}, $, Backbone);
