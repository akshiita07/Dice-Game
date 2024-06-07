// generate a random no between 1 to 6 and assign image with that number
var num1=(Math.floor(Math.random()*6))+1;
var num2=(Math.floor(Math.random()*6))+1;
// console.log(numb);

document.querySelector(".img1").setAttribute("src","./images/dice"+num1+".png")
document.querySelector(".img2").setAttribute("src","./images/dice"+num2+".png")

if (num1>num2){
    document.querySelector("h1").innerHTML="Player1 has Won!";
}
else if (num1===num2){
    document.querySelector("h1").innerHTML="Tie";
}
else{
    document.querySelector("h1").innerHTML="Player2 has Won!";
}

function rel(){
    location.reload();
    // alert("reload now");
}

document.querySelector(".btn").addEventListener("click",rel);