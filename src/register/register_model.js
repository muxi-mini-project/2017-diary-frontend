var registerModel = Backbone.Model.extend({
	urlRoot : '/api/v1.0/register/',
	defaults: {
    "username":  "",
    "password":  ""
  }
});

module.exports = registerModel