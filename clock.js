var secondDegrees = 6;
var minuteDegrees = 6;
var hourDegrees = 30;

var secondCurrent = 0;
var minuteCurrent = 0;
var hourCurrent = 0;


var secondTick = function(){
	console.log('tick sec');
    secondCurrent += secondDegrees;
    var el = document.getElementById("second");
    el.style.transform = "rotate(" + secondCurrent + "deg)";
}

var minuteTick = function(){
	console.log('tick min'); 
    minuteCurrent += minuteDegrees;
    var el = document.getElementById("minute");
    el.style.transform = "rotate(" + minuteCurrent + "deg)";
}

var hourTick = function(){
	console.log('tick hour');
    hourCurrent += hourDegrees;
    var el = document.getElementById("hour");
    el.style.transform = "rotate(" + hourCurrent + "deg)";
}

setInterval(secondTick, 1000);
setInterval(minuteTick, 60000);
setInterval(hourTick, 360000);


