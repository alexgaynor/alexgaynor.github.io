// This is included at the beginning of the backbone files to ensure we have an app object as each file is loaded and minimize potential errors
var app = app || {};

$(function() {

  // create the app's router from the Router construct
  app.router = new app.Router();
  // alert('before history start');
  // start our backbone history
  Backbone.history.start();
  // alert('after history start');
  // Shows how you can capture the event when a URL change occurs
  Backbone.history.on('route', function() {
    // This is how to retrieve the request URI / fragment
    // alert('route changed alert');
    var fragment = Backbone.history.getFragment();
    // console.log(fragment);
  })
});
