var Backbone = require('Backbone')

var diary = require('../onediary/diary_model.js')

var list = Backbone.Collection.extend({
	url: '/api/v1.0/posts',
	model: diary
})

module.exports = list