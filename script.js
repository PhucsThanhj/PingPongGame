const gameContainer = document.getElementById('game');
const control= document.getElementById("line")
const paddle1 = document.getElementById('paddle1');
const paddle2 = document.getElementById('paddle2');
const ball = document.getElementById('ball');
const dot = document.getElementById('dot');


const btn1 = document.getElementById('button1');
const btn2 = document.getElementById('button2');



let paddle1PosX = 150;
let paddle2PosX= 150;
let ballPosX = 150;
let ballPosY = 20;
let ballSpeedX = 3;
let ballSpeedY = 3;
let paddleSpeedX = 3;

let score1 = 0;
let score2 = 0;

let dotPosX = 0;
let dotWidth =0;
let ready= false;


alert("Người không chơi là người không thua! Chạm vào thanh trắng phía dưới nếu muốn tự mình điều khiển!")
control.onclick = function() {
  ready=true;
};

function update() {
  paddle1.style.left = paddle1PosX + 'px';
  paddle2.style.left = paddle2PosX + 'px';
  ball.style.left = ballPosX + 'px';
  ball.style.top = ballPosY + 'px';
  dot.style.width = dotWidth + 'px';

  //ball run
  ballPosX += ballSpeedX;
  ballPosY += ballSpeedY;

//run score
// if (ready==true){
  if (ballPosY >= 480 &&( ballPosX>(paddle2PosX+70))){
    paddle1PosX = paddle2PosX = ballPosX = 150;
    ballPosY = 20;
    ballSpeedX = paddleSpeedX =3;
    ballSpeedY = 3;
    score1+=1;
    dotWidth+=50;
  }
  if(ballPosY >= 480 &&( ballPosX<(paddle2PosX-20))){
    paddle1PosX = paddle2PosX = ballPosX = 150;
    ballPosY = 20;
    ballSpeedX = paddleSpeedX =3;
    ballSpeedY = 3;
    score1+=1;
    dotWidth+=50;
  }
//
  if (ballPosY <= 20 &&( ballPosX>(paddle1PosX+70))){
    paddle1PosX = paddle2PosX = ballPosX = 150;
    ballPosY = 480;
    ballSpeedX = paddleSpeedX= 3;
    ballSpeedY = -3;
    score2+=1;
  }
  if(ballPosY <= 20  &&( ballPosX<(paddle1PosX-20))){
    paddle1PosX = paddle2PosX = ballPosX = 150;
    ballPosY = 480;
    ballSpeedX = paddleSpeedX= 3;
    ballSpeedY = -3;
    score2+=1;
  }

  if(score1 == 7){
    alert("Game over!");
    score1=0;
    dotWidth=0;
  }
  document.getElementById("score1").innerHTML=score1;
  document.getElementById("score2").innerHTML=score2;
//}
//paddle2 but auto
if (ready == false){
  if (ballPosY >= 50 && ballSpeedY > 0){
    if(paddle2PosX+25 > ballPosX){
      paddle2PosX-=paddleSpeedX;
    }
    else if(paddle2PosX+25 < ballPosX){
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
    if(paddle1PosX+25 > ballPosX){
      paddle1PosX-=paddleSpeedX;
    }
    else if(paddle1PosX+25 < ballPosX){
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
    ballSpeedX *= -1.007;
    paddleSpeedX *= 1.006;
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
if (ready==true){
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
