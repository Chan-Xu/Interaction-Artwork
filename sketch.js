var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;

var bottle;

var diaNum = 0;
var sceneNum = 1;
var gene;

function preload() {
    img1 = loadImage("assets/patient.png");
    img2 = loadImage("assets/logo.png");
    img3 = loadImage("assets/hand.png");
    img4 = loadImage("assets/patient1.png");
    img5 = loadImage("assets/cabinet.png");
    img6 = loadImage("assets/medicine.png");
    img7 = loadImage("assets/gene.png");
    img8 = loadImage("assets/dead.png");

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // any additional setup code goes here
    words0 = "This is a personalized medical age, for different people to implement different medical treatment. The personalized medical care is very expensive to almost 1 million dollors, but normal medical care is free."+"\n"+"\n" +" OK, that's be an one day doctor now!"+"\n"+" (Here, the government will not cover the cost of treatment, but patients pay for themselves.) "
    words1 = "Disease: headache"+"\n"+"Fee: free"+"\n"+"Treatment time: 5 days"+"\n"+"LIVE"
    words3 = "Disease: headache"+"\n"+"Fee: free"+"\n"+"Treatment time: 5 days"+"\n"+"LIVE"
    words4 = "Disease: headache"+"\n"+"Fee: 1 million dollors"+"\n"+"Treatment time: 2 months"+"\n"+"LIVE"
    words5 = "Disease: cancer"+"\n"+"Fee: free"+"\n"+"Treatment time: 3 months"+"\n"+"DEAD"
    words7 = "Disease: cancer"+"\n"+"Fee: free"+"\n"+"Treatment time: 3 months"+"\n"+"DEAD"
    words8 = "Disease: cancer"+"\n"+"Fee: 1 million dollors"+"\n"+"Treatment time: 3 months"+"\n"+"DEAD (50% to survive)"
    words9 = "Disease: cancer"+"\n"+"Fee: free"+"\n"+"Treatment time: 3 months"+"\n"+"DEAD"
    words10 = "Disease: cancer"+"\n"+"Fee: 1 million dollors"+"\n"+"Treatment time: 6 months"+"\n"+"LIVE (50% to survive)"

    bottle = {x: width/13,
              y: height/12,
              size: 120,
              dragging: false,
              lastx: width/13,
              lasty: height/12};
}




function draw() {


  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
    //your "draw loop" code goes here
    if(sceneNum == 1) {
      scene1();
    } else if (sceneNum == 21) {
      scene21();
    } else if (sceneNum == 211) {
      sceneNor1();
    } else if (sceneNum == 41) {
      sceneOut1();
    } else if (sceneNum == 22) {
      scene22();
    } else if (sceneNum == 221) {
      sceneNor2();
    } else if (sceneNum == 222) {
      scenePer2();
    } else if (sceneNum == 43) {
      sceneOut3();
    } else if (sceneNum == 44) {
      sceneOut4();
    } else if (sceneNum == 23) {
      scene23();
    } else if (sceneNum == 231) {
      sceneNor3();
    } else if (sceneNum == 45) {
      sceneOut5();
    } else if (sceneNum == 24) {
      scene24();
    } else if (sceneNum == 241) {
      sceneNor4();
    } else if (sceneNum == 242) {
      scenePer4();
    } else if (sceneNum == 47) {
      sceneOut7();
    } else if (sceneNum == 48) {
      sceneOut8();
    } else if (sceneNum == 25) {
      scene25();
    } else if (sceneNum == 251) {
      sceneNor5();
    } else if (sceneNum == 252) {
      scenePer5();
    } else if (sceneNum == 49) {
      sceneOut9();
    } else if (sceneNum == 410) {
      sceneOut10();
    } else if (sceneNum == 3) {
      scene3();
    }
}




