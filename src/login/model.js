var loginModel = Backbone.Model.extend({
	urlRoot : '/api/v1.0/login',
	defaults: {
    "email":  "",
    "password":  ""
  }
});

module.exports = loginModel
