(function(app) {

	app.ContactComponent = ng.core
	.Component({
		selector: 'contact',
		templateUrl : 'templates/contactform.component.html'
	})
	.Class({
		constructor: function() {
			this.model = new app.Contact('Name', 'Email', 'Message');
			this.submitted = false;
		},
		onSubmit: function() {
			this.submitted = true;
		}
	});
})(window.app || (window.app = {}));