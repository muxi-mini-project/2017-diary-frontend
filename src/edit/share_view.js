var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery'); 
var template =  require("./share.html");
var shareModel = require("./share_model.js");
var cookie = require("../cookie.js");

var share_view = Backbone.View.extend({
            el:'.editDiary',
            template:_.template(template),
            initialize: function () { 
                this.model = new shareModel()               
                this.render();
            },
            events:{
                "click .confirm": "onConfirm"
            },
            onConfirm: function(){
                var token = cookie.getCookie("token")
                    this.model.set("body",$(".edit").val())
                    this.model.set("picture",$(".file").val())
                    this.model.save({},{ 
                        headers: {'Authorization' :'Basic '+window.btoa(token+":")} 
                    }).done(function(){
                        location.href = "/"
                    })
            },
            render: function(){
                this.$el.html(this.template());
                return this;
            }
        });

module.exports = share_view