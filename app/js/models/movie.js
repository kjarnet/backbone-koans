/*global Backbone:false */
/**
 * Model: Movie
 */
var Moviestack = (function(Moviestack) {
  'use strict';

  // Movie Model
  // ----------

  // Our basic **Movie** model has `title`, `order`, and `watched` attributes.
  Moviestack.Movie = Backbone.Model.extend({

    // Default attributes for the movie
    // and ensure that each movie created has `title` and `watched` keys.
    defaults: function(){
      return {
        title: '',
        watched: false
      }
    },

    initialize: function(attribs, options) {
      if(options.localStorage){
        this.localStorage = options.localStorage;
      }
    },

    // Toggle the `watched` state of this movie item.
    toggle: function() {
      this.save({
        watched: !this.get('watched')
      });
      return this;
    }

  });

  return Moviestack;

}(Moviestack || {}));
