(function(app) {
  app.homeTitle =
	ng.core.Component({
	  selector: 'homeTitle',
	  template: '<h1>Banana Bread</h1><h2>Photographer</h2><h3>San Francisco - Paris - Barcelona</h3>'
	})
	.Class({
	  constructor: function() {}
	});

  app.blogPosts = 
	ng.core.Component({
		selector : 'blogposts',
		template : "<div class='col-lg-12'><p *ngFor='#post of posts'>{{post}}</p></div>"
	})
	.Class({
		constructor: function() {
			this.posts = ["Post1", "Post2", "Post3", "Post4"];
		}
	});
})(window.app || (window.app = {}));