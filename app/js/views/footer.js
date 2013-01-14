/*global Mustache:false Backbone:false _:false Store:false */

/**
 * View: FooterView
 * Responsible for rendering the statistics, setting the filter and clearing completed movies.
 */
var Moviestack = (function(Moviestack, $) {
  "use strict";

  Moviestack.FooterView = Backbone.View.extend({

    // Our template for the line of statistics at the bottom of the app.
    template: $('#stats-template').html(),

    events: {
      "click #clear-watched": "clearCompleted",
      "click #filter-all": function(e){this.setFilter(null, e);},
      "click #filter-watched": function(e){this.setFilter("watched", e);},
      "click #filter-unwatched": function(e){this.setFilter("unwatched", e);}
    },

    initialize: function() {
      this.listenTo(this.collection, "all", this.render);
    },

    render: function() {
      var wathced = this.collection.watched().length;
      var unwatched = this.collection.unwatched().length;

      if ( this.collection.length ) {
        this.$el.show();

        this.$el.html(
          Mustache.render(this.template,{
            watched: wathced,
            unwatched: unwatched,
            plural: (unwatched > 1)
          }));

      } else {
        this.$el.hide();
      }

      this.$("#filters li a").
        removeClass("selected").
        filter("#filter-"+(this.collection.getFilter() || "all")).
        addClass("selected");
      return this;
    },

    setFilter: function(filter, e){
      this.collection.setFilter(filter);
      e.preventDefault();
    },

    // Clear all completed movie items, destroying their models.
    clearCompleted: function(e) {
      _(this.collection.watched()).each(function( movie ) {
        movie.destroy();
      });
      e.preventDefault();
    }

  });

  return Moviestack;

})(Moviestack || {}, $);
