var random1= Math.floor(Math.random()*6)+1;

var randomDiceImage1="images/dice"+random1+".png";

var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDiceImage1);

var random2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="images/dice"+random2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2)


if(random1>random2){
    document.querySelector("h1").innerHTML="player 1 wins";

}
if(random2>random1){
    document.querySelector("h1").innerHTML="player 2 wins";
}
if(random2===random1){
    document.querySelector("h1").innerHTML="draw";
}