function keyPressed() {
    if(sceneNum == 1) {
      sceneNum = 21;
      diaNum = 0;
    } else if (sceneNum == 41) {
      sceneNum = 22;
      diaNum = 0;
    } else if (sceneNum == 43 || sceneNum == 44) {
      sceneNum = 23;
      diaNum = 0;
    } else if (sceneNum == 45) {
      sceneNum = 24;
      diaNum = 0;
    } else if (sceneNum == 47 || sceneNum == 48) {
      sceneNum = 25
      diaNum = 0;
    } else if (sceneNum == 49 || sceneNum == 410) {
      sceneNum = 3;
    } else if (sceneNum == 21) {
      diaNum += 1;
    } else if (sceneNum == 22) {
      diaNum += 1;
    } else if (sceneNum == 23) {
      diaNum += 1;
    } else if (sceneNum == 24) {
      diaNum += 1;
    } else if (sceneNum == 25) {
      diaNum += 1;
    } else if (sceneNum == 222) {
      sceneNum = 44;
    } else if (sceneNum == 242) {
      sceneNum = 48;
    } else if (sceneNum == 252) {
      sceneNum = 410;
    }
}




/* -----scene1----------*/
function scene1() {
    background(0);
    textFont("Times New Roman");
    textAlign(CENTER);
    textSize(28);
    fill(255);
    text(words0.substring(0, frameCount/2), width/4, height/4, width/2, height/2);
    if (frameCount > 500) {
      textSize(15);
      text("Press any key to START...", width*3/4, height*3/4);
    }

}




/* -----scene21----------*/
function scene21() {
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
    if (diaNum == 0) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Good morning. Dr.Smith! I am No.1.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 1) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Good morning. What's wrong with you?", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*3/5-width/14, height*3/7+20,width/7);
    } else if (diaNum == 2) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("I have a headache.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 3) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("All right. How much money do you have?", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*3/5-width/14, height*3/7+20,width/7);
    } else if (diaNum == 4) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("I have no money.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 5) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Ok, I will take you to one of the rom, please follow with me.", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Hint: Push one door...", width*3/5-width/14, height*3/7+20,width/7);
    }

    /* push doors */
    if (mouseX > width/7 && mouseX < width/7+width/6 &&
         mouseY > height/5 && mouseY < height*21/25) {
      cursor(HAND);
    }else {
      cursor();
    }

    if (mouseIsPressed && mouseX > width/7 && mouseX < width/7+width/6 &&
                                mouseY > height/5 && mouseY < height*21/25) {
      sceneNum = 211;
    }
}




/* -----sceneOut1----------*/
function sceneOut1() {
    cursor();
    background(0);
    textFont("Times New Roman");
    textAlign(CENTER);
    textSize(28);
    fill(255);
    text(words1.substring(0, frameCount/10), width/4, height/4, width/2, height/2);
    if (frameCount > 500) {
      textSize(15);
      text("Press any key to continue...", width*3/4, height*3/4);
    }
}




/* -----scene22----------*/
function scene22() {
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
    if (diaNum == 0) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Good morning. Dr.Smith! I am No.2.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 1) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Good morning. What's wrong with you?", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*3/5-width/14, height*3/7+20,width/7);
    } else if (diaNum == 2) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("I have a headache.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 3) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("All right. How much money do you have?", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*3/5-width/14, height*3/7+20,width/7);
    } else if (diaNum == 4) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("I have 1 million dollors.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 5) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Ok, I will take you to one of the rom, please follow with me.", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Hint: Push one door...", width*3/5-width/14, height*3/7+20,width/7);
    }

    /* push doors */
    if ((mouseX > width/7 && mouseX < width/7+width/6 &&
         mouseY > height/5 && mouseY < height*21/25) ||
        (mouseX > width*5/7 && mouseX < width*5/7+width/6 &&
         mouseY > height/5 && mouseY < height*21/25)) {
      cursor(HAND);
    }else {
      cursor();
    }

    if (mouseIsPressed && mouseX > width/7 && mouseX < width/7+width/6 &&
                                mouseY > height/5 && mouseY < height*21/25) {
      sceneNum = 221;
    } else if(mouseIsPressed && mouseX > width*5/7 && mouseX < width*5/7+width/6 &&
                         mouseY > height/5 && mouseY < height*21/25) {
      sceneNum = 222;
    }

}




