(function(app) {
  app.AppComponent =
	ng.core.Component({
	  selector: 'perave',
	  template: '<h1>My First Angular 2 App</h1>'
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