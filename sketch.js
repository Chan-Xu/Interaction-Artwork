var img1;
var img2;

var pills = [];
var score;
var playing; // aids with asychronous endGame() function

var sceneNum = 0;

function preload() {
    img1 = loadImage("assets/patient.png");
    img2 = loadImage("assets/logo.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here
    words = "This is a personalized medical age, for different people to implement different medical treatment. Personalized medicine, also termed precision medicine, is a medical procedure that separates patients into different groups—with medical decisions, practices, interventions and/or products being tailored to the individual patient based on their predicted response or risk of disease. "
    score = 0;
    speed = 1;
    playing = true;

}

function draw() {
    // your "draw loop" code goes here
    if(sceneNum == 0) {
      scene1();
    } else if (sceneNum == 1) {
      scene2();
    } else if (sceneNum == 2) {
      scene3();
    }

//    drawPixels();
}

// function drawPixels() {
// 	push();
// 		textSize(12);
// 		fill(255);
// 		rect(mouseX-20, mouseY-12, 90, 15);
// 		fill(0);
// 		text("X: "+Math.round(mouseX)+", Y: "+Math.round(mouseY), mouseX-16, mouseY);
// 	pop();
// }

/* -----scene1----------*/
function scene1() {
    background(0);
    textFont("Times New Roman");
    textSize(28);
    fill(255);
    text(words.substring(0, frameCount/2), width/4, height/4, width/2, height/2);
    if (keyIsPressed === true) {
      sceneNum = 1;
    }
}


/* -----scene2----------*/
function scene2() {
    noStroke();
    fill(210, 190, 160);// floor
    rect(0, height*4/5, width, height/5);
    fill(140, 140, 140);// wall edge
    rect(0, height*4/5, width, height/25);
    fill(150, 210, 255);// wall
    rect(0, 0, width, height*4/5);

    fill(120, 90, 60);// door
    rect(width/5, height/5, width/5, height*16/25);
    fill(170, 120, 70);
    rect(width/5+width/60, height/5+height/30, width/5-width/30, height*16/25-height/30);
    fill(0);
    ellipse(width/5+width/30, height*3/5, 20, 20);
    textSize(32);
    fill(255);
    text("DOCTOR", width/4, height*2/5);

//    image(img2, width/2, height/10, width/5, width/5);
    image(img1, width/2, height/4, width/3, height*3/4);

    /* dialogs*/
    rect()

    if(mouseIsPressed) {
      sceneNum = 2;
    }

}


/* -----scene3----------*/
function scene3() {
  background(0);

  if (frameCount % 60 === 0)
    if (random() > 0.6)
      pills.push(new Pill(random(width / 2), (random() > 0.8)));

  if (frameCount % 600 === 0)
    speed++;

  for (var i = pills.length - 1; i >= 0; i--) {
    pills[i].update();
    pills[i].draw();

    if (pills[i].captured) {
      pills.splice(i, 1);
      score++;
    }
}

/* draw score */
  fill(255);
  noStroke();
  text(score, 10, 40);

  if (!playing) {
    fill(255);
    noStroke();
    textSize(60);
    textAlign(CENTER);
    text("Game Over!", width / 2, height / 2);
  //  scene1();
  }
}

function mousePressed() {

  for (var i = 0; i < pills.length; i++) {
    pills[i].captured = pills[i].capturedBy(mouseX, mouseY);

    if (pills[i].captured && pills[i].type)
      endGame();
  }
}

function endGame() {

  playing = false;
  noLoop();
}



/* -----scene4----------*/
function scene4() {

}
