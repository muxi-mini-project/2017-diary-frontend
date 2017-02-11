var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery'); 
var template =  require("./auth_index.html");
var login_view = require("../login/view.js");
var register_view = require("../register/register_view.js");
var auth_model = require("./auth_model.js");

var auth_view = Backbone.View.extend({
            el: $("#app"),
            template:_.template(template),
            initialize: function () {
                this.model = new auth_model({isLogin:true})
                this.login_view = new login_view()
                //this.register_view = new register_view()
                this.render(true);
            },
            // events:{
            //     "click .submitButton": "onSubmit"
            // },
            events:{
                "click .registerButton": "toRegister",
                "click .loginButton" : "toLogin"
            },
            toRegister: function(e){
                e.preventDefault()
               
                if (this.model.get("isLogin")) {
                    this.render(false)
                    this.model.set("isLogin", false)
                }
            },
            toLogin: function(e){
                e.preventDefault()
               
                if (!this.model.get("isLogin")) {
                    this.render(true)
                    this.model.set("isLogin", true)
                }
            },
            render: function(flag){
                this.$el.html(this.template());
                if (flag) 
                {
                    $(".inject").append(this.login_view.$el);
                    this.login_view.render();
                }else{
                    if (!this.register_view) {
                        this.register_view = new register_view()
                    }
                    $(".inject").append(this.register_view.$el);
                    this.register_view.render();
                }
                
                return this;
            }
        });

module.exports = auth_view