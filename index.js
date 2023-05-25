let text1="Player 1 wins! 🚩";
let text2="Player 2 wins! 🚩";

var d1=rand1();
var d2=rand2();
var imag_s1="./images/"+"dice"+d1+".png";
var imag_s2="./images/"+"dice"+d2+".png";


if(d1>d2){
  document.getElementById("main").innerHTML=text1;
}
else {
  document.getElementById("main").innerHTML=text2;
}
document.querySelectorAll("img")[0].setAttribute("src",imag_s1);
document.querySelectorAll("img")[1].setAttribute("src",imag_s2);

function rand1(){
    var x=Math.random();
    x=x*6+1;
    x=Math.floor(x);
    return x;  
}
function rand2(){
  var y=Math.random();
  y=y*6+1;
  y=Math.floor(y);
  return y;
}