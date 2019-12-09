let life=10; //setting variable
let kills=0; //setting variable
let img; //setting variable
let img2; //setting variable
let img3; //setting variable
let img4; //setting variable
let img5; //setting variable
let img6; //setting variable
let showing =false; //setting variable
let showing2=false; //setting variable

function preload() {
  img = loadImage('images/background.jpg'); //loading image
  img2 = loadImage('images/gun2.png'); //loading image
  img3 = loadImage('images/box.png'); //loading image
  img4 = loadImage('images/2boxes.png'); //loading image
  img5 = loadImage('images/shooter1.png'); //loading image
  img6 = loadImage('images/shooter2.png'); //loading image
}

function setup() {
	createCanvas(windowWidth, windowHeight); //making it fullsize
  img.resize(1000,700); //resizing image
  img3.resize(250,400); //resizing image
  img4.resize(230,220); //resizing image
  img5.resize(150,300); //resizing image
  img6.resize(150,150); //resizing image
}

function draw() {
	background(0); //background is set to black

	cursor(CROSS); //change cursor to cross
  image(img,200,0); //image location

  if (showing){ //makes image not appear
    image(img5,410,370); //image location
  }

  if (showing2){//makes image not appear
    image(img6,745,400); //image location
  }

  image(img3,200,300); //image location
  image(img4,850,330); //image location

  push(); //keeps it contained
  noStroke(); //makes it without outline
  fill(0,0,0,0); //makes it black and transparent
  ellipse(495, 530, 100, 300); //setting elipse size and location
  pop(); //keeps it contained

  push(); //keeps it contained
  noStroke(); //makes it without outline
  fill(0,0,0,0); //makes it black and transparent
  ellipse(820, 470, 70, 150); //sets ellipse size and location
  pop(); //keeps it contained
  
  //shooter1 on the left
  if (frameCount % 100==0){
    showing = !showing; //makes image show and disappear
  } 

 if (frameCount%200==0 && showing==false){
       life=life-1; //reduces life by 1 if the image isn't clicked
  }

  //shooter2 on the right
  if(frameCount % 400==0){
    showing2 = !showing2; //makes image show and disappear
  }

  if (frameCount%800==0 && showing2==false){
    life=life-1; //reduces life by 1 if the image isn't clicked
  }

  if (life<=0){
    mousePressed().stop; //game stops if life is equal to or less than 0
  }

  image(img2,650,550); //sets image location
  img2.resize(150,150); //resizes image

  textSize(20); //sets text size
  fill(255,250,205); //sets text color
  text('Lives: '+life+"   "+"kills: "+kills, windowWidth/1.4, 40); //writes the lives reamining and kills obtained
}

function mousePressed(){ //if mouse pressed
let char1 = dist(mouseX, mouseY, 495, 530); //sets char1 to the distance around the ellipse
  if (char1 < 80) { //if distance to less than 80
   background(0); //sets background to black
   showing=false; //image disappears everytime mouse is clicked
   kills++; //increazes kills by 1
  }

let char2 = dist(mouseX, mouseY, 820, 470); //sets char2 to the distance around the ellipse
  if (char2 < 80) {  //if distance to less than 80
   background(0); //sets background to black
   showing2=false; //image disappears everytime mouse is clicked
   kills++;  //increazes kills by 1
  }
}