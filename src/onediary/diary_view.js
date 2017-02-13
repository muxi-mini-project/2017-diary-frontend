var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery'); 
var template =  require("./diary_index.html");
var diaryModel = require("./diary_model.js");

var diary_view = Backbone.View.extend({
            className:'.diaContent',
            template:_.template(template),
            initialize: function () {                
                this.render();
            },
            render: function(){
                this.$el.html(this.template(this.model.toJSON()));
                return this;
            }
        });

module.exports = diary_view