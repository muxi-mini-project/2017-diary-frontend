var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery'); 
var template =  require("./list.html");
var listView = require("../onediary/diary_view.js");

var list = require('./list_collection.js');

var list_view = Backbone.View.extend({
            el:$('.diaContent'),
			template:_.template(template),
	        initialize: function () {
                var listCollection = new list()
                this.collection = listCollection
                var that = this;
                this.collection.fetch().done(function(data){
                    that.render()
                })
                this.render()
            },
            render: function(){
                var that = this
                this.$el.html(this.template());
                this.collection.forEach(function(diary){
                    console.log(diary)
                    var diary_view = new listView({
                        model: diary
                    })
                    this.$el.append(diary_view.render().el)
                },that)
                return this;
            }
})
module.exports = list_view