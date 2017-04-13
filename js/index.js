"use strict";

$(document).ready(function(){
//hide clear button 
 $("#clear-btn").hide();

//click search button 
$("#search-btn").on("click", function(){
  var keyword = $("#search").val();
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+ keyword +"&format=json&callback=?";
  
 //fetch data 
  $.ajax({
    url: url,
    type: "GET",
    async: false,
    dataType: "json",
    success: function(data){
      // console.log(data);
      // error message
      if (data[1] === 0) {
     	showError('Please refresh the page');
     } else {
      //show the result 
      for(var i = 0; i < data[1].length; i++) {
        $(".result-list").prepend("<div><div class='result'><a href="+data[3][i]+"><h2>" + data[1][i]+ "</h2>" + "<p>" + data[2][i] + "</p></a></div></div>");
      }
      }
    }
  })
  $("#search-btn").hide();
  $("#clear-btn").show();
});

// enter button effect 
$(".container").keypress(function(e){
  var key = e.which;
  if(key == 13) // enter key code
    {
      $("#search-btn").click();
      return false;
    }
});

// clear words in the search input 
  
$("#clear-btn").on("click",function(){
  $("#search").val("");
  $("#clear-btn").hide();
  $("#search-btn").show();
})
 });