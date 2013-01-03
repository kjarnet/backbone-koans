---
layout: page
title: Backbone Koans
tagline: Yet another project with koans for learning Backbone.js
---
{% include JB/setup %}

This site is part of a workshop meant as a intro/tutorial in [Backbone.js](http://backbonejs.org/).
To get started clone the git-repo and switch to the workshop2 branch.

    $ git clone git://github.com/kjarnet/moviestack-frontend.github
    $ git checkout workshop2
    
and start with the tasks in [tasks.html](/moviestack-frontend/tasks.html).

## Resources
Some resources to get you started: 
* MVC: <http://addyosmani.com/blog/digesting-javascript-mvc-pattern-abuse-or-evolution/>
* Javascript: <http://bonsaiden.github.com/JavaScript-Garden/>
* Modules: <http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth>
* Backbone docs: <http://backbonejs.org/>
* Backbone tutorial (2 parts): <http://a-developer-life.blogspot.no/2011/04/backbone-part-1-intro-and-model.html>

There's also an internal site on Confluence -> Learn.JS -> Tema 4 - Backbone.
Please use this to share any resources you find useful.
    
## Blog posts

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## To-Do

* make each step a separate git-branch
* explain examples
* write a short intro-presentation
* upgrade to backbone 0.9.9

## Disclaimer
This is *one way* to use Bakcbone.js as basis for an MVC application,
and certainly not "the best way".
If you find any bugs or possible improvements
please contact me by gmail (kjarnet) or submit 
an [issue](https://github.com/kjarnet/moviestack-frontend/issues) 
or [pull-request](https://help.github.com/articles/using-pull-requests).
In this workshop I completely ignore Backbone's 
[Router](http://backbonejs.org/#Router) and [History](http://backbonejs.org/#History) components
which provide functionality to use bookmarkable links within a single-page app.

The app used in this workshop is a heavily modified version of [Addy Osmani](https://github.com/addyosmani)'s 
[example](http://todomvc.com/architecture-examples/backbone/) 
for the excellent [TodoMVC](http://todomvc.com/) project.

After I made this, I found Osmani also has made some backbone-koans
that you should probably [check out](https://github.com/addyosmani/backbone-koans-qunit).

Feel free to [fork this project on github](https://github.com/kjarnet/backbone-koans).

