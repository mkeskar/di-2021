  // set the width & height of the sketch
function setup() {
  createCanvas(600, 600)
  angleMode(DEGREES);
}

function draw() {
  var now = clock();
  background(0);
  translate(300, 300);

  // current time
  let currentTime = (now.text.time);
  // attributes
  fill(255);
  noStroke();
  textAlign(CENTER);
  textFont('Helvetica');
  textStyle(BOLD);
  textSize(18);
  text(currentTime, 0, 0);
 
  // rotates clock to start from traditional '12'
  rotate(-90);
 
  // static ellipses
  strokeWeight(2);
  noFill();
  stroke(150, 150, 150);
  ellipse(0, 0, 500);
  ellipse(0, 0, 435);
  ellipse(0, 0, 340);

  
  // seconds tracking arc
  strokeWeight(10);
  stroke(48, 31, 94);
  let endS = map(now.progress.min, 0, 1, 0, 360);
  arc(0, 0, 500, 500, 0, endS);

  // minutes tracking arc
  strokeWeight(20);
  stroke(220, 0, 5);
  let endM = map(now.min, 0, 60, 0, 360);
  arc(0, 0, 435, 435, 0, endM);

  // hours tracking arc
  strokeWeight(30);
  stroke(255, 103, 0);
  let endH = map(now.progress.day, 0, 1, 0, 360);
  arc(0, 0, 340, 340, 0, endH);
}
