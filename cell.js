function Cell(x,y,data) {
	this.data = data
	this.color = '#BCC0C0'
	this.x = x
	this.y = y 
	this.border = {
		left:true,
		right:true,
		top:true,
		bottom:true
	}

	this.show = function() {
		var x = this.x*w
		var y = this.y*w
		var b = this.border
		var txt = ''
		

		txt = `(${this.x},${this.y})`
		
		fill(this.color)
		rect(x,y,w,w)

		fill(0,0,0)
		text(this.data,x+33,y+35)		
		text(txt,x+25,y+55)
		

		// if (b.left) {
		// 	line(x,y,x,y+w)
		// }

		// if (b.right) {
		// 	line(x+w,y,x+w,y+w)	
		// }
		
		// if (b.top) {
		// 	line(x,y,x+w,y)	
		// }
		
		// if (b.bottom) {
		// 	line(x,y+w,x+w,y+w)	
		// }	
	}
}