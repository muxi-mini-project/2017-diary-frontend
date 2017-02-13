var Backbone = require('Backbone')

var shareModel = Backbone.Model.extend({
	url: "/api/v1.0/edit_diary",
    defaults: {
    "body":  "",
    "picture":"",
  }
})
module.exports = shareModel