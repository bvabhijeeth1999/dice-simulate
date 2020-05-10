document.querySelector(".b1").addEventListener("click",function(){
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomNumber2 = Math.floor(Math.random()*6)+1;
  var audio = new Audio("sounds/dice-sound.mp3");
  audio.play();
  document.querySelector(".img1").setAttribute("src" , "images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src" , "images/dice" + randomNumber2 + ".png");
  var total = randomNumber1+randomNumber2;
  document.querySelector(".total").textContent = "Total is : " + total;
});
