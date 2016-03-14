$(document).ready(function() {

  //Add avatars to page for each person in database.
  $.each(profiles, function(i, val) {
    console.log(i);
    $(".container").append("<img src=" + val.img +  " class=\"prof-pic\" id="+i+"></img>");
  });

  //Add tool-tip of person's name on hover.
  $(".prof-pic").mouseover(function(event) {
    $(this).attr("title", profiles[this.id].name);
  });

  //Shrink last pane for sliding effect with relative positioning.
  $(".prof-pic").click(function() {
    $("#pane3").animate({'width': 0, 'opacity':0, 'padding': 0}, 500);
    $("#pane1").animate({right: '0%'});
    $("#pane2").animate({right: '0%'});
    $("#pane2").attr("id", "pane3");
    $("#pane1").attr("id", "pane2");
    var img = profiles[this.id].img;
    var desc = profiles[this.id].desc;
    var nextPane = "<div class=\"pane\" id=\"pane1\"><img class=\"activeimg\" src="+img+"></img><br>" + profiles[this.id].name + "<p class=\"desc\">" + desc + "</p> </div>";
    $(nextPane).hide().prependTo(".active").fadeIn(100).animate({left: '0%'});
  });


});