/*global Backbone:false */
/**
 * Collection: Movies
 */
var Moviestack = (function(Moviestack) {
  'use strict';

  // Movie Collection
  // ---------------

  // The collection of movies is backed by *localStorage* instead of a remote server.
  Moviestack.Movies = Backbone.Collection.extend({

    // Reference to this collection's model constructor.
    model: Moviestack.Movie,

    localStorage: null,

    initialize: function (models, options){
      this.localStorage = options.localStorage;
    },

    // Filter down the list of all movie items that are watched.
    watched: function() {
      return this.filter(function( movie ) {
        return movie.get('watched');
      });
    },

    // Filter down the list to only movies that are still not watched.
    unwatched: function() {
      return this.without.apply( this, this.watched() );
    },

    // We keep the Movies in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    nextOrder: function() {
      if ( !this.length ) {
        return 1;
      }
      return this.last().get('order') + 1;
    },

    // Movies are sorted by their original insertion order.
    comparator: function( movie ) {
      return movie.get('order');
    },

    activeFilter: null,

    setFilter: function(value){
      this.activeFilter = value;
      // TODO: Implement this.
    },

    getFilter: function(){
      return this.activeFilter;
    }

  });

  return Moviestack;

}(Moviestack || {}));
