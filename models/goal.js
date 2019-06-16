var orm = require("../config/orm.js");

var goal = {
  all: function(cb) {
    orm.all("goals", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("goals", [
      "goal_name", "completed"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("goals", {
      completed: true
    }, condition, cb);
  }
};

module.exports = goal;
