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
      this.listenTo(this.collection, "reset", this.render);
      this.listenTo(this.collection, "add", this.addOne);
    },

    render: function() {
      this.$("#movie-list").html('');
      this.addAll();
      return this;
    },

    filter: null,

    // Add a single movie item to the list by creating a view for it, and
    // appending its element to the `<ul>`.
    addOne: function( movie ) {
      var view = new Moviestack.MovieRowView({ model: movie });
      this.$("#movie-list").append( view.render().el );
    },

    // Add all items in the collection at once.
    addAll: function() {
      this.collection.each(this.addOne, this);
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
