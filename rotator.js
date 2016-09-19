function twist(direction,gc) {
	var self = {}
	self.p = [null,gc.first,gc.second,gc.third,gc.fourth]

	self._twist = function(position,positions,type,order,index) {
		var p = self.p[position][0]
		var end = positions.length

		if (order === 'ascending') {
			for (var i=0; i<end;i++){
				if (type === 'row') {
					var cell = getCell(i+p.x,p.y,grid)
					cell.data = positions[i].data
				}

				if (type === 'col'){
					var cell = getCell(p.x,i+p.y,grid)
					cell.data = positions[i].data
				}

			}
		} else if (order === 'descending') {
			
			for (var i=0; i<end; i++) {
				var c = end-1
				if (type === 'row') {
					var cell = getCell(i+p.x,p.y,grid)
					cell.data = positions[c-i].data
				}

				if (type === 'col'){
					var cell = getCell(p.x,i+p.y,grid)
					cell.data = positions[c-i].data
				}
				
			}
		}
	}

	self._cw = function() {
		switch (pos) {
			case 1:
				self._twist(1,gc.fourth,'row','descending')
				self._twist(2,gc.first, 'col','ascending')
				self._twist(3,gc.second, 'row','descending')
				self._twist(4,gc.third, 'col','ascending')
				break
			case 2:
				self._twist(1,gc.third,'row','descending')
				self._twist(2,gc.fourth,'col','descending')
				self._twist(3,gc.first,'row','descending')
				self._twist(4,gc.second,'col','descending')
				break
			case 3:
				self._twist(1,gc.second,'row','descending')
				self._twist(2,gc.third,'col', 'ascending')
				self._twist(3,gc.fourth,'row','ascending')
				self._twist(4,gc.first,'col','descending')
				break
			case 4:
				self._twist(1,gc.first,'row','ascending')
				self._twist(2,gc.second,'col', 'ascending')
				self._twist(3,gc.third,'row','ascending')
				self._twist(4,gc.fourth,'col','ascending')
				break
		}
	}

	self._ccw = function() {
		switch (pos) {
			case 1:
				self._twist(1,gc.second,'row','descending')
				self._twist(2,gc.third,'col', 'ascending')
				self._twist(3,gc.fourth,'row','ascending')
				self._twist(4,gc.first,'col','descending')
				break
			case 2:
				self._twist(1,gc.third,'row','descending')
				self._twist(2,gc.fourth,'col','descending')
				self._twist(3,gc.first,'row','descending')
				self._twist(4,gc.second,'col','descending')
				break
			case 3:
				self._twist(1,gc.fourth,'row','descending')
				self._twist(2,gc.first, 'col','ascending')
				self._twist(3,gc.second, 'row','descending')
				self._twist(4,gc.third, 'col','ascending')
				break
			case 4:
				self._twist(1,gc.first,'row','ascending')
				self._twist(2,gc.second,'col', 'ascending')
				self._twist(3,gc.third,'row','ascending')
				self._twist(4,gc.fourth,'col','ascending')
				break
		}
	}

	return function(pos) {
		if (direction === 'cw') {
			self._cw()
		} else if ('ccw'){
			self._ccw()
		}
	}
}