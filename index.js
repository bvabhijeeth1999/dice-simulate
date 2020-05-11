document.querySelector(".b1").addEventListener("click",function(){
  $(".b1").hide();
  var audio = new Audio("sounds/dice-sound.mp3");
  audio.play();
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomNumber2 = Math.floor(Math.random()*6)+1;
  document.querySelector(".img1").setAttribute("src" , "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src" , "images/dice" + randomNumber2 + ".png");
  var total = randomNumber1+randomNumber2;
  setTimeout(function(){
    switch(total){
      case 2:
      var audio = new Audio("sounds/2.mp3");
      audio.play();
      break;
      case 3:
      var audio = new Audio("sounds/3.mp3");
      audio.play();
      break;
      case 4:
      var audio = new Audio("sounds/4.mp3");
      audio.play();
      break;
      case 5:
      var audio = new Audio("sounds/5.mp3");
      audio.play();
      break;
      case 6:
      var audio = new Audio("sounds/6.mp3");
      audio.play();
      break;
      case 7:
      var audio = new Audio("sounds/7.mp3");
      audio.play();
      break;
      case 8:
      var audio = new Audio("sounds/8.mp3");
      audio.play();
      break;
      case 9:
      var audio = new Audio("sounds/9.mp3");
      audio.play();
      break;
      case 10:
      var audio = new Audio("sounds/10.mp3");
      audio.play();
      break;
      case 11:
      var audio = new Audio("sounds/11.mp3");
      audio.play();
      break;
      case 12:
      var audio = new Audio("sounds/12.mp3");
      audio.play();
      break;
      default:
        console.log(total);
      }
  }, 400);
  document.querySelector(".total").textContent = "Total is : " + total;
  setTimeout(function(){
    $(".b1").show();
  }, 800);
});
