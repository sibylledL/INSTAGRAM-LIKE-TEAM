$(function() {


  var closeBtn = $(".fermeFenetre");

<<<<<<< HEAD
  $(".js--img").click(function() {
=======
  $("#imgProfil-1").click(function () {
>>>>>>> ad025ca8349cd0716af6b0436e8c9a0d927f2d03
    var $changeSrc = $(this).attr("src");
    var modal = $(this).data('modal');
    $("#testons-"+modal).attr("src", $changeSrc);
    $("#nouvelleFenetre-"+modal).css("display", "block");
  });

<<<<<<< HEAD
=======
  $("#imgProfil-2").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-2").attr("src", $changeSrc);
    $("#nouvelleFenetre-2").css("display", "block");
  });

  $("#imgProfil-3").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-3").attr("src", $changeSrc);
    $("#nouvelleFenetre-3").css("display", "block");

  });

  $("#imgProfil-4").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-4").attr("src", $changeSrc);
    $("#nouvelleFenetre-4").css("display", "block");

  });

  $("#imgProfil-5").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-5").attr("src", $changeSrc);
    $("#nouvelleFenetre-5").css("display", "block");
  });

  $("#imgProfil-6").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-6").attr("src", $changeSrc);
    $("#nouvelleFenetre-6").css("display", "block");
  });

  $("#imgProfil-7").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-7").attr("src", $changeSrc);
    $("#nouvelleFenetre-7").css("display", "block");
  });

  $("#imgProfil-8").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-8").attr("src", $changeSrc);
    $("#nouvelleFenetre-8").css("display", "block");
  });

  $("#imgProfil-9").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-9").attr("src", $changeSrc);
    $("#nouvelleFenetre-9").css("display", "block");
  });

  $("#imgProfil-10").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-10").attr("src", $changeSrc);
    $("#nouvelleFenetre-10").css("display", "block");
  });

  $("#imgProfil-11").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-11").attr("src", $changeSrc);
    $("#nouvelleFenetre-11").css("display", "block");
  });

  $("#imgProfil-12").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-12").attr("src", $changeSrc);
    $("#nouvelleFenetre-12").css("display", "block");
  });

  $("#imgProfil-13").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-13").attr("src", $changeSrc);
    $("#nouvelleFenetre-13").css("display", "block");
  });

  $("#imgProfil-14").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-14").attr("src", $changeSrc);
    $("#nouvelleFenetre-14").css("display", "block");
  });

  $("#imgProfil-15").click(function() {
    var $changeSrc = $(this).attr("src");
    $("#testons-15").attr("src", $changeSrc);
    $("#nouvelleFenetre-15").css("display", "block");
  });


>>>>>>> ad025ca8349cd0716af6b0436e8c9a0d927f2d03
  closeBtn.click(function() {
    $(".modal").css("display", "none")
  })

  $(document).click(function(e) {
    if (e.target.className == "modal"){
      $(".modal").css("display", "none")
    }
  });
});
