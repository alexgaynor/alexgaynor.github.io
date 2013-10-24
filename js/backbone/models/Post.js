var app = app || {};

// Create a model for the posts
app.Post = Backbone.Model.extend({

  // Posts have a title and content, and here we set default values
  defaults: {
    title: 'New post',
    content: 'My content'
  }
});
