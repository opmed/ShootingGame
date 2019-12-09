let life=10;
let kills=0;
let img;
let img2;
let img3;
let img4;
let showing =false;
let showing2=false;

function preload() {
  img = loadImage('images/background.jpg');
  img2 = loadImage('images/gun2.png');
  img3 = loadImage('images/box.png');
  img4 = loadImage('images/2boxes.png');
  img5 = loadImage('images/shooter1.png')
  img6 = loadImage('images/shooter2.png')
}

function setup() {
	createCanvas(windowWidth, windowHeight);
  img.resize(1000,700);
  img3.resize(250,400);
  img4.resize(230,220);
  img5.resize(150,300);
  img6.resize(150,150);
}

function draw() {
	background(0);

	cursor(CROSS);
  image(img,200,0);

  if (showing){
    image(img5,410,370);
  }

  if (showing2){
    image(img6,745,400);
  }

  image(img3,200,300);
  image(img4,850,330);

  push();
  noStroke();
  fill(0,0,0,0);
  ellipse(495, 530, 100, 300);
  pop();

  push();
  noStroke();
  fill(0,0,0,0);
  ellipse(820, 470, 70, 150);
  pop();
  
  //shooter1 on the left
  if (frameCount % 100==0){
    showing = !showing;
  } 

 if (frameCount%200==0 && showing==false){
       life=life-1;
  }

  //shooter2 on the right
  if(frameCount % 400==0){
    showing2 = !showing2;
  }

  if (frameCount%800==0 && showing2==false){
    life=life-1;
  }

  if (life<=0){
    mousePressed().stop;
  }

  image(img2,650,550);
  img2.resize(150,150);

  textSize(20);
  fill(255,250,205);
  text('Lives: '+life+"   "+"kills: "+kills, windowWidth/1.4, 40);
}

function mousePressed(){
let char1 = dist(mouseX, mouseY, 495, 530);
  if (char1 < 80) {
   background(0);
   showing=false;
   kills++;
  }

let char2 = dist(mouseX, mouseY, 820, 470);
  if (char2 < 80) {
   background(0);
   showing2=false;
   kills++;
  }
}