var img1;
var img2;
var img3;
var img4;
var img5;
var img6;


var pills = [];
var score;
var playing; // aids with asychronous endGame() function

var sceneNum = 21;
var bottle;

function preload() {
    img1 = loadImage("assets/patient.png");
    img2 = loadImage("assets/logo.png");
    img3 = loadImage("assets/hand.png");
    img4 = loadImage("assets/patient1.png");
    img5 = loadImage("assets/cabinet.png");
    img6 = loadImage("assets/medicine.png");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here
    words1 = "This is a personalized medical age, for different people to implement different medical treatment. Personalized medicine, also termed precision medicine, is a medical procedure that separates patients into different groups—with medical decisions, practices, interventions and/or products being tailored to the individual patient based on their predicted response or risk of disease. "
    words2 = "Half a year later, this patient is cured of the disease.              If I haven't choose the universal way, what was happened?"
    words3 = "5 days later, this patient is cured of the disease.                    If I haven't choose the personalized way, what was happened?"
    score = 0;
    speed = 1;
    playing = true;


    bottle = {x: width/13,
         y: height/12,
         size: 120,
         dragging: false,
         lastx: width/13,
         lasty: height/12}

}

function draw() {
    //your "draw loop" code goes here
    // if(sceneNum == 1) {
    //   scene1();
    // } else if (sceneNum == 2) {
    //   scene2();
    // } else if (sceneNum == 21) {
    //   scene21();
    // } else if (sceneNum == 22) {
    //   scene22();
    // } else if (sceneNum == 31) {
    //   scene31();
    // } else if (sceneNum == 32) {
    //   scene32();
    // }
    scene21();

    drawPixels();
}

function drawPixels() {
	push();
		textSize(12);
		fill(255);
		rect(mouseX-20, mouseY-12, 90, 15);
		fill(0);
		text("X: "+Math.round(mouseX)+", Y: "+Math.round(mouseY), mouseX-16, mouseY);
	pop();
}




/* -----scene1----------*/
function scene1() {
    background(0);
    textFont("Times New Roman");
    textSize(28);
    fill(255);
    text(words1.substring(0, frameCount/2), width/4, height/4, width/2, height/2);
    if (frameCount > 800) {
      textSize(15);
      text("Press any key to START...", width/3, height*2/3);
    }
    if (keyIsPressed === true) {
      sceneNum = 2;
    }
}






/* -----scene2----------*/
function scene2() {
    noStroke();
    fill(210, 190, 160);  // floor
    rect(0, height*4/5, width, height/5);
    fill(140, 140, 140);  // the edge of wall
    rect(0, height*4/5, width, height/25);
    fill(150, 210, 255);  // wall
    rect(0, 0, width, height*4/5);

    fill(120, 90, 60);  // door 1
    rect(width/7, height/5, width/6, height*16/25);
    fill(170, 120, 70);
    rect(width/7+width/60, height/5+height/30, width/6-width/30, height*16/25-height/30);
    fill(0);
    ellipse(width/7+width/30, height*3/5, 20, 20);
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text("Universal medical room", width/7+width/15, height/3, 50);

    fill(120, 90, 60);  // door 2
    rect(width*5/7, height/5, width/6, height*16/25);
    fill(170, 120, 70);
    rect(width*5/7+width/60, height/5+height/30, width/6-width/30, height*16/25-height/30);
    fill(0);
    ellipse(width*5/7+width/30, height*3/5, 20, 20);
    textSize(20);
    textAlign(CENTER);
    fill(255);
    text("Personalized medical room", width*5/7+width/15, height/3, 50);

    image(img1, width*2/5, height*2/5, width/4, height*3/5);  // the doctor and patient
    image(img2, width/2.2, height/10, width/12, width/12);  // the hospital logo


    /* dialogs*/
    fill(255);
    ellipse(width*2/5, height*3/7, width/7, width/14);
    fill(255);
    ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
    fill(0);
    textSize(15);
    text("Good morning. Dr.Smith!", width*2/5-width/14, height*3/7-20, width/7);
    textSize(10);
    text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);

    // if (keyIsPressed) {
    //
    // }

    fill(255);
    ellipse(width*3/5, height*3/7, width/7, width/14);
    fill(255);
    ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
    fill(0);
    textSize(15);
    text("Good morning. What's wrong with you?", width*3/5-width/14, height*3/7-20, width/7);
    textSize(10);
    text("Press any key to continue...", width*3/5-width/14, height*3/7+20,width/7);

    // text("All right, you should eat 5 red pills. please go with me.(choose one door)")
    // text("I have been suffering from fever since yesterday.")


    /* push doors */
    if ((mouseX > width*5/7 && mouseX < width*5/7+width/6 &&
         mouseY > height/5 && mouseY < height*21/25) ||
        (mouseX > width/7 && mouseX < width/7+width/6 &&
         mouseY > height/5 && mouseY < height*21/25)) {
      cursor(HAND);
    }else {
      cursor();
    }

    if (mouseIsPressed && mouseX > width/7 && mouseX < width/7+width/6 &&
                                mouseY > height/5 && mouseY < height*21/25) {
      sceneNum = 21;
    } else if(mouseIsPressed && mouseX > width*5/7 && mouseX < width*5/7+width/6 &&
                         mouseY > height/5 && mouseY < height*21/25) {
      sceneNum = 22;
    }


}




