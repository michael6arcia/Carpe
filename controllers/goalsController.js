var express = require("express");

var router = express.Router();
var goal = require("../models/goal.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/goals");
});

router.get("/goals", function(req, res) {
  // express callback response by calling goal.selectAllGoal
  goal.all(function(goalData) {
    // wrapper for orm.js that using MySQL query callback will return goal_data, render to index with handlebar
    res.render("index", { goal_data: goalData });
  });
});

// post route -> back to index
router.post("/goals/create", function(req, res) {
  // takes the request object using it as input for goal.addGoal
  goal.create(req.body.goal_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/goals/:id", function(req, res) {
  goal.update(req.params.id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    // Send back response and let page reload from .then in Ajax
    res.sendStatus(200);
  });
});

module.exports = router;
