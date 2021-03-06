/*global $:false Mustache:false Backbone:false _:false*/

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
      'dblclick .title': 'edit',
      'click .destroy':	'clear',
      'keypress .edit':	'updateOnEnter',
      'blur .edit':		'close'
    },

    // The MovieRowView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Movie** and a **MovieRowView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
      this.listenTo(this.model, 'destroy', this.remove);
      this.listenTo(this.model, 'visible', this.updateFilter);
    },

    // Re-render the titles of the movie item.
    render: function() {
      this.$el.html(
        Mustache.render(this.template, this.model.toJSON() )
      );
      this.$el.toggleClass( 'completed', this.model.get('watched') );

      this.updateFilter(this.filter);
      this.$input = this.$('.edit');
      return this;
    },

    updateFilter : function (filter) {
      this.filter = filter;
      this.$el.toggleClass( 'hidden',  this.isHidden(filter));
    },

    isHidden : function (filter) {
      var isCompleted = this.model.get('watched');
      return ( // hidden cases only
        (!isCompleted && filter === 'watched') ||
          (isCompleted && filter === 'unwatched')
        );
    },

    // Toggle the "completed" state of the model.
    togglecompleted: function() {
      this.model.toggle();
    },

    // Switch this view into "editing" mode, displaying the input field.
    edit: function() {
      this.$el.addClass('editing');
      this.$input.focus();
    },

    // Close the "editing" mode, saving changes to the movie.
    close: function() {
      var value = this.$input.val().trim();

      if ( value ) {
        this.model.save({ title: value });
      } else {
        this.clear();
      }

      this.$el.removeClass('editing');
    },

    // If you hit 'enter', we're through editing the item.
    updateOnEnter: function( e ) {
      if ( e.which === Moviestack.ENTER_KEY ) {
        this.close();
      }
    },

    // Remove the item, destroy the model from *localStorage* and delete its view.
    clear: function() {
      this.model.destroy();
    }
  });

  return Moviestack;

})(Moviestack || {});