/* -----scene21----------*/
function scene21() {
  cursor();
  noStroke();
  fill(210, 190, 160);  // floor
  rect(0, height/2, width, height/2);
  fill(140, 140, 140);  // the edge of wall
  rect(0, height/2, width, height/25);
  fill(150, 210, 255);  // wall
  rect(0, 0, width, height/2);

  image(img5, width/25, height/25, width/3, width/2.4); // cabinet
  /* medicine bottles */
  image(img6,width/6, height/12, 120, 120);
  image(img6,width/3.9, height/12, 120, 120);
  image(img6,width/13, height/3.6, 120, 120);
  image(img6,width/6, height/3.6, 120, 120);
  image(img6,width/3.9, height/3.6, 120, 120);
  image(img6,width/13, height/2.15, 120, 120);
  image(img6,width/6, height/2.15, 120, 120);
  image(img6,width/3.9, height/2.15, 120, 120);
  image(img6,width/13, height/1.53, 120, 120);
  image(img6,width/6, height/1.53, 120, 120);
  image(img6,width/3.9, height/1.53, 120, 120);

  image(img4, width*3/5, 0, width/4, height*4/5);  // patient

  drawBottles(bottle);

  /* If medicine bottle is on the patient, then go to scene31*/


}

function mousePressed() {
  // Function is called automatically when mouse is pressed
  if (onBottle(bottle)) {
    bottle.dragging = true;
    bottle.lastx = bottle.x;
    bottle.lasty = bottle.y;
  }
}

function mouseReleased() {
  // Function is called automatically when mouse is released
  if (onBottle(bottle)) {
    bottle.dragging = false;
  }
}

function onBottle(b) {
  pos = mouseX < (b.x+b.size/2) && mouseX > (b.x-b.size/2) && mouseY < (b.y + b.size/2) && mouseY > (b.y-b.size/2);
  return pos;
}

function drawBottles(b) {
  if (b.dragging) {
    b.x = mouseX;
    b.y = mouseY;
  }
  image(img6, b.x, b.y, b.size, b.size);
}




/* -----scene22----------*/
function scene22() {
  background(0);
  if (mouseX > 0 && mouseY > 0) {
    noCursor();
    image(img3, mouseX-40, mouseY-40, 80, 80)
  }

  if (frameCount % 60 === 0)
    if (random() > 0.6)
      pills.push(new Pill(random(width/2), (random() > 0.5)));

  if (frameCount % 600 === 0){
    speed++;
  }

  for (var i = pills.length - 1; i >= 0; i--) {
    pills[i].update();
    pills[i].draw();

    if (pills[i].captured) {
      pills.splice(i, 1);
      score++;
    }

    if (score == 2) {
      sceneNum == 4;
    }
}

/* draw score */
  fill(255);
  textFont("Times New Roman");
  noStroke();
  textSize(20);
  text("Number of capsules: "+score, width/20, 40);

  if (!playing) {
    fill(255);
    noStroke();
    textSize(60);
    textAlign(CENTER);
    text("Take wrong medicine!", width / 2, height / 2);
    textSize(30);
    text("Press any key to START...", width/3, height*2/3);

/* If take right pills(5 pills), then go to scene31*/


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
  // if (keyIsPressed === true) {
  //   scene22();
  //   loop();
  // }
}

// function reset() {
//   score = 0;
//   speed = 1;
//   playing = true;
// }






/* -----scene31----------*/
function scene31() {
  background(0);
  textFont("Times New Roman");
  textSize(28);
  fill(255,0,0);
  text(words2.substring(0, frameCount/2), width/4, height/4, width/2, height/2);
  if (frameCount > 800) {
    textSize(15);
    text("Press any key to let time flow backwards...", width/3, height*2/3);
  }
  if (keyIsPressed === true) {
    sceneNum = 2;
  }
}


/* -----scene32----------*/
function scene32() {
  background(0);
  textFont("Times New Roman");
  textSize(28);
  fill(255);
  text(words3.substring(0, frameCount/2), width/4, height/4, width/2, height/2);
  if (frameCount > 800) {
    textSize(15);
    text("Press any key to let time flow backwards...", width/3, height*2/3);
  }
  if (keyIsPressed === true) {
    sceneNum = 2;
  }
}
