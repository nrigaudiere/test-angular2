(function(app) {
	app.homeTitle =
	ng.core.Component({
		selector: 'hometitle',
		template: '<h1>Banana Bread</h1><h2>Photographer</h2><h4>San Francisco - Paris - Barcelona</h4><span class="center-block"><a href="#contact" title="Contact Me"><button type="text">Contact Me</button></a></span>'
	})
	.Class({
		constructor: function() {}
	});


	app.works = ng.core
	.Component({
		selector : 'works',
		templateUrl : 'templates/works.component.html',
		providers: [ng.http.HTTP_PROVIDERS]
	})
	.Class({
		constructor: [ng.http.Http, function(http) {
			this.http = http;
		}],

		ngOnInit: function() {

			this.getWorks().subscribe(
				function(result){
					this.works = result;

					this.numberOfWorks = this.works.length;

				}.bind(this)
			);

		},

		getWorks: function() {

        	return this.http.get('http://localhost:1337/work').map(function (res) {
              return res.json();
          });
            
    	}
	});



	app.testimonials = ng.core
	.Component({
		selector : 'testimonials',
		templateUrl : 'templates/testimonials.component.html',
		providers: [ng.http.HTTP_PROVIDERS]
	})
	.Class({
		constructor: [ng.http.Http, function(http) {
			this.http = http;
		}],

		ngOnInit: function() {

			this.getTestimonials().subscribe(
				function(result){
					this.testimonials = result;

					this.numberOfTestimonials = this.testimonials.length;

				}.bind(this)
			);

		},

		getTestimonials: function() {

        	return this.http.get('http://localhost:1337/testimonials').map(function (res) {
              return res.json();
          });
            
    	}
	});


	app.blogPosts = ng.core
	.Component({
		selector : 'blogposts',
		templateUrl : 'templates/blogposts.component.html',
		providers: [ng.http.HTTP_PROVIDERS]
	})
	.Class({
		constructor: [ng.http.Http, function(http) {
			this.http = http;
		}],

		ngOnInit: function() {

			this.getPosts().subscribe(
				function(result){
					this.posts = result;
					this.posts.pop();

					for(i=0; i < this.posts.length; i++) {

						var date   = new Date(this.posts[i].createdAt),
					    	locale = "en-uk",
					    	day    =  date.getDate(),
					    	month  = date.toLocaleString(locale, { month: "long" }),
					    	year   = date.getFullYear();


						this.posts[i].createdAt = month + ' ' + day +', ' + year;

					}

					this.numberOfPosts = this.posts.length;

				}.bind(this)
			);

		},

		getPosts: function() {

        	return this.http.get('http://localhost:1337/blogPosts').map(function (res) {
              return res.json();
          });
            
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