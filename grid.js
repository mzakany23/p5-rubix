function rotateGrid() {
	var ring0 = {
		first: getRow([0,0],[4,0],gridCopy),
		second: getCol([4,0],[4,4],gridCopy),
		third: getRow([0,4],[4,4],gridCopy),
		fourth: getCol([0,0],[0,4],gridCopy)
	}

	twist('clockwise',ring0)(pos)

	// var ring1 = {
	// 	first: getRow([1,1],[3,1],gridCopy),
	// 	second: getCol([3,1],[3,3],gridCopy),
	// 	third: getRow([1,3],[3,3],gridCopy),
	// 	fourth: getCol([1,1],[1,3],gridCopy)
	// }
	// twist('clockwise',ring1)(pos)
	
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
			grid.push(new Cell(x,y,count))
		}
	}
}

function getCell(x,y,g) {
	return g[(x*size)+y]
}