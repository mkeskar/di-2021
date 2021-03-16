function pointAt(cx, cy, angle, dist) {
  var theta = angle/360 * TWO_PI
  return {
    x:cx+cos(theta) * dist,
    y:cy+sin(theta) * dist
  }
}

 // set the width & height of the sketch
function setup() {
  createCanvas(600, 600)
}

function draw() {
  var now = clock();
  background(255);
  translate(300, 300);
 
  angleMode(DEGREES);
  rotate(-90);
  strokeWeight(5);
  stroke(0)
  ellipse(0, 0, 500, 500)

  // static arc w/ colors
  // want to iterate through colors in list, and add 30 to x and y each time
  strokeWeight(2);
  //jan
  fill('#269be9');
  stroke(0);
  arc(0, 0, 500, 500, 0, 30, PIE);
  //feb
  fill('#26e9d8');
  stroke(0);
  arc(0, 0, 500, 500, 30, 60, PIE);
  //mar
  fill('#4ce926');
  stroke(0);
  arc(0, 0, 500, 500, 60, 90, PIE);
   //apr
  fill('#8de926');
  stroke(0);
  arc(0, 0, 500, 500, 90, 120, PIE);
   //may
  fill('#e7cc01');
  stroke(0);
  arc(0, 0, 500, 500, 120, 150, PIE);
  //jun
  fill('#e77c01');
  stroke(0);
  arc(0, 0, 500, 500, 150, 180, PIE);
   //jul
  fill('#e73d01');
  stroke(0);
  arc(0, 0, 500, 500, 180, 210, PIE);
  //aug
  fill('#e71b01');
  stroke(0);
  arc(0, 0, 500, 500, 210, 240, PIE);
  //sep
  fill('#e70154');
  stroke(0);
  arc(0, 0, 500, 500, 240, 270, PIE);
  //oct
  fill('#c401e7');
  stroke(0);
  arc(0, 0, 500, 500, 270, 300, PIE);
  //nov
  fill('#6101e7');
  stroke(0);
  arc(0, 0, 500, 500, 300, 330, PIE);
  //dec
  fill('#2c26e9');
  stroke(0);
  arc(0, 0, 500, 500, 330, 360, PIE);

  // white circle center
  strokeWeight(4)
  fill(255)
  stroke(0)
  ellipse(0, 0, 300)

  rotate(-90)
  // day static arc
  strokeWeight(15)
  stroke(150, 150, 150)
  arc(0, 0, 225, 225, 0, 180)

  // day tracking arc
  strokeWeight(15)
  stroke('#2c26e9')
  let endD = map(now.progress.day, 0, 1, 0, 180)
  arc(0, 0, 225, 225, 0, endD)

// **********************
// map the current progress of the year from a 0-1 value to a 0-360° angle
  angleMode(RADIANS);
  var monthAngle = map(now.progress.year, 0, 1, 0, 360)

  // calculate the position of the hour shape relative to the origin 
  var monthLocation = pointAt(0, 0, monthAngle, 200)

  // draw circle at current hour location
  noStroke()
  fill(255)
  circle(monthLocation.x, monthLocation.y, 50)
  

  // *********************
  // current YEAR
  angleMode(DEGREES);
  rotate(180)
  let currentYear = (now.year);
  // attributes
  fill(0);
  noStroke();
  textAlign(CENTER);
  textFont('Silom');
  textSize(50);
  text(currentYear, 0, 75); 
}
