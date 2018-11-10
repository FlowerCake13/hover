var blue = document.getElementById('one');
var pink = document.getElementById('two');
var red = document.getElementById('three');
var btn = document.getElementById('btn')
var text = document.getElementById('display');

var blueobj = {
	startTime: 0,
	endTime: 0,
	elapsedTime: function(){
		return blueobj.endTime-blueobj.startTime
	}
}

var pinkobj = {
	startTime: 0,
	endTime: 0,
	elapsedTime: function(){
		return pinkobj.endTime-pinkobj.startTime
	}
}

var redobj = {
	startTime: 0,
	endTime: 0,
	elapsedTime: function(){
		return redobj.endTime-redobj.startTime
	}
}

blue.addEventListener('mouseover', function(){
	var d = new Date();
	blueobj.startTime = d.getTime();
})

blue.addEventListener('mouseout', function(){
	var d = new Date();
	blueobj.endTime = d.getTime();
})

pink.addEventListener('mouseover', function(){
	var d = new Date();
	pinkobj.startTime = d.getTime();
})

pink.addEventListener('mouseout', function(){
	var d = new Date();
	pinkobj.endTime = d.getTime();
})

red.addEventListener('mouseover', function(){
	var d = new Date();
	redobj.startTime = d.getTime();
})

red.addEventListener('mouseout', function(){
	var d = new Date();
	redobj.endTime = d.getTime();
})

var bluePercent = 0;
var pinkPercent = 0;
var redPercent = 0;

btn.addEventListener('click', function(){
	bluePercent = blueobj.elapsedTime()/(blueobj.elapsedTime() + pinkobj.elapsedTime() + redobj.elapsedTime()) * 100
	pinkPercent = pinkobj.elapsedTime()/(blueobj.elapsedTime() + pinkobj.elapsedTime() + redobj.elapsedTime()) * 100
	redPercent = redobj.elapsedTime()/(blueobj.elapsedTime() + pinkobj.elapsedTime() + redobj.elapsedTime()) * 100
	console.log(bluePercent)
	console.log(pinkPercent)
	console.log(redPercent)
	text.innerHTML = "blue: " + blueobj.elapsedTime() + ' milliseconds' + '<br>' + "pink: " + pinkobj.elapsedTime() + ' milliseconds' + '<br>' + "red: " + redobj.elapsedTime() + ' milliseconds' + '<br>' + "blue's percentage: " + Math.trunc(bluePercent) + '%' + '<br>' + "pink's percentage: " + Math.trunc(pinkPercent) + '%' + '<br>' + "red's percentage: " + Math.trunc(redPercent) + '%'
})