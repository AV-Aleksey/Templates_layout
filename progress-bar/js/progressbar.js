
$('.progresses-1 .twice.circle').circleProgress({
	value: 0.8,
	size: 150,
	startAngle: 4.7,
	lineCap: "butt", //"round" or "square"
	fill: {
	//gradient: ["red", "orange"]
	color: "#ff1e41"
	}
}).on('circle-animation-progress', function(event, progress) {
$(this).find('strong').html(Math.round(90 * progress) + '<i>%</i>');
});

$('.progresses-2 .twice.circle').circleProgress({
	value: 0.8,
	size: 150,
	startAngle: 4.7,
	fill: {
	//gradient: ["red", "orange"]
	color: "#ff1e41"
	}
}).on('circle-animation-progress', function(event, progress) {
$(this).find('strong').html(Math.round(70 * progress) + '<i>%</i>');
});

$('.progresses-3 .twice.circle').circleProgress({
	value: 0.4,
	size: 150,
	startAngle: 4.7,
	fill: {
	//gradient: ["red", "orange"]
	color: "#ff1e41"
	}
}).on('circle-animation-progress', function(event, progress) {
$(this).find('strong').html(Math.round(40 * progress) + '<i>%</i>');
});

$('.progresses-4 .twice.circle').circleProgress({
	value: 0.8,
	size: 150,
	startAngle: 4.7,
	fill: {
	//gradient: ["red", "orange"]
	color: "#ff1e41"
	}
}).on('circle-animation-progress', function(event, progress) {
$(this).find('strong').html(Math.round(60 * progress) + '<i>%</i>');
});