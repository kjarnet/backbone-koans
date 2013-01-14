/*global describe:false beforeEach:false it:false expect:false Moviestack:false _:false */
(function(Moviestack, describe, beforeEach, it, expect, _) {
  "use strict";

  describe('View: MovieRowView', function() {

    var title, movie, view;

    beforeEach(function(){
      title = "test title";
      movie = new Moviestack.Movie({title: title}, {localStorage: {}});
      view = new Moviestack.MovieRowView({model: movie}).render();
    });


    it('should render a simple movie', function() {
      var expectedOutput = '<div class="title">'+ title + '</div>';
      expect(view.$el.html()).to.contain(expectedOutput);
    });

    it("should update when it's model changes", function(){
      var newTitle = "new title";
      movie.set("title", newTitle);
      var expectedOutput = '<div class="title">'+ newTitle + '</div>';
      expect(view.$el.html()).to.contain(expectedOutput);
    });

    it("should toggle 'watched' status when clicking the checkbox.", function(){
      expect(movie.get("watched")).to.be.false;
      view.$(".toggle").trigger("click");
      expect(movie.get("watched")).to.be.true;
    });

    // Asynchronous test
    it.skip("should destroy it's model on clicking the delete-button.", function(done){
      movie.on("destroy", function(){done();});
      view.$(".destroy").trigger("click");
    });

    // Note: base.css has rules to hide child-elements with class 'view'
    // when the li-element has class 'editing'.
    it.skip("should add class 'editing' (indicating edit-mode) to it's element when double-clicked.", function(){
      expect(view.$el.hasClass("editing")).to.be.false;
      view.$(".title").trigger("dblclick");
      expect(view.$el.hasClass("editing")).to.be.true;
    });

    // Note: base.css has rules to hide child-elements with class 'edit'
    // when the li-element doesn't have the class 'editing'.
    it.skip("should remove class 'editing' (indicating view-mode) and save it's model when enter is pressed.", function(){
      var newTitle = "New Title";
      view.$(".title").trigger("dblclick");
      expect(view.$el.hasClass("editing")).to.be.true;
      view.$("input.edit").val(newTitle);
      var e = jQuery.Event("keypress", { which: Moviestack.ENTER_KEY });
      view.$(".edit").trigger(e);
      expect(view.$el.hasClass("editing")).to.be.false;
      expect(view.model.get("title")).to.equal(newTitle);
    });

    it.skip("should toggle class 'hidden' on 'visible'-events on it's model, depending on whether it is mathced by the passed filter.", function(){
      expect(view.$el.hasClass("hidden")).to.be.false;
      movie.trigger("visible", "watched");
      expect(view.$el.hasClass("hidden")).to.be.true;
      movie.trigger("visible", "unwatched");
      expect(view.$el.hasClass("hidden")).to.be.false;
    });

  });

})(Moviestack, describe, beforeEach, it, expect, _);

