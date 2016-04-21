var c = document.getElementById("field");
var ctx = c.getContext("2d");

ctx.fillStyle= "#000066";
ctx.strokeStyle = "#000000";
ctx.strokeRect(0,0,c.width,c.height);

var Ball = function() {
    var x = c.width/2;
    var y = c.height/2;

    var incX = function () {x=x+1;}
    var incY = function () {y=y+1;}
    var getX = function() {return x;}
    var getY = function() {return y;}
    var decX = function() {x=x-1;}
    var decY = function() {y=y-1;}

    return {
	incX : incX,
	decX : decX,
	incY : incY,
	decY : decY,
	getX : getX,
	getY : getY
    };
};

var balls = [];

var main = function() {
    console.log("hi");
    var ball1 = Ball();
    var ball2 = Ball();
    balls.push(ball1);
    balls.push(ball2);
    for (i=0; i<balls.length; i++) {
	ctx.beginPath();
	ctx.arc(balls[i].getX(),balls[i].getY(),50,0,2*Math.PI);
	ctx.stroke();
	ctx.fill();
    }
    
  
};


main();
