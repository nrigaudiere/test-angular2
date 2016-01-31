(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.homeTitle);
  });
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.blogPosts);
  });
})(window.app || (window.app = {}));