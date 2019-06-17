$(document).ready(function () {

  $(".complete-btn").on("click", function (event) {
    event.preventDefault();

    var goal_id = $(this).children(".goal_id").val();
    console.log(goal_id);
    $.ajax({
      method: "PUT",
      url: "/goals/" + goal_id
    }).then(function (data) {
      // reload page to display completed goals in proper column
      location.reload();
    });

  });

  $(".delete-btn").on("click", function () {
    alert("del-btn working");
  });

});
