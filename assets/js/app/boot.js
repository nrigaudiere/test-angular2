(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent);
  });
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.blogPosts);
  });
})(window.app || (window.app = {}));