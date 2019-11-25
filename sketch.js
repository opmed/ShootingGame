let img;
let img2;
let img3;
let img4;
/*let Lisa;
let font;
  fontsize = 40;*/

function preload() {
  img = loadImage('images/background.jpg');
  img2 = loadImage('images/gun2.png');
  img3 = loadImage('images/box.png');
  img4 = loadImage('images/2boxes.png');
  /*font = loadFont('Fonts/Lisa.ttf');*/
}

function setup() {
	createCanvas(windowWidth, windowHeight);

  /*textFont(Lisa);
  textSize(width/3);
  textAlign(CENTER, CENTER);*/
}


function draw() {
	background(250);

	cursor(CROSS);
  image(img,0,0);
	//image(img2,650,600);
  image(img3,0,220);
  image(img4,930,280);

  img.resize(1400,770);
	//img2.resize(200,200);
  img3.resize(300,500);
  img4.resize(300,320);

  let a = atan2(mouseY - height/2, mouseX - width/2);
  rotate(a);
  image(img2,650,600);
  img2.resize(200,200);

}

function mousePressed() {
   background(250);
   image(img2,700,550);
}

/*function drawWords(x) {
    fill(0);
    text('ichi', x, 180);
}*/
