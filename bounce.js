var c = document.getElementById("field");
var ctx = c.getContext("2d");

ctx.fillStyle= "#000066";
ctx.strokeStyle = "#000000";
ctx.strokeRect(0,0,c.width,c.height);

var Ball = function() {
    //var x = c.width/2;
    var x=Math.floor((Math.random() * 500) + 1);
    //var x =480;
    //var y = c.height/2;
    var y=Math.floor((Math.random() * 500) + 1);

    var dx=5;
    var dy=5;
        
    var incX = function () {x=x+1;}
    var incY = function () {y=y+1;}
    var getX = function() {return x;}
    var getY = function() {return y;}
    var decX = function() {x=x-1;}
    var decY = function() {y=y-1;}

    var draw=function(ex,wy) {
	ctx.beginPath();
	ctx.arc(ex,wy,50,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
    }

    var move = function() {	
	if (x<=0 || x>=500) {
	    console.log('vert edge');
	    dx=dx*-1;
	}
	if (y<=0 || y>=500) {
	    console.log('horiz edge');
	    dy=dy*-1;
	}
	x=x+dx;
	y=y+dy;
	draw(x,y);
    }
	    
    return {
	incX : incX,
	decX : decX,
	incY : incY,
	decY : decY,
	getX : getX,
	getY : getY,
	move : move,
	draw : draw
    };
};

balls=[];
var startMove = function() {
    var animate = function() {
	ctx.clearRect(0, 0, c.width, c.height);
	for (var i=0; i<balls.length; i++) {
	    balls[i].move();
	}
	id=window.requestAnimationFrame(animate);
    }
    var id=window.requestAnimationFrame(animate);
}
