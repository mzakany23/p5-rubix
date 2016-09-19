function twist(direction,gc) {
	var self = {}
		
	self._twist = function(position,positions,type,order,index) {
		if (order === 'ascending') {
			for (var i=0; i<size;i++){
				var w,x 

				if (type === 'row') {
					w = i 
					x = index
				}

				if (type === 'col'){
					w = index 
					x = i
				}

				getCell(w,x,grid).data = positions[i].data
			}
		} else if (order === 'descending') {
			var c = size-1
			for (var i=0; i<size; i++) {
				var w,x 

				if (type === 'row') {
					w = i 
					x = index
				}

				if (type === 'col'){
					w = index 
					x = i
				}
				getCell(w,x,grid).data = positions[c-i].data
			}
		}
	}

	self._cw = function() {
		switch (pos) {
			case 1:
				self._twist(1,gc.fourth,'row','descending',0)
				self._twist(2,gc.first, 'col','ascending',4)
				self._twist(3,gc.second, 'row','descending',4)
				self._twist(4,gc.third, 'col','ascending',0)
				break
			case 2:
				self._twist(1,gc.third,'row','descending',0)
				self._twist(2,gc.fourth,'col','descending',4)
				self._twist(3,gc.first,'row','descending',4)
				self._twist(4,gc.second,'col','descending',0)
				break
			case 3:
				self._twist(1,gc.second,'row','descending',0)
				self._twist(2,gc.third,'col', 'ascending',4)
				self._twist(3,gc.fourth,'row','ascending',4)
				self._twist(4,gc.first,'col','descending',0)
				break
			case 4:
				self._twist(1,gc.first,'row','ascending',0)
				self._twist(2,gc.second,'col', 'ascending',4)
				self._twist(3,gc.third,'row','ascending',4)
				self._twist(4,gc.fourth,'col','ascending',0)
				break
		}
	}

	self._ccw = function() {
		console.log('counter clockwise will go here')
	}

	return function(pos) {
		if (direction === 'clockwise') {
			self._cw()
		} else {
			self._ccw()
		}
	}
}