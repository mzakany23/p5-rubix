var grid = []
var w = 80
var cvs
var gridCopy
var currentCell 
var pos = 0
var count = 0
var rings

function init(s) {
	grid = []
	count = 0
	cvs = createCanvas(1000,1000)
	size = s
	moveOver = s-1
	cvs.id('grid')
	setupGrid()
	gridCopy = JSON.parse(JSON.stringify(grid))
}

function setup() {
	init(5)
}

function draw() {
	clear()
	drawGrid()
}

document.getElementById('cc').addEventListener('click',function() {
	rotateClockwise()
})

document.getElementById('ccw').addEventListener('click',function() {
	rotateCClockwise()
})