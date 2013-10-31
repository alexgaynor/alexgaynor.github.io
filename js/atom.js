var stage, atomLayer;

var nucleus, electron, orbit;
$(function () {
	stage = new Kinetic.Stage({
		container: 'atom',
		width:300,
		height:300
	});

	var nucImage = new Image();
	nucImage.src = 'images/nucleus.png';

	atomlayer = new Kinetic.Layer();

	nucleus = new Kinetic.Circle({
		x: stage.getWidth() / 2,
		y: stage.getHeight() / 2,
		radius: 10,
		fillPatternImage: nucImage,
		fillPatternRepeat: 'no-repeat',
		fillPatternOffset: [-100, 100],
		fillPatternScale: [1,1],
		scaleX: 1,
		scaleY:1
	});
	atomLayer.add(nucleus);

});