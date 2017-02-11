var loginModel = Backbone.Model.extend({
	urlRoot : '/api/v1.0/login/',
	defaults: {
    "username":  "",
    "password":  ""
  }
});

module.exports = loginModel

