var x = 0;
var ran = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
var garden = "garden";
garden = garden.concat(ran.toString());
var img = document.getElementById(garden);

var cuts = 0;
var iCut = 0;
var kCut = 0;
var y = 0;
var jCut1 = 0;
var jCut2 = 0;

//three slices 2 trims variables	
    var sliceA = 0;
	var sliceB = 0;
	var sliceC = 0;
	var sliceD = 0;
	var jThird = 0;
	var i = 0;
	var k = 0;
	var j = 0;
	var l =0;
	var n = 0;
	var m = 0;

function slice(start, end){
	this.start = start;
	this.end = end;
	
}

function compareFunction(a, b){return a-b}

var slice = [new slice(0,0),new slice(0,0),new slice(0,0),new slice(0,0)];

var theCuts = [0,0,0];

$("#slider28").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        y = leftValue;
        var trythis = document.getElementById("coverCanvas32");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,y*3,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(y*3,0);
		ctx.lineTo(y*3,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider27").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas31");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*3,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*3,0);
		ctx.lineTo(x*3,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider26").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        y = leftValue;
        var trythis = document.getElementById("coverCanvas30");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,y*3,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(y*3,0);
		ctx.lineTo(y*3,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider25").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas29");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*3,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*3,0);
		ctx.lineTo(x*3,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider24").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas28");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider23").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas27");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider22").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas26");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider21").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas25");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider20").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas24");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider19").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas23");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});
$("#slider18").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas22");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider17").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas21");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider16").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas20");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider15").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas19");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider33").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        y = leftValue;
		
		var trythisone = document.getElementById("coverCanvas18");
		var ctx2 = trythisone.getContext("2d");
		ctx2.clearRect(0, 0, trythisone.width, trythisone.height);
		ctx2.globalAlpha = 0.5;
		ctx2.rect(0,0,y*3,trythisone.height);
		ctx2.lineWidth = 0;
		ctx2.fillStyle = '#eee';
		ctx2.fill();
		
		ctx2.globalAlpha = 1;
		ctx2.beginPath();
		ctx2.moveTo(y*3,0);
		ctx2.lineTo(y*3,150);
        ctx2.lineWidth = 2;

      // set line color
        ctx2.strokeStyle = '#ff0000';
		ctx2.stroke();
    }
});



$("#slider13").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas16");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider12").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas15");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider11").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas14");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider10").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas13");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider9").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas12");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider8").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas11");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider14").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
		var trythis = document.getElementById("coverCanvas17");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*3,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*3,0);
		ctx.lineTo(x*3,150);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
	}
});

$("#slider7").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
		var trythis = document.getElementById("coverCanvas9");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*3,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*3,0);
		ctx.lineTo(x*3,150);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
    }
});


$("#slider32").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",

    "value_changed_callback": function(cause, leftValue, rightValue) {
        y = leftValue;
		
		var trythisone = document.getElementById("coverCanvas10");
		var ctx2 = trythisone.getContext("2d");
		ctx2.clearRect(0, 0, trythisone.width, trythisone.height);
		ctx2.globalAlpha = 0.5;
		ctx2.rect(0,0,y*3,trythisone.height);
		ctx2.lineWidth = 0;
		ctx2.fillStyle = '#eee';
		ctx2.fill();
		
		ctx2.globalAlpha = 1;
		ctx2.beginPath();
		ctx2.moveTo(y*3,0);
		ctx2.lineTo(y*3,150);
        ctx2.lineWidth = 2;

      // set line color
        ctx2.strokeStyle = '#ff0000';
		ctx2.stroke();
    }
});

$("#slider31").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        y = leftValue;
		
		var trythisone = document.getElementById("coverCanvas8");
		var ctx2 = trythisone.getContext("2d");
		ctx2.clearRect(0, 0, trythisone.width, trythisone.height);
		ctx2.globalAlpha = 0.5;
		ctx2.rect(0,0,y*3,trythisone.height);
		ctx2.lineWidth = 0;
		ctx2.fillStyle = '#eee';
		ctx2.fill();
		
		ctx2.globalAlpha = 1;
		ctx2.beginPath();
		ctx2.moveTo(y*3,0);
		ctx2.lineTo(y*3,150);
        ctx2.lineWidth = 2;

      // set line color
        ctx2.strokeStyle = '#ff0000';
		ctx2.stroke();
    }
});

$("#slider6").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
		var trythis = document.getElementById("coverCanvas7");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*3,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*3,0);
		ctx.lineTo(x*3,150);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
    }
});

$("#slider30").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        y = leftValue;
		
		var trythisonehere = document.getElementById("coverCanvas6");
		var ctx2y = trythisonehere.getContext("2d");
		ctx2y.clearRect(0, 0, trythisonehere.width, trythisonehere.height);
		ctx2y.globalAlpha = 0.5;
		ctx2y.rect(0,0,y*3,trythisonehere.height);
		ctx2y.lineWidth = 0;
		ctx2y.fillStyle = '#eee';
		ctx2y.fill();
		
		ctx2y.globalAlpha = 1;
		ctx2y.beginPath();
		ctx2y.moveTo(y*3,0);
		ctx2y.lineTo(y*3,150);
        ctx2y.lineWidth = 2;

      // set line color
        ctx2y.strokeStyle = '#ff0000';
		ctx2y.stroke();
    }
});

$("#slider5").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
		var trythishere = document.getElementById("coverCanvas5");
		var ctxy = trythishere.getContext("2d");
		ctxy.clearRect(0, 0, trythishere.width, trythishere.height);
		ctxy.globalAlpha = 0.5;
		ctxy.rect(0,0,x*3,trythishere.height);
		ctxy.lineWidth = 0;
		ctxy.fillStyle = '#eee';
		ctxy.fill();
		
		ctxy.globalAlpha = 1;
		ctxy.beginPath();
		ctxy.moveTo(x*3,0);
		ctxy.lineTo(x*3,150);
        ctxy.lineWidth = 2;

      // set line color
        ctxy.strokeStyle = '#ff0000';
		ctxy.stroke();
    }
});

$("#slider29").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        y = leftValue;
		var trythisone = document.getElementById("coverCanvas4");
		var ctx2 = trythisone.getContext("2d");
		ctx2.clearRect(0, 0, trythisone.width, trythisone.height);
		ctx2.globalAlpha = 0.5;
		ctx2.rect(0,0,y*3,trythisone.height);
		ctx2.lineWidth = 0;
		ctx2.fillStyle = '#eee';
		ctx2.fill();
		
		ctx2.globalAlpha = 1;
		ctx2.beginPath();
		ctx2.moveTo(y*3,0);
		ctx2.lineTo(y*3,150);
        ctx2.lineWidth = 2;

      // set line color
        ctx2.strokeStyle = '#ff0000';
		ctx2.stroke();
		
    }
});

$("#slider4").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
		var trythis = document.getElementById("coverCanvas3");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*3,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*3,0);
		ctx.lineTo(x*3,150);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider2").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("coverCanvas");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider3").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis2 = document.getElementById("coverCanvas2");
		var ctx = trythis2.getContext("2d");
		ctx.clearRect(0, 0, trythis2.width, trythis2.height);
		ctx.globalAlpha = 0.5;
		ctx.rect(0,0,x*4,trythis2.height);
		ctx.lineWidth = 0;
		ctx.fillStyle = '#eee';
		ctx.fill();
		ctx.globalAlpha = 1;
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

$("#slider1").find('.nstSlider').nstSlider({
    "left_grip_selector": ".leftGrip",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        x = leftValue;
        var trythis = document.getElementById("secondCanvas");
		var ctx = trythis.getContext("2d");
		ctx.clearRect(0, 0, trythis.width, trythis.height);
		ctx.beginPath();
		ctx.moveTo(x*4,0);
		ctx.lineTo(x*4,200);
        ctx.lineWidth = 2;

      // set line color
        ctx.strokeStyle = '#ff0000';
		ctx.stroke();
		
    }
});

function start(){
	
	var thisone = document.getElementById("firstCanvas");
	var ctx = thisone.getContext("2d");

	ctx.drawImage(img,0,0, thisone.width, thisone.height);
	
	var template = document.getElementById("shellCanvas");
	var ctx = template.getContext("2d");
	
	document.querySelector('.user4alloc2').innerHTML = "User 4, below is your slice";
	document.querySelector('.user4alloc3').innerHTML = "User 4, below is your slice";
	document.querySelector('.user4alloc4').innerHTML = "User 4, below is your slice";
	document.querySelector('.user4alloc5').innerHTML = "User 4, below is your slice";
	document.querySelector('.user4alloc6').innerHTML = "User 4, below is your slice";
	document.querySelector('.user4alloc7').innerHTML = "User 4, below is your slice";
	document.querySelector('.user1alloc2').innerHTML = "User 1, below is your slice";
	document.querySelector('.user2alloc2').innerHTML = "User 2, below is your slice";
	document.querySelector('.user3alloc2').innerHTML = "User 3, below is your slice";
	document.querySelector('.user1same').innerHTML = "User 1, trim your preferred slice to match your second-most preferred";
	document.querySelector('.user2same').innerHTML = "User 2, trim your preferred slice to match your second-most preferred";
	document.querySelector('.user3same').innerHTML = "User 3, trim your preferred slice to match your second-most preferred";
	document.querySelector('.user1').innerHTML = "User 1, click on the slices to rank them, starting with your most preferred";
	document.querySelector('.user2').innerHTML = "User 2, click on the slices to rank them, starting with your most preferred";
	document.querySelector('.user3').innerHTML = "User 3, click on the slices to rank them, starting with your most preferred";
	document.querySelector('.user4').innerHTML = "User 4, using the slider cut the garden three times, so as to separate it into 4 pieces that you value equally";
	document.querySelector('.user1twoslices').innerHTML = "User 1, using the slider, trim your two most preferred slices so they match your third-most preferred slice";
	document.querySelector('.user2twoslices').innerHTML = "User 2, using the slider, trim your two most preferred slices so they match your third-most preferred slice";
	document.querySelector('.user3twoslices').innerHTML = "User 3, using the slider, trim your two most preferred slices so they match your third-most preferred slice";
	document.querySelector('.user1diff').innerHTML = "User 1, this is your slice";
	document.querySelector('.user2diff').innerHTML = "User 2, this is your slice";
	document.querySelector('.user3diff').innerHTML = "User 3, this is your slice";
	document.querySelector('.user4diff').innerHTML = "User 4, this is your slice";
	
}

