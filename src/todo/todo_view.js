var Backbone = require("Backbone");
var _ = require('underscore');
var $  = require('jquery');

var Person = require("./todo.js");
var People = require("./todos.js");


var todo_view = Backbone.View.extend({
            el: $("body"),
            initialize: function () {
                //构造函数，实例化一个World集合类
                //并且以字典方式传入AppView的对象
                this.worlds = new People(null, { view : this })
            },
            events: {
                //事件绑定，绑定Dom中id为check的元素
                "click #check":  "checkIn",
            },
            checkIn: function () {
                var world_name = prompt("请问，您是哪星人?");
                if(world_name == "") world_name = '未知';
                var world = new Person({ name: world_name });
                this.worlds.add(world);
            },
            addOneWorld: function(model) {
                $("#world-list").append("<li>这里是来自 <b>" + model.get('name') + "</b> 星球的问候：hello world！</li>");
            }
        });

module.exports = todo_view;