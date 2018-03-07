//Run some jquery
$(document).ready(function(){
  $("#search").click(function(){
    //Gets Search input
    var searchTerm = $("#searchTerm").val();
  //Api url with searchTerm
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?";
 //ajax call
  $.ajax({
    type:"GET",
    url:url,
    async:false,
    dataType: "json",
    success: function(data){
     //console.log(data[1][0]);
      // console.log(data[2])[0];
       //console.log(data[3])[0];
      // first empty this
      $("#output").html("");
      for(var i=0;i<data[1].length;i++){
      $("#output").prepend("<li><a href="+data[3][i]+">"+(data[1][i])+"</a><p>"+data[2][i]+"</p></li>");
    }
      //to empty out the search box after search
      $("#searchTerm").val('');
    },
    error:function(errorMessage){
      alert("error");
    }
   });
  });

    $("#searchTerm").keyup(function(e){
      if (e.which == 13){
        $("#search").click();
      }
      });
});
