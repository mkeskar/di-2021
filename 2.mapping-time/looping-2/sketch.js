// Things to try:
// 
// - draw the 'current' second in a different color/size
// - draw the first and last dots in each row differently
// - pick each dot's size by map'ing its cell/row/col number
// - use the pointAt function to draw the rows radially
// - draw each 'row' as a number of concentric circles
// - use lerpColor as a replacement for the grey fill color
// 

function setup() {
  createCanvas(600, 600)
}

function draw(){
  var now = clock()
  translate(100,200)
  background('white')
  noStroke()
  fill(0)

  
  // choose the spacing parameters for the grid
  var colSpacing = 45
  var rowSpacing = 45
  var cellRadius = 20
 
  
  // determine the layout of the grid
  var totalCells = 60
  var numColumns = 10
  var numRows = ceil(totalCells/numColumns)
  
  _.times(numRows, r => {
   
    _.times(numColumns, c => {
      var cellNumber = r*numColumns + c
      var x = c * colSpacing
      var y = r * rowSpacing


      // - use lerpColor for a gradient in each row of dots
      var grey = map(r, 0, numRows, 0, 255)
      fill(grey)

       // - use lerpColor for a gradient that runs from cell 1–60
       let pink = color('#eba6dd');
       let red = color(255, 0, 0);
       let box = map(cellNumber, 0, 60, 0, 1);
       var gradient = lerpColor(pink, red, box)
   
      if (cellNumber < now.sec){
      	fill(gradient)
        circle(x, y, cellRadius)
      }else if (cellNumber < totalCells){
        circle(x, y, 4)
      }
    
    })

  })

}