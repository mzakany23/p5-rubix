var grid = []
var w = 80
var cvs
var gridCopy
var currentCell 
var pos = 0
var count = 0
var rings
var frate = 5
var spinCC = false
var spinCCW = false

function init(s) {
	grid = []
	count = 0
	size = s
	cvs = createCanvas(w*s,w*s)
	moveOver = s-1
	cvs.parent('grid')
	setupGrid()
	gridCopy = JSON.parse(JSON.stringify(grid))
}

function setup() {
	init(5)
}

function draw() {
	clear()
	drawGrid()
	frameRate(frate)
	if (spinCC) {
		rotateClockwise()
	}

	if (spinCCW) {
		rotateCClockwise()
	}
}

function toggle(bool) {

}

document.getElementById('cc').addEventListener('click',function() {
	rotateClockwise()
})

document.getElementById('ccw').addEventListener('click',function() {
	rotateCClockwise()
})

var scc = document.getElementById('scc').addEventListener('click',function() {
	if (spinCC) {
		spinCC = false
		this.innerHTML = 'spin +'
	} else {
		document.getElementById('sccw').innerHTML = 'spin +'
		this.innerHTML = 'stop'
		spinCCW = false
		spinCC = true
	}
})

document.getElementById('sccw').addEventListener('click',function() {
	if (spinCCW) {
		spinCCW = false
		this.innerHTML = 'spin +'
	} else {
		document.getElementById('scc').innerHTML = 'spin +'
		this.innerHTML = 'stop'
		spinCC = false
		spinCCW = true
	}
})

document.getElementById('sdd').addEventListener('change',function(e) {
	var s = parseInt(e.target.value)
	init(s)
})







