"use strict";

$("#search-btn").on("click", function () {
  var keyword = $("#search").val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + keyword + "&format=json&callback=?";

  $.ajax({
    url: url,
    type: "GET",
    async: false,
    dataType: "json",
    success: function success(data) {
      // console.log(data);
      // error message
      if (data[1] === 0) {
        showError('Please refresh the page');
      } else {
        //show the result
        for (var i = 0; i < data[1].length; i++) {
          $(".result-list").prepend("<div><div class='result'><a href=" + data[3][i] + "><h2>" + data[1][i] + "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
        }
      }
    }

  });
});