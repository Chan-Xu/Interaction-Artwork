/**
 * Normal medicine scenes
*/

/* -----sceneNor1----------*/
function sceneNor1() {
    noStroke();
    fill(210, 190, 160);  // floor
    rect(0, height/2, width, height/2);
    fill(140, 140, 140);  // the edge of wall
    rect(0, height/2, width, height/25);
    fill(150, 210, 255);  // wall
    rect(0, 0, width, height/2);

    image(img5, width/25, height/25, width/3, width/2.4); // cabinet
    image(img4, width*3/5, 0, width/4, height*4/5);  // patient

    if (mouseX > 0 && mouseY > 0) {
      noCursor();
      image(img3, mouseX-40, mouseY-40, 80, 80)
    }


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
    drawBottles(bottle1);


    /* If medicine bottle is on the patient, then go to scene31*/
    if (bottle1.x > width*3/5) {
      sceneNum = 41;
    }

}


/* -----sceneNor2----------*/
function sceneNor2() {
    noStroke();
    fill(210, 190, 160);  // floor
    rect(0, height/2, width, height/2);
    fill(140, 140, 140);  // the edge of wall
    rect(0, height/2, width, height/25);
    fill(150, 210, 255);  // wall
    rect(0, 0, width, height/2);

    image(img5, width/25, height/25, width/3, width/2.4); // cabinet
    image(img4, width*3/5, 0, width/4, height*4/5);  // patient

    if (mouseX > 0 && mouseY > 0) {
      noCursor();
      image(img3, mouseX-40, mouseY-40, 80, 80)
    }


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
    drawBottles(bottle2);


    /* If medicine bottle is on the patient, then go to scene31*/
    if (bottle2.x > width*3/5) {
      sceneNum = 43;
    }

}


/* -----sceneNor3----------*/
function sceneNor3() {
    noStroke();
    fill(210, 190, 160);  // floor
    rect(0, height/2, width, height/2);
    fill(140, 140, 140);  // the edge of wall
    rect(0, height/2, width, height/25);
    fill(150, 210, 255);  // wall
    rect(0, 0, width, height/2);

    image(img5, width/25, height/25, width/3, width/2.4); // cabinet
    image(img4, width*3/5, 0, width/4, height*4/5);  // patient

    if (mouseX > 0 && mouseY > 0) {
      noCursor();
      image(img3, mouseX-40, mouseY-40, 80, 80)
    }


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
    drawBottles(bottle3);


    /* If medicine bottle is on the patient, then go to scene31*/
    if (bottle3.x > width*3/5) {
      sceneNum = 45;
    }

}


/* -----sceneNor4----------*/
function sceneNor4() {
    noStroke();
    fill(210, 190, 160);  // floor
    rect(0, height/2, width, height/2);
    fill(140, 140, 140);  // the edge of wall
    rect(0, height/2, width, height/25);
    fill(150, 210, 255);  // wall
    rect(0, 0, width, height/2);

    image(img5, width/25, height/25, width/3, width/2.4); // cabinet
    image(img4, width*3/5, 0, width/4, height*4/5);  // patient

    if (mouseX > 0 && mouseY > 0) {
      noCursor();
      image(img3, mouseX-40, mouseY-40, 80, 80)
    }


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
    drawBottles(bottle4);


    /* If medicine bottle is on the patient, then go to scene31*/
    if (bottle4.x > width*3/5) {
      sceneNum = 47;
    }

}


/* -----sceneNor5----------*/
function sceneNor5() {
    noStroke();
    fill(210, 190, 160);  // floor
    rect(0, height/2, width, height/2);
    fill(140, 140, 140);  // the edge of wall
    rect(0, height/2, width, height/25);
    fill(150, 210, 255);  // wall
    rect(0, 0, width, height/2);

    image(img5, width/25, height/25, width/3, width/2.4); // cabinet
    image(img4, width*3/5, 0, width/4, height*4/5);  // patient

    if (mouseX > 0 && mouseY > 0) {
      noCursor();
      image(img3, mouseX-40, mouseY-40, 80, 80)
    }


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
    drawBottles(bottle5);


    /* If medicine bottle is on the patient, then go to scene31*/
    if (bottle5.x > width*3/5) {
      sceneNum = 49;
    }

}




/**
 * Personalized medicine scenes
*/
function scenePer2() {
    cursor();
    background(0);
    textFont("Times New Roman");
    textSize(45);
    fill(255, 0, 0);
    text("Gene Therapy", width/5, height/10);
    textSize(25);
    fill(255);
    text("Please press any key to know the outcome...", width*3/5, height*4/5);
    var x = width/4.5 + random(-2, 2);
    var y = height/10 + random(-2, 2);
    var size = width/2.3;
    image(img7, x, y, size, size);
}


function scenePer4() {
    cursor();
    background(0);
    textFont("Times New Roman");
    textSize(45);
    fill(255, 0, 0);
    text("Gene Therapy", width/5, height/10);
    textSize(25);
    fill(255);
    text("Please press any key to know the outcome...", width*3/5, height*4/5);
    var x = width/4.5 + random(-2, 2);
    var y = height/10 + random(-2, 2);
    var size = width/2.3;
    image(img7, x, y, size, size);
}

function scenePer5() {
    cursor();
    background(0);
    textFont("Times New Roman");
    textSize(45);
    fill(255, 0, 0);
    text("Gene Therapy", width/5, height/10);
    textSize(25);
    fill(255);
    text("Please press any key to know the outcome...", width*3/5, height*4/5);
    var x = width/4.5 + random(-2, 2);
    var y = height/10 + random(-2, 2);
    var size = width/2.3;
    image(img7, x, y, size, size);
}
