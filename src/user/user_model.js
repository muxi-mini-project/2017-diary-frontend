var userModel = Backbone.Model.extend({
  urlRoot : '/user/',
  defaults : {
    "picurl":  "",
    "anickname": "",
	"diaNum": 0,
	"folNum": "",
	"foingNum": ""
  }
})

module.exports = userModel