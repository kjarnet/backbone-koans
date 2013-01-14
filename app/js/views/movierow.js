/*global Mustache:false Backbone:false _:false*/

/**
 * View: MovieRowView
 * Responsible for rendering a single row in the movie-list, updating it's visibility based on 'visible' events,
 * and updating a movie's details based on user input.
 */
var Moviestack = (function(Moviestack) {
  'use strict';

  Moviestack.MovieRowView = Backbone.View.extend({

    // create a new list tag.
    tagName:  'li',
    className: 'movie-row',

    template: $('#item-template').html(),

    filter: null,

    // The DOM events specific to an item.
    events: {
      'click .toggle':	'togglecompleted',
      'click .destroy':	'clear'
    },

    // The MovieRowView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Movie** and a **MovieRowView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },

    // Re-render the titles of the movie item.
    render: function() {
      this.$el.html(
        Mustache.render(this.template, this.model.toJSON() )
      );
      this.$el.toggleClass( 'completed', this.model.get('watched') );

      this.$input = this.$('.edit');
      return this;
    },

    updateFilter : function (filter) {

    },

    isHidden : function (filter) {

    },

    // Toggle the "completed" state of the model.
    togglecompleted: function() {
      this.model.toggle();
    },

    // Switch this view into "editing" mode, displaying the input field.
    edit: function() {
      // TODO: Implement this.
    },

    // Close the "editing" mode, saving changes to the movie.
    close: function() {
      // TODO: Implement this.
    },

    // If you hit 'enter', we're through editing the item.
    updateOnEnter: function( e ) {
      // TODO: Implement this.
    },

    // Remove the item, destroy the model from *localStorage* and delete its view.
    clear: function() {
      this.model.destroy();
    }
  });

  return Moviestack;

})(Moviestack || {});
