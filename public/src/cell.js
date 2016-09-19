function Cell(x,y,data) {
	this.data = data
	this.color = 10
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
		
		fill(200,this.color,10)
		rect(x,y,w,w)

		fill(0,0,0)
		text(this.data,x+33,y+35)		
		text(txt,x+25,y+55)
		

	}
}