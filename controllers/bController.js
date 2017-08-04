var express = require("express");

var router = express.Router();

var db = require("../models");

router.get("/", function(req, res){
    db.Burger.findAll({}).then(function(data){
        var hbsObject = {burgers:data};
        res.render("index", hbsObject);
    });
});

router.post("/", function(req, res){
    if(!req.body.burger || !req.body.customer){
        console.log("order was not properly completed");
        res.redirect("/")
    }
    else{
        db.Burger.create({
            "burger": req.body.burger,
            "customer": req.body.customer
        }).then( function(dbBurger)
        {
            res.redirect("/");
        });
    }
});

router.put("/:id", function(req, res){
    db.Burger.update({
        devoured: req.body.devoured},
        {
            where: {id: req.params.id}
      }).then(function(dbBurger) {
        res.redirect("/");
      });
});

router.delete("/:id", function(req, res){
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.redirect("/");
    });
});


module.exports = router;

