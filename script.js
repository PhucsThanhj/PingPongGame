function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomNumber = getRandomInt(0, 2);

const gameContainer = document.getElementById('game');
const scoreBox1= document.getElementById("scoreBox1")
const scoreBox2= document.getElementById("scoreBox2")
const paddle1 = document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');
const ball = document.getElementById('ball');
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const atb = document.getElementById('button3')


const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');



let paddle1PosX = 125;
let paddle2PosX= 125;
let ballPosX = 150;
let ballPosY = 20;
let ballSpeedX = 3;
let ballSpeedY = 3;
let paddleSpeedX = 3;

let score1 = 0;
let score2 = 0;

let dotPosX = 0;
let dot1Width =0;
let dot2Width =0;
let at= true;

let ran = 0;

alert("Fact: Người không chơi là người không thua!")

atb.onclick = function() {
  if(at==true){
    at = false;
    atb.textContent= atb.textContent.replace("ON", "OFF");
    atb.style.color= "red";
  }
  else{
    at = true;
    atb.textContent= atb.textContent.replace("OFF", "ON");
    atb.style.color= "greenyellow";
  }
};


function update() {
  paddle1.style.left = paddle1PosX + 'px';
  paddle2.style.left = paddle2PosX + 'px';
  ball.style.left = ballPosX + 'px';
  ball.style.top = ballPosY + 'px';

  dot1.style.width = dot1Width + 'px';
  dot2.style.width = dot2Width + 'px';

  //ball run
  ballPosX += ballSpeedX;
  ballPosY += ballSpeedY;

//run score
// if (ready==true){
  //score1
  if (ballPosY >= 480){
  if ( ballPosX+10 >(paddle2PosX+60)){
    ballPosX = paddle1PosX;
    ballPosY = 20;
    ballSpeedX = paddleSpeedX =3;
    ballSpeedY = 3;
    score1+=1;
    dot1Width+=50;
  }
  else if( ballPosX+10 <(paddle2PosX-10)){
    ballPosX = paddle1PosX;
    ballPosY = 20;
    ballSpeedX = paddleSpeedX =3;
    ballSpeedY = 3;
    score1+=1;
    dot1Width+=50;
  }
  }

//score2
  if (ballPosY <= 10){
    if( ballPosX+10>(paddle1PosX+60)){
    ballPosX = paddle2PosX;
    ballPosY = 480;
    ballSpeedX = paddleSpeedX= 3;
    ballSpeedY = -3;
    score2+=1;
    dot2Width+=50;
  }
  else if( ballPosX+10 <(paddle1PosX-10)){
    ballPosX = paddle2PosX;
    ballPosY = 480;
    ballSpeedX = paddleSpeedX= 3;
    ballSpeedY = -3;
    score2+=1;
    dot2Width+=50;
  }
  }
  if((score1 == 7)){
    alert("P1 win!")
    score1=0;
    score2=0;
    dot1Width=0;
    dot2Width=0;
  }
  else if((score2 == 7)){
    alert("P2 win!")
    score1=0;
    score2=0;
    dot1Width=0;
    dot2Width=0;
  }

  document.getElementById("score1").innerHTML=score1;
  document.getElementById("score2").innerHTML=score2;
//}
//paddle2 but auto
if (at == true){
  if (ballPosY >= 50 && ballSpeedY > 0){
    if(paddle2PosX+25 > ballPosX+10){
      paddle2PosX-=paddleSpeedX;
    }
    else if(paddle2PosX+25 < ballPosX+10){
      paddle2PosX+=paddleSpeedX;
    }
    if(paddle2PosX < 0){
      paddle2PosX = 0;
    };
    if (paddle2PosX > 300-50) {
      paddle2PosX = 300 - 50;
    }
  }
  
}
//paddle1 run
  if (ballPosY <= 450 && ballSpeedY < 0){
    if(paddle1PosX+25 > ballPosX+10){
      paddle1PosX-=paddleSpeedX;
    }
    else if(paddle1PosX+25 < ballPosX+10){
      paddle1PosX+=paddleSpeedX;
    }
    if (paddle1PosX >= 250){
      paddle1PosX = 250;
    }
    if (paddle1PosX <= 0){
      paddle1PosX = 0;
    }
  }
  
//ball + speed

  if (ballPosX >= 280 || ballPosX <= 0) {
    ran = randomNumber;
    ballSpeedX *= -1.007;
    if(ran == 0) {
      paddleSpeedX *= 1.014;
    }
    else{
      paddleSpeedX *= 1.00;
    }
}

  if (ballPosY >= 480 || ballPosY <= 0) {
    ballSpeedY *= -1.007;

  }

  if (ballPosY >= 280 && ballPosY <= 20 && ballPosX >= paddle2PosX && ballPosX <= paddle2PosX ) {
    ballSpeedY *= -1.007;

  }
  requestAnimationFrame(update);
}
//paddle2 run
function movePaddle() {
if (at==false){
  btn1.onclick = function() {
    paddle2PosX-= 50;
    if(paddle2PosX < 0){
      paddle2PosX = 0;
    };
  };

  btn2.onclick = function() {
  paddle2PosX+= 50;
  if (paddle2PosX > 300-50) {
    paddle2PosX = 300 - 50;
  }
};
};}
document.addEventListener( "click",movePaddle);
requestAnimationFrame(update);