/* -----sceneOut3----------*/
function sceneOut3() {
    cursor();
    background(0);
    textFont("Times New Roman");
    textSize(28);
    fill(255);
    text(words3.substring(0, frameCount/10), width/4, height/4, width/2, height/2);
    if (frameCount > 500) {
      textSize(15);
      text("Press any key to continue...", width*3/4, height*3/4);
    }
}




/* -----sceneOut4----------*/
function sceneOut4() {
    cursor();
    background(0);
    textFont("Times New Roman");
    textSize(28);
    fill(255);
    text(words4.substring(0, frameCount/10), width/4, height/4, width/2, height/2);
    if (frameCount > 500) {
      textSize(15);
      text("Press any key to continue...", width*3/4, height*3/4);
    }
}




/* -----scene23----------*/
function scene23() {
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
    if (diaNum == 0) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Good morning. Dr.Smith! I am No3.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 1) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Good morning. What's wrong with you?", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*3/5-width/14, height*3/7+20,width/7);
    } else if (diaNum == 2) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("I was diagnosed with cancer and I have only three months to live.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 3) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Sorry to hear that. How much money do you have?", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*3/5-width/14, height*3/7+20,width/7);
    } else if (diaNum == 4) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("I have no money.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 5) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Ok, I will take you to one of the rom, please follow with me.", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Hint: Push one door...", width*3/5-width/14, height*3/7+20,width/7);
    }

    /* push doors */
    if (mouseX > width/7 && mouseX < width/7+width/6 &&
         mouseY > height/5 && mouseY < height*21/25) {
      cursor(HAND);
    }else {
      cursor();
    }

    if (mouseIsPressed && mouseX > width/7 && mouseX < width/7+width/6 &&
                                mouseY > height/5 && mouseY < height*21/25) {
      sceneNum = 231;
    }

}




/* -----sceneOut5----------*/
function sceneOut5() {
    cursor();
    background(0);
    textFont("Times New Roman");
    textSize(28);
    fill(255);
    text(words5.substring(0, frameCount/10), width/4, height/4, width/2, height/2);
    image(img8, width/3.5, height/3.5, width/3, width/3);
    if (frameCount > 500) {
      textSize(15);
      text("Press any key to continue...", width*3/4, height*3/4);
    }
}




/* -----scene24----------*/
function scene24() {
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
    if (diaNum == 0) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Good afternoon. Dr.Smith! I am No4.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 1) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Good afternoon. What's wrong with you?", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*3/5-width/14, height*3/7+20,width/7);
    } else if (diaNum == 2) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("I was diagnosed with cancer and I have only three months to live.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 3) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Sorry to hear that. How much money do you have?", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*3/5-width/14, height*3/7+20,width/7);
    } else if (diaNum == 4) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("I have 1 million dollors.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 5) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Ok, I will take you to one of the rom, please follow with me.", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Hint: Push one door...", width*3/5-width/14, height*3/7+20,width/7);
    }

    /* push doors */
    if ((mouseX > width/7 && mouseX < width/7+width/6 &&
         mouseY > height/5 && mouseY < height*21/25) ||
        (mouseX > width*5/7 && mouseX < width*5/7+width/6 &&
         mouseY > height/5 && mouseY < height*21/25)) {
      cursor(HAND);
    }else {
      cursor();
    }

    if (mouseIsPressed && mouseX > width/7 && mouseX < width/7+width/6 &&
                                mouseY > height/5 && mouseY < height*21/25) {
      sceneNum = 241;
    } else if(mouseIsPressed && mouseX > width*5/7 && mouseX < width*5/7+width/6 &&
                         mouseY > height/5 && mouseY < height*21/25) {
      sceneNum = 242;
    }

}