function cut(){
	theCuts[cuts] = x;
	cuts = cuts +1;
	if (cuts == 3){
		div = document.getElementById('hide')
		div.style.display = "block";
		theCuts.sort(compareFunction);
	    slice[0].end = theCuts[0];
		slice[1].start = theCuts[0];
		slice[1].end = theCuts[1];
		slice[2].start = theCuts[1];
		slice[2].end = theCuts[2];
		slice[3].start = theCuts[2];
		slice[3].end = 100;
		userranks("1");
	
	}
	var trythis = document.getElementById("thirdCanvas");
	var ctx = trythis.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(x*4,0);
	ctx.lineTo(x*4,200);
    ctx.lineWidth = 2;

      // set line color
    ctx.strokeStyle = '#ff0000';
	ctx.stroke();
	
	
}

function userranks(user){
	var a=document.getElementById("ranking"+ user +"1");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
    ctxa.rect(0,0,slice[0].start*3,a.height);
    ctxa.lineWidth = 0;
    ctxa.fillStyle = '#FFFFFF';
    ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[0].end*3,0,a.width,a.height);
    ctxa.lineWidth = 0;
    ctxa.fillStyle = '#FFFFFF';
    ctxa.fill();
    ctxa.stroke();
	
	var b=document.getElementById("ranking"+ user +"2");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
    ctxb.rect(0,0,slice[1].start*3,b.height);
    ctxb.lineWidth = 0;
    ctxb.fillStyle = '#FFFFFF';
    ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[1].end*3,0,b.width,b.height);
    ctxb.lineWidth = 0;
    ctxb.fillStyle = '#FFFFFF';
    ctxb.fill();
    ctxb.stroke();
	
	var c=document.getElementById("ranking"+ user +"3");
	var ctxc=c.getContext("2d");
	ctxc.drawImage(img, 0, 0, c.width, c.height);
    ctxc.rect(0,0,slice[2].start*3,c.height);
    ctxc.lineWidth = 0;
    ctxc.fillStyle = '#FFFFFF';
    ctxc.fill();
	ctxc.stroke()
	ctxc.rect(slice[2].end*3,0,c.width,c.height);
    ctxc.lineWidth = 0;
    ctxc.fillStyle = '#FFFFFF';
    ctxc.fill();
    ctxc.stroke();
	
	var d=document.getElementById("ranking"+ user +"4");
	var ctxd=d.getContext("2d");
	ctxd.drawImage(img, 0, 0, d.width, d.height);
    ctxd.rect(0,0,slice[3].start*3,d.height);
    ctxd.lineWidth = 0;
    ctxd.fillStyle = '#FFFFFF';
    ctxd.fill();
	ctxd.stroke()
	ctxd.rect(slice[3].end*3,0,d.width,d.height);
    ctxd.lineWidth = 0;
    ctxd.fillStyle = '#FFFFFF';
    ctxd.fill();
    ctxd.stroke();
}
var counter1 = 0;
var counter2 = 0;
var counter3 = 0;

user1preference = [0,0,0,0];
user2preference = [0,0,0,0];
user3preference = [0,0,0,0];


function rank(user, slice){
	
	if (user ==1){
		var a=document.getElementById("ranking"+user.toString()+slice.toString());
		var ctxa=a.getContext("2d");
		ctxa.globalAlpha = 0.5;
		ctxa.rect(0, 0, a.width, a.height);
		ctxa.lineWidth = 0;
		ctxa.fillStyle = '#007F00';
		ctxa.fill();
		ctxa.stroke;
		ctxa.font = "100px Arial";
		ctxa.fillStyle = '#000000';
		ctxa.textAlign = 'center';
		ctxa.fillText((counter1+1).toString(), (a.width / 2), 110 );
		if(counter1 <4){
			user1preference[counter1] = slice;
		}
		counter1++
		if (counter1 == 4){
			div = document.getElementById('hide2')
		    div.style.display = "block";
			userranks("2");
		}
	}	
	if (user ==2){
		var a=document.getElementById("ranking"+user.toString()+slice.toString());
		var ctxa=a.getContext("2d");
		ctxa.globalAlpha = 0.5;
		ctxa.rect(0, 0, a.width, a.height);
		ctxa.lineWidth = 0;
		ctxa.fillStyle = '#007F00';
		ctxa.fill();
		ctxa.stroke;
		ctxa.font = "100px Arial";
		ctxa.fillStyle = '#000000';
		ctxa.textAlign = 'center';
		ctxa.fillText((counter2+1).toString(), (a.width / 2), 110 );
		if(counter2 <4){
			user2preference[counter2] = slice;
		}
     	counter2++
		if (counter2 == 4){
			div = document.getElementById('hide3')
		    div.style.display = "block";
			userranks("3");
		}
	}
	if (user ==3){
		var a=document.getElementById("ranking"+user.toString()+slice.toString());
		var ctxa=a.getContext("2d");
		ctxa.globalAlpha = 0.5;
		ctxa.rect(0, 0, a.width, a.height);
		ctxa.lineWidth = 0;
		ctxa.fillStyle = '#007F00';
		ctxa.fill();
		ctxa.stroke;
		ctxa.font = "100px Arial";
		ctxa.fillStyle = '#000000';
		ctxa.textAlign = 'center';
		ctxa.fillText((counter3+1).toString(), (a.width / 2), 110 );
		if(counter3 <4){
			user3preference[counter3] = slice;
		}
		counter3++
		if (counter3 == 4){
			letsanalyse();
		}
	}
}
var slicecuts = [[], [], [], []];

function letsanalyse(){
	slicecuts[user1preference[0]-1].push(1);
	slicecuts[user1preference[1]-1].push(1);
	slicecuts[user2preference[0]-1].push(2);
	slicecuts[user2preference[1]-1].push(2);
	slicecuts[user3preference[0]-1].push(3);
	slicecuts[user3preference[1]-1].push(3);

	
	if((user1preference[0] != user2preference[0])&&(user2preference[0] != user3preference[0])&&(user1preference[0] != user3preference[0])){
		differentpreferences();
	}else{
	var counterOfThree = 0;
	var counter = 0;
	while(counter <4){
		if (slicecuts[counter].length == 3){
			counterOfThree++;
		}
		counter++;
	}
	var counterOfTwo = 0;
	var counter = 0;
	while(counter <4){
		if (slicecuts[counter].length == 2){
			counterOfTwo++;
		}
		counter++;
	}
	
	var counterOfOne = 0;
	var counter = 0;
	while(counter <4){
		if (slicecuts[counter].length == 1){
			counterOfOne++;
		}
		counter++;
	}
	if(counterOfTwo == 3 ){
		threeSlicesTwoTrim();
	}else{
		if(counterOfThree == 2){
			twoSlicesThreeTrim();
		}else{
			if(counterOfOne ==1){
				oneSliceOneTrim();
			}else{
				if(counterOfOne == 2){
					twoSlicesOneTrim();
				}else{
					if(counterOfOne == 3){
						threeSlicesOneTrim();
					}
				}
			}
		}
	}
	}	
}

function differentpreferences(){
	div = document.getElementById('differentPreferences')
	div.style.display = "block";
	
	finalAlloc((user1preference[0] -1),(user2preference[0] -1),(user3preference[0] -1), ((10 -user1preference[0] -user2preference[0]-user3preference[0])-1),  "user1", "user2", "user3", "user4")
}

