$(function() {


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
var t=0
$(".btn1").click(function(){
if(t == 0){
  $(this).html("abonnée");
  $('.modal-abonner').html("abonnée");
  t = 1
}else{
  $(this).html("S'abonner");
  $('.modal-abonner').html("S'abonner");
  t=0
}
});

var i = 0
$('.modal-abonner').click(function(){
  if(i == 0){
    $('.modal-abonner').html("abonnée");
    $('.btn1').html("abonnée");
    i = 1
  }else{
    $('.modal-abonner').html("S'abonner");
    $('.btn1').html("S'abonner");
    i=0
  }
});



var closeBtn = $(".fermeFenetre");

$(".js--img").click(function() {
  var $changeSrc = $(this).attr("src");
  var modal = $(this).data('modal');
  $("#testons-"+modal).attr("src", $changeSrc);
  $("#nouvelleFenetre-"+modal).css("display", "block");


  if($("#nouvelleFenetre-"+modal).css("display", "block")){

                $('.list-emoji'+modal).addClass('.list-emoji');
                $('.emoji').css('display','inline');
                //var emoji = document.querySelector('.emoji');
                //var listEmoji = document.querySelector('.list-emoji');
                var count = 1;
                $('.list-emoji'+modal).css('display','none');

                $('.emoji'+modal).click(function(){
                //1 - show emoji list on click emoji icone
                  if(count == 1){

                        $('.list-emoji'+modal).css('display','inline');
                        $('.list-emoji').css('display','block');

                        $('.list-emoji'+modal).find('span').each(function(){
                            $(this).click(function(){
                            var oldValue = $('.newComment-'+modal).val();
                            var newValue = oldValue + $(this).html();
                            $('.newComment-'+modal).val(newValue);
                            });
                        });


                        count = 0;

                  }else if(count==0){
                        $('.list-emoji'+modal).css('display','none');
                        count = 1;
                  }

                });


                $('.submit'+modal).click(function(){



                  var col1 = "Rodolphe";
                  var col2 = $('.newComment-'+modal).val();
                  var tr = "<tr class='row'><td class='col-1'>"+col1+"</td><td class='col-2'>"+col2+"</tr>";

                  $('.table'+modal).append(tr);
                  $('.newComment-'+modal).val(null);

                  /*setTimeout(function(){
                    row.classList.remove('blue');}, 1000);*/

                    var tableau = $('.tableau');
                    var h = tableau.get(0).scrollHeight;
                    tableau.animate({scrollTop:h}, 300);




                });



    }else{
                $('.list-emoji'+modal).css('display','none');
    }




});



closeBtn.click(function() {
  $(".modal").css("display", "none")
  $("")
})

$(document).click(function(e) {
  if (e.target.className == "modal"){
    $(".modal").css("display", "none")
  }
});


// Part Mike
$( document ).ready(function() {


  var t = 0;
  var aime = $(this).data("aime");

  $(".btn-icon").click(function(){
    var aime = $(this).data("aime");
    if (t == 0) {
     let lol = parseInt($('.num'+aime).text())+1;
      $(".modal-icons-"+ aime).css("color", "#ed4956");
      $('.num'+aime).text(lol);
      t = 1;
    }
    else {
      let lol = parseInt($('.num'+aime).text()-1);
      $(".modal-icons-"+ aime).css("color", "black");
      $('.num'+aime).text(lol);
      t = 0;
    }
  })
});



});



//COMMENTAIRES


var tableau = document.querySelector(".tableau");
var newComment = document.querySelector(".newComment");
var submit = document.querySelector(".submit");
var table = document.querySelector("table");
