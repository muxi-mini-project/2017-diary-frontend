var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery'); 
var template =  require("./index.html");
var loginModel = require("./model.js");
var cookie = require("../cookie.js");
var login_view = Backbone.View.extend({
            template:_.template(template),
            initialize: function () {
                this.model = new loginModel({})
                this.listenTo(this.model, "sync", this.onLogin)
                this.render();
            },
            events:{
                "click .submitButton": "onSubmit"
            },
            onLogin: function(){
                location.href = "/"
            },

            check:function(){
                // check
                if ( $(".usernameInput").val() == "" || $(".passwordInput").val() == "") {
                    alert("请输入完整邮箱或密码");
                    return false
                }
                else{
                    return true
                }
            },
            onSubmit: function(e){
                e.preventDefault();
                if (this.check()) {
                    this.model.set("email",$(".usernameInput").val())
                    this.model.set("password",$(".passwordInput").val())

                    // start loading animation

                    this.model.save().done(function(res){
                        console.log(res)
                        cookie.setCookie("token", res.token, 30)
                    })
                }               
            },
            render: function(){
                this.$el.html(this.template());
                return this;
            }
        });

module.exports = login_view