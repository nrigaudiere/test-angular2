(function(app) {
	app.homeTitle =
	ng.core.Component({
		selector: 'hometitle',
		template: '<h1>Banana Bread</h1><h2>Photographer</h2><h4>San Francisco - Paris - Barcelona</h4><span class="center-block"><a href="#contact" title="Contact Me"><button type="text">Contact Me</button></a></span>'
	})
	.Class({
		constructor: function() {}
	});

	app.blogPosts = ng.core
	.Component({
		selector : 'blogposts',
		template : "<div class='col-lg-12'><p *ngFor='#post of posts'>{{post}}</p></div>",
		providers: [ng.http.HTTP_PROVIDERS]
	})
	.Class({
		constructor: [ng.http.Http, function(http) {

			this.posts = "";
			this.http = http;
		}]
	});

	app.contactForm =
	ng.core.Component({
		selector : 'contactform',
		template : '<contact></contact>',
		directives: [app.ContactComponent]
	})
	.Class({
		constructor: function() {

		} 

	});


})(window.app || (window.app = {}));