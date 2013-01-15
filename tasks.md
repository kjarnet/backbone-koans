---
layout: page
title: "Koans"
description: "The Koans for you to solve"
---
{% include JB/setup %}

Examples
========
These are some examples to look at if you're stuck with your tasks:

1. View: FooterView
   1. should render a footer with some stats
   2. should update when it's collection changes
   3. should set it's collection's filter on clicking a filter-link

Your Tasks
==========
Make all tests pass :)
You can see their status by opening test/index.html in your favourite browser.
The tests themselves are found in test/specs/,
and you shall fix them by filling out the empty methods in the "classes" in 
js/[collections|models|views]/.
Only the first few tests are activated,
so you have to activate the test you're fixing by removing ".skip".
The tasks are grouped into themes 
and I recommend you do them in the order they're written here.
(This means you don't necessarily complete all tests in one file 
before moving on to the next.)

Basics: Models, Collections and Views
-------------------------------------
1. Model: Movie
    1.  should be initialized with correct default values (5 min)  
        Solution: basic_defaults
    2. can toggle it's 'watched' status (5 min)  
        Solution: basic_toggle
2. Collection: Movies
    1. should return all watched movies. (5 min)  
        Solution: basic_wathed
    2. should return all unwatched movies. (5 min)  
        Solution: basic_unwathed
3. View: MovieRowView
    1. should render a simple movie (10 min)  
        Solution: basic_render

List Views
----------
4. View: MovieListView
    1. should render a simple list (15 min)  
        Solution: list_render
5. Put it all together:
    1. Uncomment the testdata in AppView.initialize.
    2. Browse to app/index.html and do any changes required to render a list of movies. (15 min)
    3. Remember to comment out the testdata again (in AppView.initialize).  
        Solution: list_finish

CRUD Views
----------
6. View: MovieRowView
    1. should update when it's model changes (15 min)  
        Solution: crud_onchange
    2. should toggle 'watched' status when clicking the checkbox (10 min)  
        Solution: crud_toggle
    3. should destroy it's model on clicking the delete-button (10 min)  
        Solution: crud_delete
    4. should add class 'editing' (indicating edit-mode) to it's element when double-clicked (15 min)  
        Solution: crud_edit
    5. should remove class 'editing' (indicating view-mode) and save it's model when enter is pressed (10 min)  
        Solution: crud_save
7. View: MovieListView
    1. should update when a model is added (5 min)  
        Solution: crud_onadd
    2. should update when a model is removed (5 min)  
        Solution: crud_onremove
8. View: HeaderView
    1. Toggle All Checkbox (all tests) (x min)  
        Solution: crud_toggleall
    2. Add New Movie Input-field (all tests) (x min)  
        Solution: crud_addnew
9. View: FooterView
    1. should destroy all watched movies on clicking the clear-watched link (x min)  
        Solution: crud_removewatched
10. Put it all together:
    1. Browse to app/index.html and do any changes required to make all CRUD features work. (30 min)  
        Solution: crud_finish

Filtering a List View
---------------------
11. Collection: Movies
    1. should trigger a 'filter' event when filter is updated (5 min)  
        Solution: filter_event
12. View: MovieListView
    1. should propagate 'filter' events from it's collection down to all models in the collection 
        (in the form of 'visible' events to prevent bubble-loop) (15 min)  
        Solution: filter_propagateevent
13. View: MovieRowView
    1. should toggle class 'hidden' on 'visible'-events on it's model, 
        depending on whether it is mathced by the passed filter (15 min)  
        Solution: filter_rowhide
14. View: MovieListView
    1. should hide unwatched movies when filter is set to 'watched' (5 min)  
        Solution: filter_listunwatchedhide
    2. should hide watched movies when filter is set to 'unwatched' (5 min)  
        Solution: filter_listwatchedhide

