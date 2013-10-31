var app = app || {};

app.PostView = Backbone.View.extend({

	el: $('#main'),

	render: function () {
		var template = Handlebars.compile($('#post-view-template').html());
		console.log(template(this.model));
		this.$el.html(template(this.model.toJSON()));

	}

});