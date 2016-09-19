var grid = []
var w = 80
var cvs
var gridCopy
var currentCell 
var pos = 0
var count = 0
var rings

function setup() {
	cvs = createCanvas(600,600)
	size = 5
	moveOver = size-1
	cvs.id('grid')
	setupGrid()
	gridCopy = JSON.parse(JSON.stringify(grid))
}

function draw() {
	clear()
	frameRate(10)
	drawGrid()
}
