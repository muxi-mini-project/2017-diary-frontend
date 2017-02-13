var registerModel = Backbone.Model.extend({
	urlRoot : '/api/v1.0/register',
	defaults: {
    "username":  "",
    "password":  "",
    "email": ""
  }
});

module.exports = registerModel