let express = require("express");
let router = express.Router();

let burger = require("../models/burger.js")

router.get("/", function(req, res) {

    burger.selectAll(function(data) {
      var burgerObject = {
        burgers: data
      };
      console.log(burgerObject);
      res.render("index", burgerObject);
    });

});

router.post("/api/burger", function(req, res){
    burger.insertOne(req.body.name, function(data){
        res.json({ id: data.insertId });
    })
})





// Export routes for server.js to use.
module.exports = router;
