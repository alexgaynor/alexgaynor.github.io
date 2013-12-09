$(function () {
	var left = $('#left');
	var mid = $('#mid');
	var right = $('#right');

	mid.on('click', function () {
		mid.animate({
			width: '800px'
		}, 300);
		left.animate({
			width: '0px',
			'margin-left': '16px'
		}, 300);
		right.animate({
			width: '0px'
		}, 300);
	});

});