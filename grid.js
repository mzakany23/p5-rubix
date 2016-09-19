function changeSizeForm(e) {
	e.preventDefault()
	console.log('here')
}

function rotateGrid(p) {
	getRingList(size,gridCopy).map(function(ring) {
		twist(ring)(p)
	})
}
function rotateClockwise() {
	pos > 3 ? pos = 1 : pos += 1	
	rotateGrid(pos)
}	

function rotateCClockwise() {
	pos <= 1 ? pos = 4 : pos -= 1	
	rotateGrid(pos)
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

function getRingList(count,g) {
	var ringList = []
	var i = 0

	for (var j = count-1;j>2;j--) {
		ringList.push({
			first: getRow([i,i],[j,i],g),
			second: getCol([j,i],[j,j],g),
			third: getRow([i,j],[j,j],g),
			fourth: getCol([i,i],[i,j],g)
		})
		i+=1
	}
	return ringList
}

function setupGrid() {
	for (var x=0; x<size;x++) {
		for (var y=0; y<size; y++) {
			count += 1
			var cell = new Cell(x,y,count)
			grid.push(cell)
		}
	}

	getRingList(size,grid).map(function(ring) {
		setRingColor(ring)
	})
}

function setRingColor(ring) {
	var ra = [ring.first,ring.second,ring.third,ring.fourth]
	var c = 100
	var i = floor(random(5,10))
	ra.map(function(r) {
		r.map(function(cell) {
			cell.color = c += i
		})
	})
}

function getCell(x,y,g) {
	return g[(x*size)+y]
}