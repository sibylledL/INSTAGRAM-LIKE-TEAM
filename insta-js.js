$(function() {

  var closeBtn = $(".fermeFenetre");

  $(".js--img").click(function() {
    var $changeSrc = $(this).attr("src");
    var modal = $(this).data('modal');
    $("#testons-"+modal).attr("src", $changeSrc);
    $("#nouvelleFenetre-"+modal).css("display", "block");
  });


  closeBtn.click(function() {
    $(".modal").css("display", "none")
  })

  $(document).click(function(e) {
    if (e.target.className == "modal"){
      $(".modal").css("display", "none")
    }
  });
});

// Part Mike
$( document ).ready(function() {
  var count = 465;
  var t = 0;
  $('.number-likes').text(count + " j'aime");

  $(".btn-icon").click(function(){
    var aime = $(this).data("aime");
    if (t == 0) {
      let lol = count +1;
      $(".modal-icons-"+ aime).css("color", "#ed4956");
      $('.number-likes').text(lol + " j'aime");
      t = 1;
    }
    else {
      let lol = count;
      $(".modal-icons-"+ aime).css("color", "black");
      $('.number-likes').text(lol + " j'aime");
      t = 0;
    }
  })
});
