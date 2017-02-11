var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery'); 
var template =  require("./register_index.html");
var registerModel = require("./register_model.js");


var register_view = Backbone.View.extend({
            template:_.template(template),
            initialize: function () {
                this.model = new registerModel({})
                this.listenTo(this.model, "sync", this.OnRegister)
                this.render();
            },
            events:{
                "click .submitButton": "onSubmit"
            },
            OnRegister: function(){
                location.href = "/login"
                alert("已发送激活邮件到注册邮箱")
            },

            check:function(){
                // check
                if ( $(".usernameInput").val() == "" || $(".passwordInput").val() == "") {
                    alert("请输入完整邮箱或密码");
                    return false
                }
                else
                    return true
            },
            onSubmit: function(e){
                e.preventDefault();
                if (this.check()) {
                    this.model.set("username",$(".usernameInput").val())
                    this.model.set("password",$(".passwordInput").val())

                    // start loading animation

                    this.model.save()
                }               
            },
            render: function(){
                this.$el.html(this.template());
                return this;
            }
        })
module.exports = register_view