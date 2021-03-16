var r;   
var angle 
var step

function setup() {
  createCanvas(600, 600);
}

function draw() {
  var now = clock();
  angleMode(DEGREES);

  r     = 150;
  angle = 0;
  step  = 360/12;

  // ********* BACKGROUND **********
  // defines hour color for am vs pm
  var light = color(200, 200, 200)
  var dark = color(46, 46, 46)
  // color mixture + transition for the am to pm
  var hourColor
  if (now.am) {
    hourColor = lerpColor(dark, light, now.progress.halfday)
  }
  else {
    hourColor = lerpColor(light, dark, now.progress.halfday)
  }

  background(hourColor);

  // ****** CANVAS SETTING *****
  translate(300, 300)
  rotate(-90);

  // ********* DATE *********
  // // months circles
  let m = 0
  while (m < 12)
  {
    var x = r * sin(angle);
    var y = r * cos(angle);

    if (m < now.month)
    {
      noStroke()
      fill('#26e9d8')
      ellipse(x, y, 30)
    }
    else
    {
      stroke(255)
      strokeWeight(2)
      noFill()
      ellipse(x, y, 30)
    }
    //increase angle by step size
    angle = angle + step;
    m++
  }

  // percentage of month triangle
  // triangle(x1, y1, x2, y2, x3, y3)
  noStroke()
  fill(127, 207, 252);
  let endY = map(now.progress.month, 0, 1, 0, 360);
  arc(0, 0, 200, 200, 0, endY, PIE);
  // year base ellipse
  strokeWeight(2);
  stroke(255)
  noFill();
  ellipse(0, 0, 200, 200)

  // ********** TIME ********
  // static ellipses
  strokeWeight(2);
  noFill();
  stroke(255);
  ellipse(0, 0, 550);
  ellipse(0, 0, 475);
  ellipse(0, 0, 390);
  
  // seconds tracking arc
  strokeWeight(5);
  stroke(48, 31, 94);
  let endS = map(now.progress.min, 0, 1, 0, 360);
  arc(0, 0, 550, 550, 0, endS);

  // minutes tracking arc
  strokeWeight(10);
  stroke('#6101e7');
  let endM = map(now.min, 0, 60, 0, 360);
  arc(0, 0, 475, 475, 0, endM);

  // hours tracking arc
  strokeWeight(20);
  stroke('#2c26e9');
  let endH = map(now.progress.day, 0, 1, 0, 360);
  arc(0, 0, 390, 390, 0, endH);
}
