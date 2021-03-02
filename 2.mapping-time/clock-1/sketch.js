var barHeight = 160 // height of each bar
var rectHeight = 100 // height of each rectangle
var maxWidth = 550 // maximum width of each bar (the actual width will always be ≤ this)
var spacing = 10 // the vertical and horizontal space to skip between bars/rect

function setup() {
  // set the width & height of the sketch
  createCanvas(600, 600)
}

// this gets called every frame (about 60 frames per second)
function draw() {
  background(255)
  noStroke()
  // store the current time in a local variable
  var now = clock()
  strokeWeight(2)

  var scount = 0
  fill(127, 207, 252)
  noStroke()
  for (let y = 40; y <= 160; y += 40)
  {
  	for (let x = 40;  x <= 560; x += 40)
  	{
  		if(now.sec == scount)
  		{
  			ellipse(x, y, 30);
  			fill(255);
  			stroke(0, 0, 0)
  		}
  		else{
  			ellipse(x, y, 30);
  		}
  		scount++
  	}
  }

  var minsWidth = map(now.min, 0, 60, 0,maxWidth) // from mins (0–60) to pixels (0–maxWidth)
  fill(0)
  noStroke()
  rect(25, 195, maxWidth, barHeight)
  
  fill(127, 207, 252)
  noStroke()
  rect(25, 195, minsWidth, barHeight)

  var hrcount = 1
  fill(127, 207, 252)
  strokeWeight(2)
  for (let hy = 380; hy <= 560; hy += 70)
  {
  	for (let hx = 25;  hx <= 520; hx += 70)
  	{
  		if(now.hours == hrcount)
  		{
  			rect(hx, hy, 60, 60);
  			fill(0);
  			stroke(0, 0, 0)
  		}
  		else{
  			rect(hx, hy, 60, 60);
  		}
  		hrcount++
  	}
  }



  // draw 3 background bars to indicate the max width
  //rect(x, y +    barHeight+spacing,  maxWidth,  barHeight)
 // rect(x, y + 2*(barHeight+spacing), maxWidth,  barHeight)

}
