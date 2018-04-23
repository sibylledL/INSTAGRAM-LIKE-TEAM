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
    $("")
  })

  $(document).click(function(e) {
    if (e.target.className == "modal") {
      $(".modal").css("display", "none")
    }
  });
});

//COMMENTAIRES


var tableau = document.querySelector(".tableau");
var newComment = document.querySelector(".newComment");
var submit = document.querySelector(".submit");
var table = document.querySelector("table");

/*post comment*/
submit.addEventListener('click',postComment);

function postComment(){

var row = table.insertRow(table.lenght);
row.classList.add("row");

var cell1 = row.insertCell(0);
cell1.classList.add("col-1");
var cell2 = row.insertCell(1);
cell2.classList.add("col-2");
cell1.innerHTML = "Rodolphe";
cell2.innerHTML = newComment.value;
/*row.transition="background-color 2s";*/
row.classList.add('blue');

setTimeout(function(){
  row.classList.remove('blue');}, 1000
);


newComment.value=null;


function updateScroll(){
    tableau.scrollTop = tableau.scrollHeight;
    //tableau.scrollTop=tableau[0];
}
setTimeout(updateScroll,300);

}


//EMOJI
//schow and insert emoji ->>>>>
var emoji = document.querySelector('.emoji');
var listEmoji = document.querySelector('.list-emoji');
var count = 1;
emoji.addEventListener('click',showEmoji);

//1 - show emoji list on click emoji icone
function showEmoji(){
  if(count == 1){
  listEmoji.style.display="inline";
  count = 0;
}else if(count==0){
  listEmoji.style.display="none";
  count = 1;
}

}
//2- insert emoji dans l'input
var icone = Array.from(document.querySelectorAll('.icone'));
icone.forEach(x => x.addEventListener("click",selectEmoji))
function selectEmoji(){
newComment.value += this.innerHTML;
}
