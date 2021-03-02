function pointAt(cx, cy, angle, dist) {
  var theta = angle/360 * TWO_PI
  return {
    x:cx+cos(theta) * dist,
    y:cy+sin(theta) * dist
  }
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  var now = clock();
  angleMode(DEGREES);

  // defines color for am and pm
  var dark = color('#124b17');
  var light = color('#8cd146');
  // color mixture + transition for the am to pm
  var hourColor
  if (now.am) {
    hourColor = lerpColor(dark, light, now.progress.halfday)
  }
  else {
    hourColor = lerpColor(light, dark, now.progress.halfday)
  }

  background(hourColor);

  // current time
  let currentTime = (now.text.time);
  // attributes
  fill(255);
  noStroke();
  textAlign(CENTER);
  textFont('Silom');
  textSize(50);
  text(currentTime, 300, 200);

  // translate starting point and rotate arcs
  // starting point for our location calculations
  translate(300, 600)
  rotate(-180);

  // hour arc
  strokeWeight(2);
  noFill();
  stroke(150, 150, 150);
  arc(0, 0, 550, 550, 0, 180);

  // minutes base arc
  noStroke();
  fill(150, 150, 150);
  arc(0, 0, 350, 350, 0, 180);

  // minutes tracking arc
  noStroke();
  fill('#eba6dd');
  let endM = map(now.min, 0, 60, 0, 180);
  arc(0, 0, 350, 350, 0, endM);

  // seconds base arc
  strokeWeight(2);
  stroke(150, 150, 150);
  noFill();
  arc(0, 0, 450, 450, 0, 180)

  // seconds tracking arc
  strokeWeight(10);
  stroke('#e6dce4');
  noFill();
  let endS = map(now.progress.min, 0, 1, 0, 180);
  arc(0, 0, 450, 450, 0, endS)


  // **********************
  // map the current hour from a 0-12 value to a 0-360° angle
  angleMode(RADIANS);
  var hourAngle = map(now.progress.halfday, 0, 1, 0, 180);

  // calculate the position of the hour shape relative to the origin 
  var hourLocation = pointAt(0, 0, hourAngle, 275)

  // draw circle at current hour location
  noStroke();
  fill(255);
  circle(hourLocation.x, hourLocation.y, 50)
}