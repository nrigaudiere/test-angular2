(function(app) {
	app.homeTitle =
	ng.core.Component({
		selector: 'hometitle',
		template: '<h1>Banana Bread</h1><h2>Photographer</h2><h4>San Francisco - Paris - Barcelona</h4><span class="center-block"><a href="#contact" title="Contact Me"><button type="text">Contact Me</button></a></span>'
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


			this.posts = "";
			var options = new ng.http.BaseRequestOptions();
			var backend = new ng.http.ConnectionBackend();
			this.http = new ng.http.Http(backend, options);
		},

		ngOnInit: function() {
			this.posts = this.getPosts();
			console.log(this.posts)
		},

		getPosts: function(){

			console.log(ng);
			console.log(this.http);

        	return this.http.get('http://localhost:1337/work');
            // .map(response => response.json().data);
            

     //     var options = new ng.http.BaseRequestOptions();
     //     var reqM    = ng.http.RequestMethod.Get;
     //     var req = new Request(options.merge({
					// 	  method: reqM,
					// 	  url: 'http://localhost:1337/work'
					// }));


     //     console.log(req);
     //     // console.log('req.method:', RequestMethods[req.method]); 
    	}
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