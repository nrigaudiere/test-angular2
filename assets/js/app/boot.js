(function(app) {
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.homeTitle);
  });
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.blogPosts);
  });
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.contactForm);
  });
})(window.app || (window.app = {}));