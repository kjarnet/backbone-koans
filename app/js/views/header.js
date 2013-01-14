/*global Mustache:false Backbone:false _:false Store:false */

/**
 * View: HeaderView
 * Responsible for creating new movies from user's input and toggle all movies' 'watched' state at once.
 */
var Moviestack = (function(Moviestack, $) {
  'use strict';

  Moviestack.HeaderView = Backbone.View.extend({

    // Delegated events for creating new items
    events: {
    },

    // At initialization we bind to the relevant events on the Movies
    // collection, when items are added or changed. Kick things off by
    // loading any preexisting movies that might be saved in *localStorage*.
    initialize: function() {
      // TODO: Implement this.
    },

    // Re-rendering the App just means refreshing the statistics -- the rest
    // of the app doesn't change.
    render: function() {
      // TODO: Implement this.
      return this;
    },

    // Generate the attributes for a new Movie item.
    newAttributes: function() {
      // TODO: Implement this.
    },

    // If you hit return in the main input field, create new **Movie** model,
    // persisting it to *localStorage*.
    createOnEnter: function( e ) {
      // TODO: Implement this.
    },

    toggleAllWathced: function() {
      // TODO: Implement this.
    }
  });

  return Moviestack;

})(Moviestack || {}, $);
