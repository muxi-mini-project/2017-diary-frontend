var Backbone = require("Backbone");

var People = Backbone.Collection.extend({
 	initialize: function (models, options) {
        this.bind("add", options.view.addOneWorld);
	}
});

module.exports = People;