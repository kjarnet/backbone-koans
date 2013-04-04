---
title: Presentation
description: "Backbone.js intro presentation"
layout: presentation
group: navigation
---



<section>
# backbone.js
Introduction
</section>

<section>
## TOC

* Motivation
* MVC intro/refresher
* Birdsview of Backbone
* Model
* View
* Collection
* (Router/History)
* Experiences
* Example
* Where to go from here

</section>

<section>
## Motivation
What Backbone is:

* A structure for your code based on the MVC pattern
* Small (1347 loc, well documented)
* [Open Source](http://backbonejs.org/docs/backbone.html)

What Backbone isn't:

* A monolithic MV\* framework (like Angular or Ember)
* Beginner friendly (leaves more responsibility with the developer than Ang/Emb)
* The holy grail (doesn't fit all problems (think mvc))

</section>

<section>
## MVC

![MVC diagram](http://upload.wikimedia.org/wikipedia/commons/f/fd/MVC-Process.png)
</section>

<section>
  <section>
## Birdsview of Backbone*

![Backbone diagram](/backbone_mvc.png)

([image link](http://i.imgur.com/gi01D5w.png))


\*) "Me as a bird"
  </section>

  <section>
## Birdsview of Backbone (cont.)
Typical init-function (run onDomReady):

<pre><code class="javascript">// Create a new instance of MovieCollection.
var movies = new MovieCollection();
// Populate the collection with data from the server.
movies.fetch();
// Instantiate a FilterModel.
var filter = new FilterModel();
// Instantiate a FilterView with the FilterModel as 
// backing model and assign it the #filter element to render in.
var filterView = new FilterView({model: filter, el: "#filter"});
// Instantiate a MovieListView with the MovieCollection as 
// backing collection and assign it the #list element to render in.
var movieListView = new MovieListView(
    {collection: movies, filter: filter, el: "#list"});
// Render the views.
filterView.render(); movieListView.render();</code></pre>


  </section>
</section>

<section>
## Backbone.Model

* Container for the data you want to present
* Operate on data with get() and set()
* Triggers change-events
* Sync with save(), fetch(), destroy()
* Triggers appropriate sync-events

</section>

<section>
## Backbone.Collection

* Ordered set of models
* Manipulate with add(), remove(), get(), set() ...
* Sync with sync(), reset()
* Triggers corresponding events
* Also relays any events fired by it's models (event bubbling)
* Lots of utility-functions: map(), reduce(), filter() ...

</section>

<section>
  <section>
## Backbone.View

* dom

  </section>
  <section>
## Backbone.View - communication between views

Decouple views by communicating via events:

<pre><code class="javascript">var SimpleModel = Backbone.Model.extend( {
    defaults: function () { return { "name": "Nothing here yet" }; }
});

var ManipulatorView = Backbone.View.extend({
    events: { "keyup": "updateModelName" },
    render: function () { return this; },
    updateModelName: function (e) { this.model.set("name", this.$el.val()); }
});

var PresenterView = Backbone.View.extend({
  initialize: function () { this.listenTo(this.model, "change:name", this.render); },
  render: function () { this.$el.html(this.model.get("name").length); return this; }
});

var model = new SimpleModel();
var mView = new ManipulatorView({ el: "#input", model: model });
var pView = new PresenterView({ el: "#output", model: model }).render();</code></pre>

([fiddle](http://jsfiddle.net/gelefisk/yxx6r/))
  </section>
</section>

<section>
## Router and History
</section>



