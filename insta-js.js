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
