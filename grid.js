function rotateGrid() {
	var ring0 = {
		first: getRow([0,0],[4,0],gridCopy),
		second: getCol([4,0],[4,4],gridCopy),
		third: getRow([0,4],[4,4],gridCopy),
		fourth: getCol([0,0],[0,4],gridCopy)
	}

	twist('ccw',ring0)(pos)

	var ring1 = {
		first: getRow([1,1],[3,1],gridCopy),
		second: getCol([3,1],[3,3],gridCopy),
		third: getRow([1,3],[3,3],gridCopy),
		fourth: getCol([1,1],[1,3],gridCopy)
	}
	twist('ccw',ring1)(pos)
	
	pos === 4 ? pos = 1 : pos += 1
}	

function getRow(f,t,g) {
	var row = []
	for (var i=f[0];i<=t[0];i++) {
		row.push(getCell(i,t[1],g))
	}
	return row
}

function getCol(f,t,g) {
	var col = []
	
	for (var i=f[1]; i<=t[1];i++) {
		col.push(getCell(f[0],i,g))
	}
	return col
}

function drawGrid() {
	for (var i=0; i<grid.length;i++) {
		var cell = grid[i]
		cell.show()
	}
}

function setupGrid() {
	for (var x=0; x<size;x++) {
		for (var y=0; y<size; y++) {
			count += 1
			var cell = new Cell(x,y,count)
			grid.push(cell)
		}
	}

	var ring0 = {
		first: getRow([0,0],[4,0],grid),
		second: getCol([4,0],[4,4],grid),
		third: getRow([0,4],[4,4],grid),
		fourth: getCol([0,0],[0,4],grid)
	}

	var ring1 = {
		first: getRow([1,1],[3,1],grid),
		second: getCol([3,1],[3,3],grid),
		third: getRow([1,3],[3,3],grid),
		fourth: getCol([1,1],[1,3],grid)
	}

	setRingColor(ring0)
	setRingColor(ring1)
}

function setRingColor(ring) {
	var colorList = ['#FB0031','#67E35A','#9A59CC']
	
	Object.keys(ring).map(function(key) {
		var r = ring[key]
		r.map(function(cell) {
			cell.color = colorList[floor(random(1,3))]
		})
	})
}

function getCell(x,y,g) {
	return g[(x*size)+y]
}