function threeSlicesTwoTrim(){
	div = document.getElementById('threeSlicesTwoTrim')
	div.style.display = "block";
	//here we are considering the case i1j1|j2k1|i2k2 we shall call those slices respectively slices a b and c going forward
	if (user1preference[0] == user2preference[0]){
		sliceA = user1preference[0];
		k = 3;
		sliceB = user3preference[0];
		sliceC = user3preference[1];
		if (sliceC == user1preference[1]){
			i = 1;
		    j = 2;
			jThird = user2preference[2];
		}else{
			i = 2;
			j = 1;
			jThird = user1preference[2];
		}
	}
	if (user1preference[0] == user3preference[0]){
		sliceA = user1preference[0];
		k = 2;
		sliceB = user2preference[0];
		sliceC = user2preference[1];
		if (sliceC == user1preference[1]){
			i = 1;
		    j = 3;
			jThird = user3preference[2];
		}else{
			i = 3;
			j = 1;
			jThird = user1preference[2];
		}
	}
	if (user2preference[0] == user3preference[0]){
		sliceA = user2preference[0];
		k = 1;
		sliceB = user1preference[0];
		sliceC = user1preference[1];
		if (sliceC == user2preference[1]){
			i = 2;
		    j = 3;
			jThird = user3preference[2];
		}else{
			i = 3;
			j = 2;
			jThird = user2preference[2];
		}
	} 
	//now the different variables have been allocated to their appropriate bodies
	document.querySelector('.trimMe1').innerHTML = 'User ' + i + ", trim your preferred slice to match your second-most preferred"
	
	var a=document.getElementById("userITrim1");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
    ctxa.rect(0,0,slice[sliceA-1].start*4,a.height);
    ctxa.lineWidth = 0;
    ctxa.fillStyle = '#FFFFFF';
    ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceA-1].end*4,0,a.width,a.height);
    ctxa.lineWidth = 0;
    ctxa.fillStyle = '#FFFFFF';
    ctxa.fill();
    ctxa.stroke();
	
	var b=document.getElementById("userITrim2");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
    ctxb.rect(0,0,slice[sliceC-1].start*4,b.height);
    ctxb.lineWidth = 0;
    ctxb.fillStyle = '#FFFFFF';
    ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceC-1].end*4,0,b.width,b.height);
    ctxb.lineWidth = 0;
    ctxb.fillStyle = '#FFFFFF';
    ctxb.fill();
    ctxb.stroke();
	
	//display the cuts for k
	
	document.querySelector('.trimMe2').innerHTML = 'User ' + k + ", trim your preferred slice to match your second preferred"
	
	var c=document.getElementById("userKTrim1");
	var ctxc=c.getContext("2d");
	ctxc.drawImage(img, 0, 0, c.width, c.height);
    ctxc.rect(0,0,slice[sliceB-1].start*4,c.height);
    ctxc.lineWidth = 0;
    ctxc.fillStyle = '#FFFFFF';
    ctxc.fill();
	ctxc.stroke()
	ctxc.rect(slice[sliceB-1].end*4,0,c.width,c.height);
    ctxc.lineWidth = 0;
    ctxc.fillStyle = '#FFFFFF';
    ctxc.fill();
    ctxc.stroke();
	
	var d=document.getElementById("userKTrim2");
	var ctxd=d.getContext("2d");
	ctxd.drawImage(img, 0, 0, d.width, d.height);
    ctxd.rect(0,0,slice[sliceC-1].start*4,d.height);
    ctxd.lineWidth = 0;
    ctxd.fillStyle = '#FFFFFF';
    ctxd.fill();
	ctxd.stroke()
	ctxd.rect(slice[sliceC-1].end*4,0,d.width,d.height);
    ctxd.lineWidth = 0;
    ctxd.fillStyle = '#FFFFFF';
    ctxd.fill();
    ctxd.stroke();
	
	//display cuts for j
	
	document.querySelector('.trimMe3').innerHTML = 'User ' + j + ", trim your two preferred slices to match your third-most preferred"
	var e=document.getElementById("userJTrim1");
	var ctxe=e.getContext("2d");
	ctxe.drawImage(img, 0, 0, e.width, e.height);
    ctxe.rect(0,0,slice[sliceA-1].start*3,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
	ctxe.stroke()
	ctxe.rect(slice[sliceA-1].end*3,0,e.width,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
    ctxe.stroke();
	
	var f=document.getElementById("userJTrim2");
	var ctxf=f.getContext("2d");
	ctxf.drawImage(img, 0, 0, f.width, f.height);
    ctxf.rect(0,0,slice[sliceB-1].start*3,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
	ctxf.stroke()
	ctxf.rect(slice[sliceB-1].end*3,0,f.width,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
    ctxf.stroke();
	
	var g=document.getElementById("userJTrim3");
	var ctxg=g.getContext("2d");
	ctxg.drawImage(img, 0, 0, g.width, g.height);
    ctxg.rect(0,0,slice[jThird-1].start*3,f.height);
    ctxg.lineWidth = 0;
    ctxg.fillStyle = '#FFFFFF';
    ctxg.fill();
	ctxg.stroke()
	ctxg.rect(slice[jThird-1].end*3,0,f.width,f.height);
    ctxg.lineWidth = 0;
    ctxg.fillStyle = '#FFFFFF';
    ctxg.fill();
    ctxg.stroke();
	
}

function threeSlices2TrimCut1(){
	iCut = x;
	div = document.getElementById('hide4');
	div.style.display = "block";
}

function threeSlices2TrimCut2(){
	kCut = x;
	div = document.getElementById('hide5');
	div.style.display = "block";
}

function threeSlices2TrimCut3(){
	jCut1 = x;
	jCut2 = y;
	document.querySelector('.iSlice').innerHTML = 'User ' + i + " below is your slice"
	document.querySelector('.jSlice').innerHTML = 'User ' + j + " below is your slice"
	document.querySelector('.kSlice').innerHTML = 'User ' + k + " below is your slice"
	if ((jCut1>iCut) && (jCut2 <kCut)){
		div = document.getElementById('hide6');
		div.style.display = "block";
		slice[sliceA-1].start = iCut;
		slice[sliceB-1].start = jCut2;
		finalAlloc(sliceC-1, sliceB-1, sliceA-1, ((10-sliceA-sliceB-sliceC)-1), "threeTwo1", "threeTwo2", "threeTwo3", "threeTwo4");
	}
	if ((jCut1<iCut) && (jCut2 <kCut)){
		div = document.getElementById('hide6');
		div.style.display = "block";
		slice[sliceA-1].start = jCut1;
		slice[sliceB-1].start = jCut2;
		finalAlloc(sliceA-1, sliceB-1, jThird-1, ((10-sliceA-sliceB-jThird)-1), "threeTwo1", "threeTwo2", "threeTwo3", "threeTwo4");
	}
	if ((jCut1<iCut) && (jCut2 >kCut)){
		div = document.getElementById('hide6');
	    div.style.display = "block";
		slice[sliceA-1].start = jCut1;
		slice[sliceB-1].start = kCut;
		finalAlloc(sliceA-1, sliceC-1, sliceB-1, ((10-sliceA-sliceB-sliceC)-1), "threeTwo1", "threeTwo2", "threeTwo3", "threeTwo4");
	}
	if ((jCut1>iCut)&& (jCut2>kCut)){
		div = document.getElementById("hide7");
		div.style.display = "block";
		
		slice[sliceA-1].start= iCut;
		slice[sliceB-1].start = kCut;
		
		var a=document.getElementById("jChoose1");
		var ctxa=a.getContext("2d");
		ctxa.drawImage(img, 0, 0, a.width, a.height);
		ctxa.rect(0,0,slice[sliceA-1].start*4,a.height);
		ctxa.lineWidth = 0;
		ctxa.fillStyle = '#FFFFFF';
		ctxa.fill();
		ctxa.stroke()
		ctxa.rect(slice[sliceA-1].end*4,0,a.width,a.height);
		ctxa.lineWidth = 0;
		ctxa.fillStyle = '#FFFFFF';
		ctxa.fill();
		ctxa.stroke();
		
		var b=document.getElementById("userITrim2");
		var ctxb=b.getContext("2d");
		ctxb.drawImage(img, 0, 0, b.width, b.height);
		ctxb.rect(0,0,slice[sliceB-1].start*4,b.height);
		ctxb.lineWidth = 0;
		ctxb.fillStyle = '#FFFFFF';
		ctxb.fill();
		ctxb.stroke()
		ctxb.rect(slice[sliceB-1].end*4,0,b.width,b.height);
		ctxb.lineWidth = 0;
		ctxb.fillStyle = '#FFFFFF';
		ctxb.fill();
		ctxb.stroke();
	}
	
}

function jChoose(allocateMe){
	div = document.getElementById('hide6');
	div.style.display = "block";
	if (allocateMe== 1){
		finalAlloc(sliceC-1,sliceA-1, sliceB-1, (10-sliceC-sliceA-sliceB)-1, "threeTwo1", "threeTwo2", "threeTwo3", "threeTwo4")
	}
	if (allocateMe == 2){
		finalAlloc(sliceA-1,sliceB-1, sliceA-1, (10-sliceC-sliceA-sliceB)-1, "threeTwo1", "threeTwo2", "threeTwo3", "threeTwo4")
	}
}

function twoSlicesThreeTrim(){
	div = document.getElementById('twoSlicesThreeTrim');
	div.style.display = "block";
	
	sliceA = user1preference[0];
	sliceB = user1preference[1];
	//user1 trims two slices
	
	var e=document.getElementById("user1TrimA");
	var ctxe=e.getContext("2d");
	ctxe.drawImage(img, 0, 0, e.width, e.height);
    ctxe.rect(0,0,slice[sliceA-1].start*3,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
	ctxe.stroke()
	ctxe.rect(slice[sliceA-1].end*3,0,e.width,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
    ctxe.stroke();
	
	var f=document.getElementById("user1TrimB");
	var ctxf=f.getContext("2d");
	ctxf.drawImage(img, 0, 0, f.width, f.height);
    ctxf.rect(0,0,slice[sliceB-1].start*3,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
	ctxf.stroke()
	ctxf.rect(slice[sliceB-1].end*3,0,f.width,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
    ctxf.stroke();
	
	var g=document.getElementById("user1TrimC");
	var ctxg=g.getContext("2d");
	ctxg.drawImage(img, 0, 0, g.width, g.height);
    ctxg.rect(0,0,slice[user1preference[2]-1].start*3,f.height);
    ctxg.lineWidth = 0;
    ctxg.fillStyle = '#FFFFFF';
    ctxg.fill();
	ctxg.stroke()
	ctxg.rect(slice[user1preference[2]-1].end*3,0,f.width,f.height);
    ctxg.lineWidth = 0;
    ctxg.fillStyle = '#FFFFFF';
    ctxg.fill();
    ctxg.stroke();
}
var oneTrimA =0;
var oneTrimB = 0;
var twoTrimA = 0;
var twoTrimB = 0;
var threeTrimA = 0;
var threeTrimA = 0;

function twoSlicesThreeTrim1(){
	oneTrimA = x;
	oneTrimB = y;
	
	div = document.getElementById('twoSlicesThreeTrim2');
	div.style.display = "block";
	//user1 trims two slices
	
	var e=document.getElementById("user2TrimA");
	var ctxe=e.getContext("2d");
	ctxe.drawImage(img, 0, 0, e.width, e.height);
    ctxe.rect(0,0,slice[sliceA-1].start*3,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
	ctxe.stroke()
	ctxe.rect(slice[sliceA-1].end*3,0,e.width,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
    ctxe.stroke();
	
	var f=document.getElementById("user2TrimB");
	var ctxf=f.getContext("2d");
	ctxf.drawImage(img, 0, 0, f.width, f.height);
    ctxf.rect(0,0,slice[sliceB-1].start*3,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
	ctxf.stroke()
	ctxf.rect(slice[sliceB-1].end*3,0,f.width,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
    ctxf.stroke();
	
	var g=document.getElementById("user2TrimC");
	var ctxg=g.getContext("2d");
	ctxg.drawImage(img, 0, 0, g.width, g.height);
    ctxg.rect(0,0,slice[user2preference[2]-1].start*3,f.height);
    ctxg.lineWidth = 0;
    ctxg.fillStyle = '#FFFFFF';
    ctxg.fill();
	ctxg.stroke()
	ctxg.rect(slice[user2preference[2]-1].end*3,0,f.width,f.height);
    ctxg.lineWidth = 0;
    ctxg.fillStyle = '#FFFFFF';
    ctxg.fill();
    ctxg.stroke();
}

function twoSlicesThreeTrim2(){
	twoTrimA = x;
	twoTrimB = y;
	
	div = document.getElementById('twoSlicesThreeTrim3');
	div.style.display = "block";
	//user1 trims two slices
	
	var e=document.getElementById("user3TrimA");
	var ctxe=e.getContext("2d");
	ctxe.drawImage(img, 0, 0, e.width, e.height);
    ctxe.rect(0,0,slice[sliceA-1].start*3,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
	ctxe.stroke()
	ctxe.rect(slice[sliceA-1].end*3,0,e.width,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
    ctxe.stroke();
	
	var f=document.getElementById("user3TrimB");
	var ctxf=f.getContext("2d");
	ctxf.drawImage(img, 0, 0, f.width, f.height);
    ctxf.rect(0,0,slice[sliceB-1].start*3,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
	ctxf.stroke()
	ctxf.rect(slice[sliceB-1].end*3,0,f.width,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
    ctxf.stroke();
	
	var g=document.getElementById("user3TrimC");
	var ctxg=g.getContext("2d");
	ctxg.drawImage(img, 0, 0, g.width, g.height);
    ctxg.rect(0,0,slice[user3preference[2]-1].start*3,f.height);
    ctxg.lineWidth = 0;
    ctxg.fillStyle = '#FFFFFF';
    ctxg.fill();
	ctxg.stroke()
	ctxg.rect(slice[user2preference[2]-1].end*3,0,f.width,f.height);
    ctxg.lineWidth = 0;
    ctxg.fillStyle = '#FFFFFF';
    ctxg.fill();
    ctxg.stroke();
}

function twoSlicesThreeTrim3(){
	threeTrimA = x;
	threeTrimB = y;
	//here we set i j and k to be the leftmost, middle and rightmost cutters of slice A
	if ((oneTrimA<twoTrimA)&&(oneTrimA<threeTrimA)){
		i = 1;
		if (twoTrimA<threeTrimA){
			slice[sliceA-1].start = twoTrimA;
			j= 2;
			k=3;
		}else{
			slice[sliceA-1].start = threeTrimA;
			j= 3;
			k=2;
		}
	}else{
		if(twoTrimA<threeTrimA){
			i= 2;
			if (threeTrimA<oneTrimA){
				slice[sliceA-1].start = threeTrimA;
				j=3;
				k=1;
			}else{
				slice[sliceA-1].start = oneTrimA;
				j=1;
				k=3;
			}
		}else{
			i=3;
			if (oneTrimA<twoTrimA){
				slice[sliceA-1].start = oneTrimA;
				j=1;
				k=2;
			}else{
				slice[sliceA-1].start = twoTrimA;
				j=2;
				k = 1;
			}
		}
	}
	//allocation of i j and k over
	//do the same on slice B with l m and n
	
	if ((oneTrimB<twoTrimB)&&(oneTrimB<threeTrimB)){
		l = 1;
		if (twoTrimB<threeTrimB){
			slice[sliceB-1].start = twoTrimB;
			m= 2;
			n=3;
		}else{
			slice[sliceB-1].start = threeTrimB;
			m= 3;
			n=2;
		}
	}else{
		if(twoTrimB<threeTrimB){
			l= 2;
			if (threeTrimB<oneTrimB){
				slice[sliceB-1].start = threeTrimB;
				m=3;
				n=1;
			}else{
				slice[sliceB-1].start = oneTrimB;
				m=1;
				n=3;
			}
		}else{
			l=3;
			if (oneTrimB<twoTrimB){
				slice[sliceB-1].start = oneTrimB;
				m=1;
				n=2;
			}else{
				slice[sliceB-1].start = twoTrimB;
				m=2;
				n = 1;
			}
		}
	}
	//second allocation over 
	if (k != n){
		div = document.getElementById('finalAllocation');
		div.style.display = "block";
		var other = 6-k-n;
		var otherSlice = 0;
		if (other == 1){
			otherSlice = user1preference[2];
		}else{
			if(other==2){
				otherSlice = user2preference[2];
			}else{
				otherSlice = user3preference[2];
			}
		}
		document.querySelector('.nSlice').innerHTML = 'User ' + n + " below is your slice"
		document.querySelector('.otherSlice').innerHTML = 'User ' + other + " below is your slice"
		document.querySelector('.kSlice').innerHTML = 'User ' + k + " below is your slice"
		finalAlloc(sliceB-1, sliceA-1, otherSlice-1, (10-sliceA-sliceB-otherSlice)-1, 'twoThree1', 'twoThree2', 'twoThree3', 'twoThree4');
		
	}else{
		div = document.getElementById('kNeed');
		div.style.display = "block";
		
		var f=document.getElementById("kChooseA");
		var ctxf=f.getContext("2d");
		ctxf.drawImage(img, 0, 0, f.width, f.height);
		ctxf.rect(0,0,slice[sliceA-1].start*4,f.height);
		ctxf.lineWidth = 0;
		ctxf.fillStyle = '#FFFFFF';
		ctxf.fill();
		ctxf.stroke()
		ctxf.rect(slice[sliceA-1].end*4,0,f.width,f.height);
		ctxf.lineWidth = 0;
		ctxf.fillStyle = '#FFFFFF';
		ctxf.fill();
		ctxf.stroke();
		
		var g=document.getElementById("kChooseB");
		var ctxg=g.getContext("2d");
		ctxg.drawImage(img, 0, 0, g.width, g.height);
		ctxg.rect(0,0,slice[sliceB-1].start*4,f.height);
		ctxg.lineWidth = 0;
		ctxg.fillStyle = '#FFFFFF';
		ctxg.fill();
		ctxg.stroke()
		ctxg.rect(slice[sliceB-1].end*4,0,f.width,f.height);
		ctxg.lineWidth = 0;
		ctxg.fillStyle = '#FFFFFF';
		ctxg.fill();
		ctxg.stroke();
	}
}

function kChosen(chosen){
	
	div = document.getElementById('finalAllocation');
	div.style.display = "block";
	if (chosen ==1){
		var other = 6-k-m;
		var otherSlice = 0;
		if (other == 1){
			otherSlice = user1preference[2];
		}else{
			if(other==2){
				otherSlice = user2preference[2];
			}else{
				otherSlice = user3preference[2];
			}
		}
		document.querySelector('.nSlice').innerHTML = 'User ' + m + "below is your slice"
		document.querySelector('.otherSlice').innerHTML = 'User ' + other + " below is your slice"
		document.querySelector('.kSlice').innerHTML = 'User ' + k + " below is your slice"
		finalAlloc(sliceB-1, sliceA-1, otherSlice-1, (10-sliceA-sliceB-otherSlice)-1, 'twoThree1', 'twoThree2', 'twoThree3', 'twoThree4');
	}else{
		var other = 6-n-j;
		var otherSlice = 0;
		if (other == 1){
			otherSlice = user1preference[2];
		}else{
			if(other==2){
				otherSlice = user2preference[2];
			}else{
				otherSlice = user3preference[2];
			}
		}
		document.querySelector('.nSlice').innerHTML = 'User ' + n + " below is your slice"
		document.querySelector('.otherSlice').innerHTML = 'User ' + other + " below is your slice"
		document.querySelector('.kSlice').innerHTML = 'User ' + j + " below is your slice"
		finalAlloc(sliceB-1, sliceA-1, otherSlice-1, (10-sliceA-sliceB-otherSlice)-1, 'twoThree1', 'twoThree2', 'twoThree3', 'twoThree4');
	}
}

function oneSliceOneTrim(){
	div = document.getElementById('oneSliceOneTrim');
	div.style.display = "block";
	//find what slices are A B and C
	var countof1 = 0;
	var countof2 = 0;
	var countof3 = 0;
	var countof4 = 0;
	if(user1preference[0] == 1){
		countof1++;
	}
	if(user1preference[0] == 2){
		countof2++;
	}
	if(user1preference[0] == 3){
		countof3++;
	}
	if(user1preference[0] == 4){
		countof4++;
	}
	if(user2preference[0] == 1){
		countof1++;
	}
	if(user2preference[0] == 2){
		countof2++;
	}
	if(user2preference[0] == 3){
		countof3++;
	}
	if(user2preference[0] == 4){
		countof4++;
	}
	if(user3preference[0] == 1){
		countof1++;
	}
	if(user3preference[0] == 2){
		countof2++;
	}
	if(user3preference[0] == 3){
		countof3++;
	}
	if(user3preference[0] == 4){
		countof4++;
	}
	if(user1preference[1] == 1){
		countof1++;
	}
	if(user1preference[1] == 2){
		countof2++;
	}
	if(user1preference[1] == 3){
		countof3++;
	}
	if(user1preference[1] == 4){
		countof4++;
	}
	if(user2preference[1] == 1){
		countof1++;
	}
	if(user2preference[1] == 2){
		countof2++;
	}
	if(user2preference[1] == 3){
		countof3++;
	}
	if(user2preference[1] == 4){
		countof4++;
	}
	if(user3preference[1] == 1){
		countof1++;
	}
	if(user3preference[1] == 2){
		countof2++;
	}
	if(user3preference[1] == 3){
		countof3++;
	}
	if(user3preference[1] == 4){
		countof4++;
	}
	if (countof1 == 3){
		sliceB = 1;
	}else{
		if (countof2 == 3){
			sliceB = 2;
		}else{
			if (countof3 ==3){
				sliceB =3;
			}else{
				sliceB = 4;
			}
		}
	}
	if (countof1 == 1){
		sliceA = 1;
	}else{
		if (countof2 == 1){
			sliceA = 2;
		}else{
			if (countof3 ==1){
				sliceA =3;
			}else{
				sliceA = 4;
			}
		}
	}
	if (countof1 == 3){
		sliceB = 1;
	}else{
		if (countof2 == 3){
			sliceB = 2;
		}else{
			if (countof3 ==3){
				sliceB =3;
			}else{
				sliceB = 4;
			}
		}
	}
	if (countof1 == 2){
		sliceC= 1;
	}else{
		if (countof2 == 2){
			sliceC = 2;
		}else{
			if (countof3 ==2){
				sliceC =3;
			}else{
				sliceC = 4;
			}
		}
	}
	
	if (user1preference[0] == sliceA){
		i = 1;
		j = 2;
		k = 3;
		preferedPiece();
	}else{
		if (user2preference[0] == sliceA){
			i = 2;
			j = 1;
			k = 3;
			preferedPiece();
		}else{
			if(user3preference[0] == sliceA){
				i = 3;
				j = 1;
				k = 2;
				preferedPiece();
			}else{
				notPreferedPiece();
			}
		}
	}
}

function preferedPiece(){
	//i gets his prefered piece
	//j qnd k need to trim their most prefered to match their second most prefered, their most prefered being the same as each other
	//sliceB is the prefered slice of j qnd k from here
	div = document.getElementById('preferedPiece');
	div.style.display = "block";
	
	//only on of the slices is the preference of j and k
	if (i != 1){
		sliceB = user1preference[0];
		sliceC = user1preference[1];
	}else{
		sliceB = user2preference[0];
		sliceC = user2preference[1];
	}
	document.querySelector('.jCuts').innerHTML = 'User ' + j + ", using the slider, trim your preferred piece to match your second-most preferred";
	
	var e=document.getElementById("jCutsB");
	var ctxe=e.getContext("2d");
	ctxe.drawImage(img, 0, 0, e.width, e.height);
    ctxe.rect(0,0,slice[sliceB-1].start*4,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
	ctxe.stroke()
	ctxe.rect(slice[sliceB-1].end*4,0,e.width,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
    ctxe.stroke();
	
	var f=document.getElementById("jCutsC");
	var ctxf=f.getContext("2d");
	ctxf.drawImage(img, 0, 0, f.width, f.height);
    ctxf.rect(0,0,slice[sliceC-1].start*4,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
	ctxf.stroke()
	ctxf.rect(slice[sliceC-1].end*4,0,f.width,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
    ctxf.stroke();
	
}

var jCut = 0;
var kCut = 0;
function jCuts(){
	jCut = x;
	
	div = document.getElementById('preferedPiece2');
	div.style.display = "block";
	document.querySelector('.kCuts').innerHTML = 'User ' + k + ", using the slider, trim your preferred piece to match your second-most preferred";
	var e=document.getElementById("kCutsB");
	var ctxe=e.getContext("2d");
	ctxe.drawImage(img, 0, 0, e.width, e.height);
    ctxe.rect(0,0,slice[sliceB-1].start*4,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
	ctxe.stroke()
	ctxe.rect(slice[sliceB-1].end*4,0,e.width,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
    ctxe.stroke();
	
	var f=document.getElementById("kCutsC");
	var ctxf=f.getContext("2d");
	ctxf.drawImage(img, 0, 0, f.width, f.height);
    ctxf.rect(0,0,slice[sliceC-1].start*4,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
	ctxf.stroke()
	ctxf.rect(slice[sliceC-1].end*4,0,f.width,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
    ctxf.stroke();
}

function kCuts(){
	div = document.getElementById('preferedPieceAllocation');
	div.style.display = "block";
	kCut = x;
	document.querySelector('.iSliceAlloc').innerHTML = 'User ' + i + " below is your piece"
	document.querySelector('.kSliceAlloc').innerHTML = 'User ' + k + " below is your piece"
	document.querySelector('.jSliceAlloc').innerHTML = 'User ' + j + " below is your piece"
	
	if (jCut< kCut){
		slice[sliceB-1].start = jCut;
		
		finalAlloc(sliceA-1, sliceB-1, sliceC-1, (10-sliceA-sliceB-sliceC)-1, "oneOneP1", "oneOneP2", "oneOneP3", "oneOneP4");
	}else{
		slice[sliceB-1].start = kCut;
		finalAlloc(sliceA-1, sliceC-1, sliceB-1, (10-sliceA-sliceB-sliceC)-1, "oneOneP1", "oneOneP2", "oneOneP3", "oneOneP4");
	}
}

function notPreferedPiece(){
	if (user1preference[1] == sliceA){
		i = 1;
		j = 2;
		k = 3;
	}else{
		if(user2preference[1] == sliceA){
			i = 2;
			j =1;
			k = 3;
		}else{
			i = 3;
			j = 1;
			k = 2;
		}
	}
	div = document.getElementById('notPrefered');
	div.style.display = "block";
	

	document.querySelector('.iCuts').innerHTML = 'User ' + i + ", using the slider, trim your preferred piece to match your second-most preferred";
	var e=document.getElementById("iCutsB");
	var ctxe=e.getContext("2d");
	ctxe.drawImage(img, 0, 0, e.width, e.height);
    ctxe.rect(0,0,slice[sliceB-1].start*4,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
	ctxe.stroke()
	ctxe.rect(slice[sliceB-1].end*4,0,e.width,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
    ctxe.stroke();
	
	var f=document.getElementById("iCutsA");
	var ctxf=f.getContext("2d");
	ctxf.drawImage(img, 0, 0, f.width, f.height);
    ctxf.rect(0,0,slice[sliceA-1].start*4,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
	ctxf.stroke()
	ctxf.rect(slice[sliceA-1].end*4,0,f.width,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
    ctxf.stroke();
	
}
var iCutsB =0;
var jCutsB =0;
var jCutsC =0;
var kCutsB =0;
var kCutsC =0;


function iCuts(){
	iCutsB = x;
	div = document.getElementById('jCuts2');
	div.style.display = "block";
	
	var other = 0;
	if (j ==1){
		other = user1preference[2];
	}else{
		if (j==2){
			other = user2preference[2];
		}else{
			other = user3preference[2];
		}
	}
	
	var b=document.getElementById("jTrimB");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
    ctxb.rect(0,0,slice[sliceB -1].start*3,b.height);
    ctxb.lineWidth = 0;
    ctxb.fillStyle = '#FFFFFF';
    ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceB-1].end*3,0,b.width,b.height);
    ctxb.lineWidth = 0;
    ctxb.fillStyle = '#FFFFFF';
    ctxb.fill();
    ctxb.stroke();
	
	document.querySelector('.jCuts2').innerHTML = 'User ' + j + ", using the sliders, trim two preferred pieces to match your third-most preferred";
	var e=document.getElementById("jTrimC");
	var ctxe=e.getContext("2d");
	ctxe.drawImage(img, 0, 0, e.width, e.height);
    ctxe.rect(0,0,slice[sliceC-1].start*3,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
	ctxe.stroke()
	ctxe.rect(slice[sliceC-1].end*3,0,e.width,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
    ctxe.stroke();
	
	var f=document.getElementById("jTrimother");
	var ctxf=f.getContext("2d");
	ctxf.drawImage(img, 0, 0, f.width, f.height);
    ctxf.rect(0,0,slice[other-1].start*4,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
	ctxf.stroke()
	ctxf.rect(slice[other-1].end*3,0,f.width,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
    ctxf.stroke();
}

function jCuts2(){
	jCutsB = x;
	jCutsC =y;
	
	div = document.getElementById('kCuts2');
	div.style.display = "block";
	
	var other = 0;
	if (k ==1){
		other = user1preference[2];
	}else{
		if (k==2){
			other = user2preference[2];
		}else{
			other = user3preference[2];
		}
	}
	
	var b=document.getElementById("kTrimB");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
    ctxb.rect(0,0,slice[sliceB -1].start*3,b.height);
    ctxb.lineWidth = 0;
    ctxb.fillStyle = '#FFFFFF';
    ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceB-1].end*3,0,b.width,b.height);
    ctxb.lineWidth = 0;
    ctxb.fillStyle = '#FFFFFF';
    ctxb.fill();
    ctxb.stroke();
	
	document.querySelector('.kCuts2').innerHTML = 'User ' + k + ", using the sliders, trim two preferred pieces to match your third-most preferred";
	var e=document.getElementById("kTrimC");
	var ctxe=e.getContext("2d");
	ctxe.drawImage(img, 0, 0, e.width, e.height);
    ctxe.rect(0,0,slice[sliceC-1].start*3,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
	ctxe.stroke()
	ctxe.rect(slice[sliceC-1].end*3,0,e.width,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
    ctxe.stroke();
	
	var f=document.getElementById("kTrimother");
	var ctxf=f.getContext("2d");
	ctxf.drawImage(img, 0, 0, f.width, f.height);
    ctxf.rect(0,0,slice[other-1].start*3,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
	ctxf.stroke()
	ctxf.rect(slice[other-1].end*3,0,f.width,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
    ctxf.stroke()
	
}
var m = 0;

function kCuts2(){
	kCutsB = x;
	kCutsC = y;
	var jother = 0;
	var kother = 0;
	if (j ===1){
		jother = user1preference[2];
	}
	if (j ===2){
		jother = user2preference[2];
	}
	if (j ===3){
		jother = user3preference[2];
	}
	if (j ===4){
		jother = user4preference[2];
	}
	if (k ===1){
		kother = user1preference[2];
	}
	if (k ===2){
		kother = user2preference[2];
	}
	if (k ===3){
		kother = user3preference[2];
	}
	if (k ===4){
		kother = user4preference[2];
	}
	
	//find the cuts for the slices
	if (kCutsC<jCutsC){
		slice[sliceC-1].start = kCutsC;
	}else{
		slice[sliceC-1].start = jCutsC;
	}
	if ((jCutsB<kCutsB) && (jCutsB<iCutsB)){
		if(kCutsB<iCutsB){
			slice[sliceB-1].start = kCutsB;
		}else{
			slice[sliceB-1].start = iCutsB;
		}
	}else{
		if ((jCutsB>kCutsB)||(jCutsB>iCutsB)){
			slice[sliceB-1].start = jCutsB;
		}else{
			if(kCutsB>iCutsB){
				slice[sliceB-1].start = kCutsB;
			}else{
				slice[sliceB-1].start = iCutsB;
			}
		}
		
	}
	
	
	
	document.querySelector('.iDiffAlloc').innerHTML = 'User ' + i + " below is your piece"
	document.querySelector('.kDiffAlloc').innerHTML = 'User ' + k + " below is your piece"
	document.querySelector('.jDiffAlloc').innerHTML = 'User ' + j + " below is your piece"
	document.querySelector('.fourDiffAlloc').innerHTML = 'User ' + '4' + " below is your piece"
	if (jCutsC<kCutsC){
		if((kCutsB>jCutsC)&&(kCutsB>iCutsB)){
			m = 'k';
			choose();
		}else{
			div = document.getElementById('differentAllocation');
			div.style.display = "block";
			if(jCutsB<iCutsB){
				//allocate k to C, i to B and j to their third choice
				finalAlloc(sliceB-1, sliceC-1, jother-1, (10-jother-sliceB-sliceC)-1, "diffP1", "diffP2", "diffP3", "diffP4");
				
			}else{
				//allocate k to C, j to B and i to A 
				finalAlloc(sliceA-1, sliceC-1, sliceB-1, (10-sliceA-sliceB-sliceC)-1, "diffP1", "diffP2", "diffP3", "diffP4");

			}
		}
		
	}else{
		if((jCutsB>kCutsB)&&(jCutsB>iCutsB)){
			m = 'j';
			choose();
		}else{
			div = document.getElementById('differentAllocation');
			div.style.display = "block";
			if(kCutsB<iCutsB){
				finalAlloc(sliceB-1, kother-1, sliceC-1, (10-kother-sliceB-sliceC)-1, "diffP1", "diffP2", "diffP3", "diffP4");

				// j gets C, i gets B and k get third choice
			}else{
				finalAlloc(sliceA-1, sliceB-1, sliceC-1, (10-sliceA-sliceB-sliceC)-1, "diffP1", "diffP2", "diffP3", "diffP4");

				//j gets C, k gets B and i gets A 
			}
		}		
		
	}
	
	
	
}

function choose(agent){
	div = document.getElementById('finalChoose');
	div.style.display = "block";

	if (m == 'j'){
		document.querySelector('.finalChoose').innerHTML = 'User ' + j + ", pick your most preferred slice between the two below";	
	}else{
		document.querySelector('.finalChoose').innerHTML = 'User ' + k + ", pick your most preferred slice between the two below";	
	}
	var e=document.getElementById("finalChooseB");
	var ctxe=e.getContext("2d");
	ctxe.drawImage(img, 0, 0, e.width, e.height);
    ctxe.rect(0,0,slice[sliceB-1].start*4,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
	ctxe.stroke()
	ctxe.rect(slice[sliceB-1].end*4,0,e.width,e.height);
    ctxe.lineWidth = 0;
    ctxe.fillStyle = '#FFFFFF';
    ctxe.fill();
    ctxe.stroke();
	
	var f=document.getElementById("finalChooseC");
	var ctxf=f.getContext("2d");
	ctxf.drawImage(img, 0, 0, f.width, f.height);
    ctxf.rect(0,0,slice[sliceC-1].start*4,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
	ctxf.stroke()
	ctxf.rect(slice[sliceC-1].end*4,0,f.width,f.height);
    ctxf.lineWidth = 0;
    ctxf.fillStyle = '#FFFFFF';
    ctxf.fill();
    ctxf.stroke()
	
}

function finalChoose(slicehere){
	div = document.getElementById('differentAllocation');
	div.style.display = "block";
	var add = "finalChoose";
	var a=document.getElementById(add.concat(slicehere));
	var ctxa=a.getContext("2d");
	ctxa.globalAlpha = 0.5;
	ctxa.rect(0, 0, a.width, a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#007F00';
	ctxa.fill();
	if (slicehere == 'B'){
		if (m == 'j'){
			//j gets B, i gets A and k gets C 
			finalAlloc(sliceA-1, sliceC-1, sliceB-1, (10-sliceA-sliceB-sliceC)-1, "diffP1", "diffP2", "diffP3", "diffP4");

		}else{
			finalAlloc(sliceA-1, sliceB-1, sliceC-1, (10-sliceA-sliceB-sliceC)-1, "diffP1", "diffP2", "diffP3", "diffP4");
			//k gets B, i gets A and j gets C
		}
	}else{
		if (m=='j'){
			//j gets c, 
			if (kCutsB>iCutsB){
				finalAlloc(sliceA-1, sliceB-1, sliceC-1, (10-sliceA-sliceB-sliceC)-1, "diffP1", "diffP2", "diffP3", "diffP4");

				//k gets B and i gets A
			}else{
				finalAlloc(sliceB-1, kother-1, sliceC-1, (10-kother-sliceB-sliceC)-1, "diffP1", "diffP2", "diffP3", "diffP4");

				//i gets B and k gets kother
			}
		}else{
			//k gets c
			if (jCutsB>iCutsB){
				finalAlloc(sliceA-1, sliceC-1, sliceB-1, (10-sliceA-sliceB-sliceC)-1, "diffP1", "diffP2", "diffP3", "diffP4");

				//j gets B and i gets A
			}else{
				finalAlloc(sliceB-1, sliceC-1, jother-1, (10-jother-sliceB-sliceC)-1, "diffP1", "diffP2", "diffP3", "diffP4");

				//i gets B and j gets jother
			}
		}
		
	}
}

var cprefered = 0;
var dprefered = 0;

function twoSlicesOneTrim(){
	console.log('here');
	div = document.getElementById('twoSlicesOneTrim');
	div.style.display = "block";
	var countof1 = 0;
	var countof2 = 0;
	var countof3 = 0;
	var countof4 = 0;
	if(user1preference[0] == 1){
		countof1++;
	}
	if(user1preference[0] == 2){
		countof2++;
	}
	if(user1preference[0] == 3){
		countof3++;
	}
	if(user1preference[0] == 4){
		countof4++;
	}
	if(user2preference[0] == 1){
		countof1++;
	}
	if(user2preference[0] == 2){
		countof2++;
	}
	if(user2preference[0] == 3){
		countof3++;
	}
	if(user2preference[0] == 4){
		countof4++;
	}
	if(user3preference[0] == 1){
		countof1++;
	}
	if(user3preference[0] == 2){
		countof2++;
	}
	if(user3preference[0] == 3){
		countof3++;
	}
	if(user3preference[0] == 4){
		countof4++;
	}
	if(user1preference[1] == 1){
		countof1++;
	}
	if(user1preference[1] == 2){
		countof2++;
	}
	if(user1preference[1] == 3){
		countof3++;
	}
	if(user1preference[1] == 4){
		countof4++;
	}
	if(user2preference[1] == 1){
		countof1++;
	}
	if(user2preference[1] == 2){
		countof2++;
	}
	if(user2preference[1] == 3){
		countof3++;
	}
	if(user2preference[1] == 4){
		countof4++;
	}
	if(user3preference[1] == 1){
		countof1++;
	}
	if(user3preference[1] == 2){
		countof2++;
	}
	if(user3preference[1] == 3){
		countof3++;
	}
	if(user3preference[1] == 4){
		countof4++;
	}
	if((countof1 ==2) && (countof2 ==2)){
		sliceC = 3;
		sliceD = 4;
		
	}
	if((countof1 ==2) && (countof3 ==2)){
		sliceC = 2;
		sliceD = 4;
		
	}
	if((countof1 ==2) && (countof4 ==2)){
		sliceC = 2;
		sliceD = 3;

	}
	if((countof2 ==2) && (countof3 ==2)){
		sliceC = 1;
		sliceD = 4;
	}
	if((countof2 ==2) && (countof4 ==2)){
		sliceC = 1;
		sliceD = 3;		
	}
	if((countof3 ==2) && (countof4 ==2)){
		sliceC = 1;
		sliceD = 2;		
	}	
	findi();
	findSliceB();
	k = 6-i-j;
	
	if (cprefered ==1){
		Cprefered();
	}else{
		if(dprefered ==1){
			Dprefered();
		}else{
			twoSlicesOneTrim2()
		}
	}
	
}

function Dprefered(){
	console.log('here');
	div = document.getElementById('dPrefered');
	div.style.display = "block";
	
	document.querySelector('.dPreferedJ').innerHTML = 'User ' + j + " please trim your preferred piece to match your second-most preferred";
	
	var a=document.getElementById("userJTrimA");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
	ctxa.rect(0,0,slice[sliceA-1].start*4,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceA-1].end*4,0,a.width,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke();
		
	var b=document.getElementById("userIOther");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
	ctxb.rect(0,0,slice[sliceC-1].start*4,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceC-1].end*4,0,b.width,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke();
}
var jcuthere;
var kcuthere;

function Dprefered2(){
	jcuthere = x;
	div = document.getElementById('dPreferedK');
	div.style.display = "block";
	
	document.querySelector('.dPreferedK2').innerHTML = 'User ' + k + ", trim your preferred piece to match your second-most preferred";
	
	var a=document.getElementById("userKTrimA");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
	ctxa.rect(0,0,slice[sliceA-1].start*4,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceA-1].end*4,0,a.width,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke();
		
	var b=document.getElementById("userKOther");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
	ctxb.rect(0,0,slice[sliceB-1].start*4,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceB-1].end*4,0,b.width,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke();
}

function Dprefered3(){
	kcuthere = x;
	document.querySelector('.twoSlicesi').innerHTML = 'User ' + i + " below is your slice";
	document.querySelector('.twoSlicesj').innerHTML = 'User ' + j + " below is your slice";
	document.querySelector('.twoSlicesk').innerHTML = 'User ' + k + " below is your slice";
	if (kcuthere < jcuthere){
		slice[sliceA-1].start = kcuthere;
		finalAlloc(sliceD-1, sliceA-1, sliceB-1, sliceC-1, "twoOnei", "twoOnej", "twoOnek", "twoOne4");
	}else{
		slice[sliceA-1].start = jcuthere;
		finalAlloc(sliceD-1, sliceC-1, sliceA-1, sliceB-1, "twoOnei", "twoOnej", "twoOnek", "twoOne4");
	}
}

function Cprefered(){
	div = document.getElementById('cPrefered');
	div.style.display = "block";
	
	document.querySelector('.cPreferedI').innerHTML = 'User ' + i + " trim your preferred piece to match your second-most preferred";
	
	var a=document.getElementById("userITrimB");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
	ctxa.rect(0,0,slice[sliceB-1].start*4,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceB-1].end*4,0,a.width,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke();
		
	var b=document.getElementById("userIOther");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
	ctxb.rect(0,0,slice[sliceD-1].start*4,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceD-1].end*4,0,b.width,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke();
}
var icuthere =0;

function Cprefered2(){
	icuthere = x;
	div = document.getElementById('cPreferedK');
	div.style.display = "block";
	
	document.querySelector('.cPreferedK2').innerHTML = 'User ' + k + " trim your preferred piece to match your second-most preferred"
	
	var a=document.getElementById("userKTrimB");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
	ctxa.rect(0,0,slice[sliceB-1].start*4,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceB-1].end*4,0,a.width,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke();
		
	var b=document.getElementById("userKOther2");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
	ctxb.rect(0,0,slice[sliceA-1].start*4,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceA-1].end*4,0,b.width,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke();
}

function Cprefered3(){
	div = document.getElementById('twoSlicesAllocation');
	div.style.display = "block";
	kcuthere = x;
	document.querySelector('.twoSlicesi').innerHTML = 'User ' + i + " below is your slice";
	document.querySelector('.twoSlicesj').innerHTML = 'User ' + j + " below is your slice";
	document.querySelector('.twoSlicesk').innerHTML = 'User ' + k + " below is your slice";
	if (kcuthere < icuthere){
		slice[sliceA-1].start = kcuthere;
		finalAlloc(sliceB-1, sliceD-1, sliceA-1, sliceC-1, "twoOnei", "twoOnej", "twoOnek", "twoOne4")
	}else{
		slice[sliceA-1].start = icuthere;
		finalAlloc(sliceD-1, sliceC-1, sliceB-1, sliceA-1, "twoOnei", "twoOnej", "twoOnek", "twoOne4")
	}
}

function twoSlicesOneTrim2(){
	console.log('here');
	document.querySelector('.twoSlicesK').innerHTML = 'User ' + k + " trim your two preferred slices to match your third-most preferred slice";
	div = document.getElementById('twoSlicesOneTrim2');
	div.style.display = "block";
		
	var a=document.getElementById("twoSliceKA");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
	ctxa.rect(0,0,slice[sliceA-1].start*3,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceA-1].end*3,0,a.width,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke();
		
	var b=document.getElementById("twoSliceKB");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
	ctxb.rect(0,0,slice[sliceB-1].start*3,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceB-1].end*3,0,b.width,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke();
	
	var sliceOther;
	if (k ==1){
		sliceOther = user1preference[2];
	}
	if (k ==2){
		sliceOther = user2preference[2];
	}
	if (k ==3){
		sliceOther = user3preference[2];
	}
	
	var c=document.getElementById("twoSliceKOther");
	var ctxc=c.getContext("2d");
	ctxc.drawImage(img, 0, 0, c.width, c.height);
	ctxc.rect(0,0,slice[sliceOther-1].start*3,c.height);
	ctxc.lineWidth = 0;
	ctxc.fillStyle = '#FFFFFF';
	ctxc.fill();
	ctxc.stroke()
	ctxc.rect(slice[sliceOther-1].end*3,0,c.width,c.height);
	ctxc.lineWidth = 0;
	ctxc.fillStyle = '#FFFFFF';
	ctxc.fill();
	ctxc.stroke();
}

var trimKA = 0;
var trimKB = 0;
var trimJA = 0;
var trimIB = 0;

function twoSliceKChoice(){
	trimKA = x;
	trimKB = y;
	document.querySelector('.twoSlicesJ').innerHTML = 'User ' + j + " trim your preferred slice to match your second-most preferred"
	div = document.getElementById('twoSlicesOneTrim3');
	div.style.display = "block";
	
	var a=document.getElementById("twoSliceJA");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
	ctxa.rect(0,0,slice[sliceA-1].start*4,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceA-1].end*4,0,a.width,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke();
		
	var b=document.getElementById("twoSliceJD");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
	ctxb.rect(0,0,slice[sliceD-1].start*4,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceD-1].end*4,0,b.width,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke();
	
	
}
function twoSliceJChoice(){
	trimJA = x;
	document.querySelector('.twoSlicesI').innerHTML = 'User ' + i + " trim your preferred slice to match your second-most preferred";
	div = document.getElementById('twoSlicesOneTrim4');
	div.style.display = "block";
	
	var a=document.getElementById("twoSliceIB");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
	ctxa.rect(0,0,slice[sliceB-1].start*4,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceB-1].end*4,0,a.width,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke();
		
	var b=document.getElementById("twoSliceIC");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
	ctxb.rect(0,0,slice[sliceC-1].start*4,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceC-1].end*4,0,b.width,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke();
	
}

function twoSliceIChoice(){
	trimIB = x;
	var otherPref=0;
	if (k==1){
		otherPref = user1preference[2];
	}
	if (k==2){
		otherPref = user2preference[2];
	}
	if (k==3){
		otherPref = user3preference[2];
	}
	
	if ((trimKA>trimJA) && (trimKB > trimIB)){
		slice[sliceA-1].start = trimJA;
		slice[sliceB-1].start = trimIB;
		KMustChoose();
	}
	if((trimKA<trimJA)&&(trimKB<trimIB)){
		div = document.getElementById('twoSlicesAllocation');
		div.style.display = "block";
		slice[sliceA-1].start = trimKA;
		slice[sliceB-1].start = trimKB;
		document.querySelector('.twoSlicesi').innerHTML = 'User ' + i + " this is your slice"
		document.querySelector('.twoSlicesj').innerHTML = 'User ' + j + " this is your slice"
		document.querySelector('.twoSlicesk').innerHTML = 'User ' + k + " this is your slice"
		finalAlloc(sliceB-1, sliceA-1, otherPref-1, (10-sliceB-sliceA-otherPref)-1, "twoOnei", "twoOnej", "twoOnek", "twoOne4" );	
	}
	if((trimKA<trimJA)&&(trimIB<trimKB)){
		div = document.getElementById('twoSlicesAllocation');
		div.style.display = "block";
		slice[sliceA-1].start = trimKA;
		slice[sliceB-1].start = trimIB;
		document.querySelector('.twoSlicesi').innerHTML = 'User ' + i + " this is your slice"
		document.querySelector('.twoSlicesj').innerHTML = 'User ' + j + " this is your slice"
		document.querySelector('.twoSlicesk').innerHTML = 'User ' + k + " this is your slice"
		finalAlloc(sliceC-1, sliceA-1, sliceB-1, (10-sliceC-sliceA-sliceB)-1, "twoOnei", "twoOnej", "twoOnek", "twoOne4" );	
	}
	if((trimKA>trimJA)&&(trimKB<trimIB)){
		div = document.getElementById('twoSlicesAllocation');
		div.style.display = "block";
		slice[sliceA-1].start = trimJA;
		slice[sliceB-1].start = trimKB;
		document.querySelector('.twoSlicesi').innerHTML = 'User ' + i + " this is your slice"
		document.querySelector('.twoSlicesj').innerHTML = 'User ' + j + " this is your slice"
		document.querySelector('.twoSlicesk').innerHTML = 'User ' + k + " this is your slice"
		finalAlloc(sliceB-1, sliceD-1, sliceA-1, sliceC-1, "twoOnei", "twoOnej", "twoOnek", "twoOne4" );	
	}
}

function KMustChoose(){
	document.querySelector('.kChoosing').innerHTML = 'User ' + k + " choose your preferred slice"
	div = document.getElementById('twoSlicesOneTrim5');
	div.style.display = "block";
	
	var a=document.getElementById("kChoosingA");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
	ctxa.rect(0,0,slice[sliceA-1].start*4,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceA-1].end*4,0,a.width,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke();
		
	var b=document.getElementById("kChoosingB");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
	ctxb.rect(0,0,slice[sliceB-1].start*4,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceB-1].end*4,0,b.width,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke();
}

function twoSliceAlloc(number){
	if (number ==1){
		div = document.getElementById('twoSlicesAllocation');
		div.style.display = "block";
		document.querySelector('.twoSlicesi').innerHTML = 'User ' + i + " below is your slice"
		document.querySelector('.twoSlicesj').innerHTML = 'User ' + j + " below is your slice"
		document.querySelector('.twoSlicesk').innerHTML = 'User ' + k + " below is your slice"
		finalAlloc(sliceB-1, sliceD-1, sliceA-1, sliceC-1, "twoOnei", "twoOnej", "twoOnek", "twoOne4" );
	}else{
		div = document.getElementById('twoSlicesAllocation');
		div.style.display = "block";
		document.querySelector('.twoSlicesi').innerHTML = 'User ' + i + " below is your slice"
		document.querySelector('.twoSlicesj').innerHTML = 'User ' + j + " below is your slice"
		document.querySelector('.twoSlicesk').innerHTML = 'User ' + k + " below is your slice"
		finalAlloc(sliceC-1, sliceA-1, sliceB-1, sliceD-1, "twoOnei", "twoOnej", "twoOnek", "twoOne4" );
	}
}

function threeSlicesOneTrim(){
	sliceA = user1preference[0];
	sliceD = user1preference[1];
	if ((user2preference[0] != sliceA) &&(user2preference[0] != sliceD)){
		sliceB = user2preference[0];
	}else{
		if(user2preference[0] == sliceA){
			sliceA = sliceD;
			sliceD = user2preference[0];
		}
	}
	if ((user2preference[1] != sliceA) &&(user2preference[1] != sliceD)){
		sliceB = user2preference[1];
	}else{
		if(user2preference[1] == sliceA){
			sliceA = sliceD;
			sliceD = user2preference[1];
		}
	}
	if (sliceD == user3preference[0]){
		sliceC = user3preference[1];
	}else{
		sliceC = user3preference[0];
	}
	
	if ((user1preference[0] == user2preference[0])&& (user2preference[0] == user3preference[0])){
		samepreference();
	}else{
		twoMustChoose();
	}
	
}
var usera =0;
var userb = 0;
var sliceE = 0;
var sliceF = 0;

function twoMustChoose(){
	if (user1preference[0] != sliceD){
		usera = 2;
		userb = 3;
		sliceE = sliceB;
		sliceF = sliceC;
	}else{
		if (user2preference[0] != sliceD){
			usera = 1;
			userb = 3;
			sliceE = sliceA;
			sliceF = sliceC;
		}else{
			usera = 1;
			userb = 2;
			sliceE = sliceA;
			sliceF = sliceB;
		}
	}
	div = document.getElementById('twoMustChoose');
	div.style.display = "block";
	document.querySelector('.AMustChoose').innerHTML = 'User ' + usera + " trim your preferred slice to match your second-most preferred";
	
	var a=document.getElementById("diffATrimD");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
	ctxa.rect(0,0,slice[sliceD-1].start*4,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceD-1].end*4,0,a.width,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke();
		
	var b=document.getElementById("diffATrimE");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
	ctxb.rect(0,0,slice[sliceE-1].start*4,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceE-1].end*4,0,b.width,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke();
}
var ATrimD;
var BTrimD;

function twoMustChoose2(){
	ATrimD = x;
	div = document.getElementById('twoMustChoose2');
	div.style.display = "block";
	document.querySelector('.BMustChoose').innerHTML = "User " + userb + " trim your preferred slice to match your second-most preferred";
	
	var a=document.getElementById("diffBTrimD");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
	ctxa.rect(0,0,slice[sliceD-1].start*4,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceD-1].end*4,0,a.width,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke();
		
	var b=document.getElementById("diffBTrimF");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
	ctxb.rect(0,0,slice[sliceF-1].start*4,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceF-1].end*4,0,b.width,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke();
}

function twoMustChoose3(){
	BTrimD = x;
	var userc = 6-userb-usera;
	var sliceG = 10-sliceE-sliceD-sliceF;
	div = document.getElementById('diffPreferenceAllocation');
	div.style.display = "block";
	document.querySelector('.userA').innerHTML = 'User ' + usera + " below is your slice";
	document.querySelector('.userB').innerHTML = 'User ' + userb + " below is your slice";
	document.querySelector('.userC').innerHTML = 'User ' + userc + " below is your slice";
	if (BTrimD <ATrimD){
		slice[sliceD-1].start = BTrimD
		finalAlloc(sliceD-1, sliceF-1, sliceG-1, sliceE-1, "diffa", "diffb", "diffc", "diff4");
	}else{
		slice[sliceD-1].start = ATrimD
		finalAlloc(sliceE-1, sliceD-1, sliceG-1, sliceF-1, "diffa", "diffb", "diffc", "diff4");
	}
	
}

function samepreference(){
	div = document.getElementById('samepreference');
	div.style.display = "block";
	
	var a=document.getElementById("same1TrimD");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
	ctxa.rect(0,0,slice[sliceD-1].start*4,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceD-1].end*4,0,a.width,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke();
		
	var b=document.getElementById("same1TrimA");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
	ctxb.rect(0,0,slice[sliceA-1].start*4,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceA-1].end*4,0,b.width,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke();
}
var oneTrimHere = 0;
var twoTrimHere = 0;
var threeTrimHere = 0;
function samepreference2(){
	oneTrimHere = x;
	div = document.getElementById('samepreference2');
	div.style.display = "block";
	
	var a=document.getElementById("same2TrimD");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
	ctxa.rect(0,0,slice[sliceD-1].start*4,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceD-1].end*4,0,a.width,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke();
		
	var b=document.getElementById("same2TrimB");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
	ctxb.rect(0,0,slice[sliceB-1].start*4,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceB-1].end*4,0,b.width,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke();
	
}

function samepreference3(){
	twoTrimHere = x;
	div = document.getElementById('samepreference3');
	div.style.display = "block";
	
	
	var a=document.getElementById("same3TrimD");
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
	ctxa.rect(0,0,slice[sliceD-1].start*4,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceD-1].end*4,0,a.width,a.height);
	ctxa.lineWidth = 0;
	ctxa.fillStyle = '#FFFFFF';
	ctxa.fill();
	ctxa.stroke();
		
	var b=document.getElementById("same3TrimC");
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
	ctxb.rect(0,0,slice[sliceC-1].start*4,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceC-1].end*4,0,b.width,b.height);
	ctxb.lineWidth = 0;
	ctxb.fillStyle = '#FFFFFF';
	ctxb.fill();
	ctxb.stroke();	
}

function samepreference4(){
	threeTrimHere = x;
	div = document.getElementById('samePreferenceAllocation');
	div.style.display = "block";
	if(((oneTrimHere < twoTrimHere)&&(oneTrimHere > threeTrimHere))||((oneTrimHere > twoTrimHere)&&(oneTrimHere < threeTrimHere))){
		slice[sliceD-1].start = oneTrimHere;
	}else{
		if(((twoTrimHere < oneTrimHere)&&(twoTrimHere > threeTrimHere))||((twoTrimHere > oneTrimHere)&&(twoTrimHere < threeTrimHere))){
			slice[sliceD-1].start = twoTrimHere;
		}else{
			slice[sliceD-1].start = threeTrimHere;
		}
	}
	if ((oneTrimHere>twoTrimHere) &&(oneTrimHere >threeTrimHere)){
		finalAlloc(sliceD-1, sliceB-1, sliceC-1, sliceA-1, "same1", "same2", "same3", "same4");
	}else{
		if ((twoTrimHere>oneTrimHere) &&(twoTrimHere >threeTrimHere)){
			finalAlloc(sliceA-1, sliceD-1, sliceC-1, sliceB-1, "same1", "same2", "same3", "same4");
		}else{
			finalAlloc(sliceA-1, sliceB-1, sliceD-1, sliceC-1, "same1", "same2", "same3", "same4");
		}
	}
	
}

function findi(){
	if((user1preference[0] == sliceC)||(user1preference[1]==sliceC)){
		j = 1;
		if(user1preference[0] != sliceC){
			sliceA = user1preference[0];
		}else{
			sliceA = user1preference[1];
			cprefered = 1;
		}
	}
	if((user2preference[0] == sliceC)||(user2preference[1]==sliceC)){
		j = 2;
		if(user2preference[0] != sliceC){
			sliceA = user2preference[0];
		}else{
			sliceA = user2preference[1];
			cprefered = 1;
		}
	}
	if((user3preference[0] == sliceC)||(user3preference[1]==sliceC)){
		j = 3;
		if(user3preference[0] != sliceC){
			sliceA = user3preference[0];
		}else{
			sliceA = user3preference[1];
			cprefered = 1;
		}
	}

}

function findSliceB(){
	if((user1preference[0] == sliceD)||(user1preference[1]==sliceD)){
		i = 1;
		if(user1preference[0] != sliceD){
			sliceB = user1preference[0];
		}else{
			sliceB = user1preference[1];
			dprefered = 1;
		}
	}
	if((user2preference[0] == sliceD)||(user2preference[1]==sliceD)){
		i = 2;
		if(user2preference[0] != sliceD){
			sliceB = user2preference[0];
		}else{
			sliceB = user2preference[1];
			dprefered = 1;
		}
	}
	if((user3preference[0] == sliceD)||(user3preference[1]==sliceD)){
		i = 3;
		if(user3preference[0] != sliceD){
			sliceB = user3preference[0];
		}else{
			sliceB = user3preference[1];
			dprefered = 1;
		}
	}
}



function finalAlloc(sliceFor1, sliceFor2, sliceFor3, sliceFor4, canvas1, canvas2, canvas3, canvas4){
	var a=document.getElementById(canvas1);
	var ctxa=a.getContext("2d");
	ctxa.drawImage(img, 0, 0, a.width, a.height);
    ctxa.rect(0,0,slice[sliceFor1].start*3,a.height);
    ctxa.lineWidth = 0;
    ctxa.fillStyle = '#FFFFFF';
    ctxa.fill();
	ctxa.stroke()
	ctxa.rect(slice[sliceFor1].end*3,0,a.width,a.height);
    ctxa.lineWidth = 0;
    ctxa.fillStyle = '#FFFFFF';
    ctxa.fill();
    ctxa.stroke();
	
	var b=document.getElementById(canvas2);
	var ctxb=b.getContext("2d");
	ctxb.drawImage(img, 0, 0, b.width, b.height);
    ctxb.rect(0,0,slice[sliceFor2].start*3,b.height);
    ctxb.lineWidth = 0;
    ctxb.fillStyle = '#FFFFFF';
    ctxb.fill();
	ctxb.stroke()
	ctxb.rect(slice[sliceFor2].end*3,0,b.width,b.height);
    ctxb.lineWidth = 0;
    ctxb.fillStyle = '#FFFFFF';
    ctxb.fill();
    ctxb.stroke();
	
	var c=document.getElementById(canvas3);
	var ctxc=c.getContext("2d");
	ctxc.drawImage(img, 0, 0, c.width, c.height);
    ctxc.rect(0,0,slice[sliceFor3].start*3,c.height);
    ctxc.lineWidth = 0;
    ctxc.fillStyle = '#FFFFFF';
    ctxc.fill();
	ctxc.stroke()
	ctxc.rect(slice[sliceFor3].end*3,0,c.width,c.height);
    ctxc.lineWidth = 0;
    ctxc.fillStyle = '#FFFFFF';
    ctxc.fill();
    ctxc.stroke();
	
	var d=document.getElementById(canvas4);
	var ctxd=d.getContext("2d");
	ctxd.drawImage(img, 0, 0, d.width, d.height);
    ctxd.rect(0,0,slice[sliceFor4].start*3,d.height);
    ctxd.lineWidth = 0;
    ctxd.fillStyle = '#FFFFFF';
    ctxd.fill();
	ctxd.stroke()
	ctxd.rect(slice[sliceFor4].end*3,0,d.width,d.height);
    ctxd.lineWidth = 0;
    ctxd.fillStyle = '#FFFFFF';
    ctxd.fill();
    ctxd.stroke();
}
