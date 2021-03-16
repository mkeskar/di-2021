var data

function preload(){
  data = loadTable('data/totals.csv', 'csv', 'header')
}

function setup(){
  createCanvas(800, 600)

  print('csv data converted to a p5 "Table" object:', data)
}
