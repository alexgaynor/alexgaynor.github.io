var paper = Raphael("scientist", 310, 310);
paper.canvas.style.backgroundColor = '#B5D9E2';
paper.canvas.style.opacity = 0.9;

var origin = {x: 155, y: 155};
var a = 50;
var b = 140;

// var orbit1 = paper.ellipse(155, 155, 50, 140);
// var orbit2 = paper.ellipse(155, 155, 150, 50).rotate(28);
// var orbit3 = paper.ellipse(155, 155, 150, 50).rotate(-28);
var nucleus = paper.circle(155, 155, 30);

var electron1 = paper.circle(155, 295, 5);
var electron2 = paper.circle(30, 105, 5);
var electron2 = paper.circle(280, 105, 5);


var ellipse1 = "M" + (origin.x - a) + "," + origin.y + " a " + a + "," + b + " 0 1,1 0,0.1";
var ellipse2 =  "M" + (origin.x - a) + "," + origin.y + " a " + a + "," + b + " 0 1,1 0,0.1";
var ellipse3 =  "M" + (origin.x - a) + "," + origin.y + " a " + a + "," + b + " 0 1,1 0,0.1";
var orbit1Path = paper.path(ellipse1);
var orbit2Path = paper.path(ellipse2).rotate(62);
var orbit3Path = paper.path(ellipse3).rotate(-62);

Raphael.el.animateAlong = function(path, duration, easing, callback) {
    var element = this;
    element.path = path;
    element.pathLen = element.path.getTotalLength();
    duration = (typeof duration === "undefined") ? 5000 : duration;
    easing = (typeof easing === "undefined") ? "linear" : duration;

    //create an "along" function to take a variable from zero to 1 and return coordinates. Note we're using cx and cy specifically for a circle    
paper.customAttributes.along = function(v) {
		var point = this.path.getPointAtLength(v * this.pathLen),
			attrs = {
				cx: point.x,
				cy: point.y 
			};

			this.rotateWith && (attrs.transform = 'r'+point.alpha);
			return attrs;
	};
    
    element.attr({along: 0 }).animate({along: 1}, duration, easing, function() {
		callback && callback.call(element);
	});
};
$(document).ready(function () {
	electron1.animateAlong(orbit1Path, 2000);
	// electron1.animateAlong(orbit1Path, 2000);
	// electron2.animateAlong(orbit2Path, 2000);



});
