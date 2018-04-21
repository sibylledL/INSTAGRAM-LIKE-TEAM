$(function() {


  var closeBtn = $(".fermeFenetre");

  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.logo1-img').css("width", "30%");
      $(".logo2-img").css("width", "100px");
      $(".recherche-input").css("height", "15px");
      $(".nav").css("padding-top", "0");
      $(".nav").css("max-height", "55px");
      $(".nav-ul").css("margin-left", "150px");
    } else {
      $('.logo1-img').css("width", "45%");
      $('.logo2-img').css("width", "150px");
      $(".recherche-input").css("height", "25px");
      $(".nav").css("padding-top", "0.25%");
      $(".nav").css("max-height", "100px");
      $(".nav-ul").css("margin-left", "0px");
    }
  })
  
  $(".button-icons").click(function(){
    $(".modal-icons-1").css("color",'red');
  });

  $(".js--img").click(function() {
    var $changeSrc = $(this).attr("src");
    var modal = $(this).data('modal');
    $("#testons-" + modal).attr("src", $changeSrc);
    $("#nouvelleFenetre-" + modal).css("display", "block");
  });

  closeBtn.click(function() {
    $(".modal").css("display", "none")
  })

  $(document).click(function(e) {
    if (e.target.className == "modal") {
      $(".modal").css("display", "none")
    }
  });
});
