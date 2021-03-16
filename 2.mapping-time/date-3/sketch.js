function setup() {
  createCanvas(600, 600)
}

function draw() {
  var now = clock();
  background(255);
  translate(300, 300);

  angleMode(DEGREES);
  rotate(-90);

//**************** YEARS
  // year tracking arc
  noStroke();
  fill('#fd1a11');
  let endY = map(now.progress.year, 0, 1, 0, 360);
  arc(0, 0, 500, 500, 0, endY);
  // year base ellipse
  strokeWeight(4);
  stroke(0)
  noFill();
  ellipse(0, 0, 500, 500)

//**************** MONTHS
  // white ellipse cover year
  noStroke()
  fill(255)
  ellipse(0, 0, 350, 35 0)
  // month tracking arc
  noStroke();
  fill('#fd5b11');
  let endM = map(now.progress.month, 0, 1, 0, 360);
  arc(0, 0, 350, 350, 0, endM);
  // month base ellipse
  strokeWeight(4);
  stroke(0)
  noFill();
  ellipse(0, 0, 350, 350)

//**************** DAY
  // white ellipse cover month
  noStroke()
  fill(255)
  ellipse(0, 0, 200, 200)
  // day tracking arc
  noStroke();
  fill('#fda011');
  let endD = map(now.progress.day, 0, 1, 0, 360);
  arc(0, 0, 200, 200, 0, endD);
  // month base ellipse
  strokeWeight(4);
  stroke(0)
  noFill();
  ellipse(0, 0, 200, 200)
}