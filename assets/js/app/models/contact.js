(function(app) {
	app.Contact = Contact;

	function Contact(name, email, message) {
		this.name = name;
		this.email = email;
		this.message = message;
	}

})(window.app || (window.app = {}));