/* -----sceneOut7----------*/
function sceneOut7() {
    cursor();
    background(0);
    textFont("Times New Roman");
    textSize(28);
    fill(255);
    text(words7.substring(0, frameCount/10), width/4, height/4, width/2, height/2);
    image(img8, width/3.5, height/3.5, width/3, width/3);
    if (frameCount > 500) {
      textSize(15);
      text("Press any key to continue...", width*3/4, height*3/4);
    }
}




/* -----sceneOut8----------*/
function sceneOut8() {
    cursor();
    background(0);
    textFont("Times New Roman");
    textSize(28);
    fill(255);
    text(words8.substring(0, frameCount/10), width/4, height/4, width/2, height/2);
    image(img8, width/3.5, height/3.5, width/3, width/3);
    if (frameCount > 500) {
      textSize(15);
      text("Press any key to continue...", width*3/4, height*3/4);
    }
}




/* -----scene25----------*/
function scene25() {
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
    if (diaNum == 0) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Good afternoon. Dr.Smith! I am No5.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 1) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Good afternoon. What's wrong with you?", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*3/5-width/14, height*3/7+20,width/7);
    } else if (diaNum == 2) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("I was diagnosed with cancer and I have only three months to live.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 3) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Sorry to hear that. How much money do you have?", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*3/5-width/14, height*3/7+20,width/7);
    } else if (diaNum == 4) {
      fill(255);
      ellipse(width*2/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*2/5+width/20, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("I have 1 million dollors.", width*2/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Press any key to continue...", width*2/5-width/14, height*3/7,width/7);
    } else if (diaNum == 5) {
      fill(255);
      ellipse(width*3/5, height*3/7, width/7, width/14);
      fill(255);
      ellipse(width*3/5-width/40, height*3/7+width/20,20,20);
      fill(0);
      textSize(15);
      text("Ok, I will take you to one of the rom, please follow with me.", width*3/5-width/14, height*3/7-20, width/7);
      textSize(10);
      text("Hint: Push one door...", width*3/5-width/14, height*3/7+20,width/7);
    }

    /* push doors */
    if ((mouseX > width/7 && mouseX < width/7+width/6 &&
         mouseY > height/5 && mouseY < height*21/25) ||
        (mouseX > width*5/7 && mouseX < width*5/7+width/6 &&
         mouseY > height/5 && mouseY < height*21/25)) {
      cursor(HAND);
    }else {
      cursor();
    }

    if (mouseIsPressed && mouseX > width/7 && mouseX < width/7+width/6 &&
                                mouseY > height/5 && mouseY < height*21/25) {
      sceneNum = 251;
    } else if(mouseIsPressed && mouseX > width*5/7 && mouseX < width*5/7+width/6 &&
                         mouseY > height/5 && mouseY < height*21/25) {
      sceneNum = 252;
    }

}




/* -----sceneOut9----------*/
function sceneOut9() {
    cursor();
    background(0);
    textFont("Times New Roman");
    textSize(28);
    fill(255);
    text(words9.substring(0, frameCount/10), width/4, height/4, width/2, height/2);
    image(img8, width/3.5, height/3.5, width/3, width/3);
    if (frameCount > 500) {
      textSize(15);
      text("Press any key to continue...", width*3/4, height*3/4);
    }
}




/* -----sceneOut10----------*/
function sceneOut10() {
    cursor();
    background(0);
    textFont("Times New Roman");
    textSize(28);
    fill(255);
    text(words10.substring(0, frameCount/10), width/4, height/4, width/2, height/2);
    if (frameCount > 500) {
      textSize(15);
      text("Press any key to continue...", width*3/4, height*3/4);
    }
}




/* -----scene3----------*/
function scene3() {
    cursor();
    background(0);
    textAlign(CENTER);
    textFont("Times New Roman");
    textSize(50);
    fill(150, 210, 255);
    text("You have been an doctor for one day.", width/2, height/2.5);
    text("What did you learn?", width/2, height/2);
}
