var c = document.getElementById("field");
var ctx = c.getContext("2d")


var ball = function() {
    var x = 0;
    var y = 0;

    var incX = function () {
	x=x+1;
    }
    var incY = function () {
	y=y+1;
    }
    var getX = function() {
	return x;
    }
    var getY = function() {
	return y;
    }
    var decX = function() {
	x=x-1;
    }
    var decY = function() {
	y=y-1;
    }

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
    var ball1 = ball();
