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
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.works);
  });
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.testimonials);
  });
})(window.app || (window.app = {}));