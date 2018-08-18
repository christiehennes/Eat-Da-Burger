let orm = require("../config/orm.js");

let burger = {
    selectAll: function(cb){
        orm.all("burgers", function(res){
            cb(res);
        });

    }, 
    insertOne: function(name, cb){
        orm.insert("burgers", name, function(res){
            cb(res);
        });

    },
    updateOne: function(name, cb){
        orm.update("burgers", name, function(res){
            cb(res);
        })

    }
}
module.exports = burger;