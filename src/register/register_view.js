var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery'); 
var template =  require("./register_index.html");
var registerModel = require("./register_model.js");


var register_view = Backbone.View.extend({
            template:_.template(template),
            initialize: function () {
                this.model = new registerModel()
                this.listenTo(this.model, "sync", this.OnRegister)
                this.render();
            },
            events:{
                "click .submitButton": "onSubmit"
            },
            check:function(){
                // check
                if ( $(".emailInput").val() == "" || $(".usernameInput").val() == "" || $(".passwordInput").val() == "") {
                    alert("请输入所有信息");
                    return false
                }
                else{
                    return true
                }
            },
            onSubmit: function(e){
                e.preventDefault();
                if (this.check()) {
                    this.model.set("username",$(".usernameInput").val())
                    this.model.set("password",$(".passwordInput").val())
                    this.model.set("email",$(".emailInput").val())
                    // start loading animation

                    //get admin token
                    var token = $(".adminToken").text()
                    this.model.save({},{ 
                        headers: {'Authorization' :'Basic '+token} 
                    })
                    .done(function(){
                        alert("register success")
                    })
                }               
            },
            render: function(){
                this.$el.html(this.template());
                return this;
            }
        })
module.exports = register_view