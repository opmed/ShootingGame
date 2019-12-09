let hits=0; //sets variable
let n=-50; //sets variable
let showing =false; //sets variable
let showing2 =false; //sets variable
let showing3 =false; //sets variable
let showing4 =false; //sets variable

function preload() {
  img = loadImage('images/env2Background.jpg'); //loads image
  img2 = loadImage('images/rifle.png'); //loads image
  img3 = loadImage('images/target.png'); //loads image
}

function setup() {
  createCanvas(windowWidth, windowHeight); //sets screen to fullsize
}


function draw() {
  background(0); //sets background to black
  cursor(CROSS); //sets cursor to cross

  image(img,200,0); //sets image lcoation
  img.resize(1000,700); //resizes image

  image(img2,700,550); //sets image lcoation
  img2.resize(150,150); //resizes image

  image(img); //to erase repitition
  push(); //to keep it contained
  if (showing){
    image(img3,246, 246); //sets image size and it's left top image 
  }
  if (showing2){
    image(img3,346, 446); //sets image size and left bottom image 
  }
  if (showing3){
    image(img3,946, 320); //sets image size and middle top image
  }
  if (showing4){
    image(img3,746, 120); //sets image size and right bottom image 
  }
  img3.resize(30,30); //resizes image
  pop(); //to keep it contained

  noStroke(); //makes it without outline
  fill(0,0,0,0); //makes it black and transparent
  ellipse(260, 260, 25, 25); //left top elipse
  ellipse(360, 460, 25, 25); //left bottom elipse
  ellipse(760, 135, 25, 25); //left bottom elipse
  ellipse(960, 335, 25, 25); //right bottom elipse

  if (frameCount % 30==0){
    showing = !showing; //makes image appear and disappear when framecount reaches 30
  } 
  if (frameCount % 40==0){
    showing2 = !showing2; //makes image appear and disappear when framecount reaches 30
  } 
  if (frameCount % 20==0){
    showing3 = !showing3; //makes image appear and disappear when framecount reaches 30
  } 
  if (frameCount % 60==0){
    showing4 = !showing4; //makes image appear and disappear when framecount reaches 30
  } 

  textSize(20); //sets text size
  fill(0); //sets color for text
  text('Hits: '+hits, windowWidth/1.3, 40); //writes hits obtained
}

function mousePressed() { //if mouse pressed
 fill(0);
 let ch = dist(mouseX, mouseY, 260, 260); //makes ch equal to distance inside elipse
   if (ch < 15) { //if ch less than 15 then the code below runs
   showing=false; //if image pressed then disappears
   hits++; //increases hits by 1 everytime it's pressed
  }

  let ch2 = dist(mouseX, mouseY, 360, 460); //makes ch equal to distance inside elipse
   if (ch2 < 15) { //if ch less than 15 then the code below runs
   showing=false; //if image pressed then disappears
   hits++; //increases hits by 1 everytime it's pressed
  }

  let ch3 = dist(mouseX, mouseY, 760, 135); //makes ch equal to distance inside elipse
   if (ch3 < 15) { //if ch less than 15 then the code below runs
   showing=false; //if image pressed then disappears
   hits++; //increases hits by 1 everytime it's pressed
  }

  let ch4 = dist(mouseX, mouseY, 960, 335); //makes ch equal to distance inside elipse
   if (ch4 < 15) { //if ch less than 15 then the code below runs
   showing=false; //if image pressed then disappears
   hits++; //increases hits by 1 everytime it's pressed
  }
}