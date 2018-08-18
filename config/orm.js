//Require the db connection
let connection = require("../config/connection.js");


let orm = {
    all: function(table, callback){

        let queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, results){
            if (err) {throw err;};
            callback(results);
        })

    },
    insert: function(table, name, callback){

        console.log("Name in orm: " + name);

        let queryString = "INSERT INTO " + table + " (name) VALUES " + "('" +name+ "')";
        connection.query(queryString, function(err, results){
            if (err) {throw err;};
            callback(results);
        })

    },
    update: function(table, name, callback){

    }
}
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;
  