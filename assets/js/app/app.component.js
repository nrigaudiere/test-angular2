(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'perave',
      template: '<h1>My First Angular 2 App</h1>'
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));