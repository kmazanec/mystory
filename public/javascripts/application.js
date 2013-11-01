$(document).ready(function(){
  $("#draggable").draggable();
  $("#prod").on('click', function(event){

  });
  $("#blog").on('mouseover', function(event){
    var half_width = $("#blog_tag").width()/2;
    $("#blog_tag").css({'top': event.pageY+'px',
                    'left': (event.pageX-half_width)+'px'});
    $("#blog_tag").show();
  });
  $("#blog").on('mouseout', function(event){
    $("#blog_tag").hide();
  });

  $("#github").on('mouseover', function(event){
    var half_width = $("#github_tag").width()/2;
    $("#github_tag").css({'top': event.pageY+'px',
                    'left': (event.pageX-half_width)+'px'});
    $("#github_tag").show();
  });
  $("#github").on('mouseout', function(event){
    $("#github_tag").hide();
  });

  $("#linkedin").on('mouseover', function(event){
    var half_width = $("#linkedin_tag").width()/2;
    $("#linkedin_tag").css({'top': event.pageY+'px',
                    'left': (event.pageX-half_width)+'px'});
    $("#linkedin_tag").show();
  });
  $("#linkedin").on('mouseout', function(event){
    $("#linkedin_tag").hide();
  });

  $("#twitter").on('mouseover', function(event){
    var half_width = $("#twitter_tag").width()/2;
    $("#twitter_tag").css({'top': event.pageY+'px',
                    'left': (event.pageX-half_width)+'px'});
    $("#twitter_tag").show();
  });
  $("#twitter").on('mouseout', function(event){
    $("#twitter_tag").hide();
  });
});