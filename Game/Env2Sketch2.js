let hits=0;
let n=-50;
let showing =false;
let showing2 =false;
let showing3 =false;
let showing4 =false;

function preload() {
  img = loadImage('images/env2Background.jpg');
  img2 = loadImage('images/rifle.png');
  img3 = loadImage('images/target.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0);
  cursor(CROSS);

  image(img,200,0);
  img.resize(1000,700);

  image(img2,700,550);
  img2.resize(150,150);

  image(img); //to erase repitition
  push(); //to keep it contained
  //translate(width/2, 20); //keeps it around the middle
 // rotate(frameCount/-50); //rotates it

  
  if (showing){
    image(img3,246, 246); //left top  
  }
  if (showing2){
    image(img3,346, 446); //left bottom 
  }
  if (showing3){
    image(img3,946, 320); //middle top
  }
  if (showing4){
    image(img3,746, 120); //right bottom 
  }

  img3.resize(30,30);
  pop(); //to keep it contained

  //push()
   // translate(width/2, 20); //keeps it around the middle
 // rotate(frameCount/n); //rotates it
  noStroke();
  fill(0,0,0,0);
  ellipse(260, 260, 25, 25); //left top
  ellipse(360, 460, 25, 25); //left bottom
  ellipse(760, 135, 25, 25); //left bottom
  ellipse(960, 335, 25, 25); //right bottom
  //pop();

  if (frameCount % 30==0){
    showing = !showing;
  } 
  if (frameCount % 40==0){
    showing2 = !showing2;
  } 
  if (frameCount % 20==0){
    showing3 = !showing3;
  } 
  if (frameCount % 60==0){
    showing4 = !showing4;
  } 

  textSize(20);
  fill(0);
  text('Hits: '+hits, windowWidth/1.3, 40);
}

function mousePressed() {
   fill(0);
 let ch = dist(mouseX, mouseY, 260, 260);
   if (ch < 15) {
   hits++;
  }

  let ch2 = dist(mouseX, mouseY, 360, 460);
   if (ch2 < 15) {
   hits++;
  }

  let ch3 = dist(mouseX, mouseY, 760, 135);
   if (ch3 < 15) {
   hits++;
  }

  let ch4 = dist(mouseX, mouseY, 960, 335);
   if (ch4 < 15) {
   hits++;
  }
}