var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery'); 
var template =  require("./user.html");
var userModel = require("./user_model.js");

var user_view = Backbone.View.extend({
			el:$('.user'),
			template:_.template(template),
	        initialize: function () {
                this.model = new userModel()
                var that = this;
                this.model.fetch().done(function(data){
                	that.render();
                });
            },
            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
})
module.exports = user_view