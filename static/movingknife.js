var ran = Math.floor(Math.random() * (6 - 2 + 1)) + 2;
var garden = "garden";
garden = garden.concat(ran.toString());
var img = document.getElementById(garden);
var stop = 0;
var user3 = 70;
var user2 = 60;
var user1 = 50;
var start = 0;

var final1 = 0;
var final2 = 0;
var final3 = 0;
var middle = 0;

function slice(start, end){
	this.start = start;
	this.end = end;
	
}

var slice1 = new slice(0,0);
var slice2 = new slice(0,0);
var slice3 = new slice(0,0);

//initial function loading the garden
function starthere(){
	
	var trythis = document.getElementById("user3");
	var ctx = trythis.getContext("2d");
	ctx.clearRect(0, 0, trythis.width, trythis.height);
    ctx.beginPath();
	ctx.moveTo(user3*4,0);
	ctx.lineTo(user3*4,200);
    ctx.lineWidth = 2;

      // set line color
    ctx.strokeStyle = '#8B008B';
    ctx.stroke();
	
	var trythis = document.getElementById("user2");
	var ctx = trythis.getContext("2d");
	ctx.clearRect(0, 0, trythis.width, trythis.height);
    ctx.beginPath();
	ctx.moveTo(user2*4,0);
	ctx.lineTo(user2*4,200);
    ctx.lineWidth = 2;
	      // set line color
    ctx.strokeStyle = '#FF00FF';
    ctx.stroke();
	
	var trythis = document.getElementById("user1");
	var ctx = trythis.getContext("2d");
	ctx.clearRect(0, 0, trythis.width, trythis.height);
    ctx.beginPath();
	ctx.moveTo(user1*4,0);
	ctx.lineTo(user1*4,200);
    ctx.lineWidth = 2;

      // set line color
    ctx.strokeStyle = '#FFD700';
    ctx.stroke();
	//listeners for the moving of the knives and stopping of the sword
	document.addEventListener('keydown', function(event) {
		//1
		if(event.keyCode == 50) {
			stop = 1;
			stop1();
		}
		//4
		if(event.keyCode == 66) {
			stop = 1;
			stop2();
		}
		//7
		if(event.keyCode == 56) {
			stop = 1;
			stop3();
		}
		//8
		if(event.keyCode == 55) {
			user3 = user3-1;
			userthree();
		}
		 //9
		if(event.keyCode == 57) {
			user3 = user3+1;
			userthree();
		}
		//5
		if(event.keyCode == 86) {
			user2 = user2-1;
			usertwo();
		}
		//6
		if(event.keyCode == 78) {
			user2 = user2+1;
			usertwo();
		}
		//2
		if(event.keyCode == 49) {
			user1 = user1-1;
			userone();
		}
		//3
		if(event.keyCode == 51) {
			user1 = user1+1;
			userone();
		}
	});
	
	document.querySelector('.explain').innerHTML = "In the Moving Knife Procedure you each hold a 'knife' that you can move across the garden.";
	document.querySelector('.explainone').innerHTML = "User 1, you control your knife, represented by a yellow line, with the keys 1 and 3 to move left and right.";
	document.querySelector('.explain2').innerHTML = "User 2, you control your knife, represented by a pink line, with the keys V and N to move left and right.";
	document.querySelector('.explain3').innerHTML = "User 3, you control your knife, represented by a purple line, with the keys 7 and 9 to move left and right.";
	document.querySelector('.explain4').innerHTML = "A fourth knife, represented by a red line, will move slowly across the garden from the left. You must keep your knife in the middle of the portion of garden that is created by the red line and the rightmost edge of the garden. When you feel that portion of the garden to the left of the red line is worth the most in comparison to the piece between the red line and the middle knife and the piece between the middle knife and the rightmost edge of the garden click your 'stop' button which is 2, B and 8 for users 1, 2 and 3 respectively. When you are ready, click the start button.";
	document.querySelector('.user1').innerHTML = "User 1 below is your piece.";
	document.querySelector('.user2').innerHTML = "User 2 below is your piece.";
	document.querySelector('.user3').innerHTML = "User 3 below is your piece.";

	
	var thisone = document.getElementById("firstCanvas");
	var ctx = thisone.getContext("2d");
	ctx.drawImage(img,0,0, thisone.width, thisone.height);
	
	var template = document.getElementById("shellCanvas");
	var ctx = template.getContext("2d");
	

		
}

function move(){
		
	var mainCanvas = document.getElementById("secondCanvas");
	var ctx = mainCanvas.getContext("2d");
 
	var requestAnimationFrame = window.requestAnimationFrame || 
                            	window.mozRequestAnimationFrame || 
                            	window.webkitRequestAnimationFrame || 
                            	window.msRequestAnimationFrame;
 
	function drawCircle() {
		if (stop ==0){
		    ctx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
		    ctx.beginPath();
		     
			ctx.moveTo(start*4,0)
			ctx.lineTo(start*4,200);
			ctx.lineWidth = 2;

		  // set line color
			ctx.strokeStyle = '#ff0000';
			ctx.stroke();
		     
			start += 0.01;
			if (start == 100){
				start = 0;
			}
		    requestAnimationFrame(drawCircle);
		}
	}
	drawCircle();
	
}
//allocations
function userthree(){
	var trythis = document.getElementById("user3");
	var ctx = trythis.getContext("2d");
	ctx.clearRect(0, 0, trythis.width, trythis.height);
    ctx.beginPath();
	ctx.moveTo(user3*4,0);
	ctx.lineTo(user3*4,200);
    ctx.lineWidth = 2;

      // set line color
    ctx.strokeStyle = '#8B008B';
    ctx.stroke();	
}

function usertwo(){
	var trythis = document.getElementById("user2");
	var ctx = trythis.getContext("2d");
	ctx.clearRect(0, 0, trythis.width, trythis.height);
    ctx.beginPath();
	ctx.moveTo(user2*4,0);
	ctx.lineTo(user2*4,200);
    ctx.lineWidth = 2;

      // set line color
    ctx.strokeStyle = '#FF00FF';
    ctx.stroke();
}

function userone(){
	var trythis = document.getElementById("user1");
	var ctx = trythis.getContext("2d");
	ctx.clearRect(0, 0, trythis.width, trythis.height);
    ctx.beginPath();
	ctx.moveTo(user1*4,0);
	ctx.lineTo(user1*4,200);
    ctx.lineWidth = 2;

      // set line color
    ctx.strokeStyle = '#FFD700';
    ctx.stroke();	
}

//each function below decides the allocations depending on who called cut
function stop1(){
	final1 = user1;
	final2 = user2;
	final3 = user3;
	
	//need to account for when they are equal
	
	if ((final1<final2<final3) || (final3<final2<final1)){
		middle = final2;
	}else{
		if ((final2<final3<final1) || (final1<final3<final2)){
			middle = final3;
		}else{
			middle = final1;
		}
	}
	
	//create the slices
	slice1.start = 0;
	slice1.end = start;
	
	if ((final2<middle)||(final3>middle)){
		slice2.start = start;
		slice2.end = middle;
		slice3.end = 400;
		slice3.start = middle;
	}else{
		slice3.start = start;
		slice3.end = middle;
		slice2.end = 400;
		slice2.start = middle;
	}
	display();
}

function stop2(){
	final1 = user1;
	final2 = user2;
	final3 = user3;
	
	if ((final1<final2<final3) || (final3<final2<final1)){
		middle = final2;
	}else{
		if ((final2<final3<final1) || (final1<final3<final2)){
			middle = final3;
		}else{
			middle = final1;
		}
	}
	
	//create the slices
	slice2.start = 0;
	slice2.end = start;
	
	if ((final1<middle)||(final3>middle)){
		slice1.start = start;
		slice1.end = middle;
		slice3.end = 400;
		slice3.start = middle;
	}else{
		slice3.start = start;
		slice3.end = middle;
		slice1.end = 400;
		slice1.start = middle;
	}
	display();
	
}

function stop3(){
	final1 = user1;
	final2 = user2;
	final3 = user3;
	
	if ((final1<final2<final3) || (final3<final2<final1)){
		middle = final2;
	}else{
		if ((final2<final3<final1) || (final1<final3<final2)){
			middle = final3;
		}else{
			middle = final1;
		}
	}
	//create the slices
	slice3.start = 0;
	slice3.end = start;
	
	if ((final2<middle)||(final1>middle)){
		slice2.start = start;
		slice2.end = middle;
		slice1.end = 400;
		slice1.start = middle;
	}else{
		slice1.start = start;
		slice1.end = middle;
		slice2.end = 400;
		slice2.start = middle;
	}
	display();
}

function display(){
	div = document.getElementById('hide')
    div.style.display = "block";
	
	var c = document.getElementById("user1slice");
	var ctx = c.getContext("2d");
	ctx.drawImage(img,0,0, c.width, c.height);
	ctx.rect(0,0,slice1.start*3,c.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	ctx.rect(slice1.end*3,0,c.width,c.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	var d = document.getElementById("user2slice");
	var ctx = d.getContext("2d");
	ctx.drawImage(img,0,0, d.width, d.height);
	ctx.rect(0,0,slice2.start*3,d.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	ctx.rect(slice2.end*3,0,d.width,d.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	var e = document.getElementById("user3slice");
	var ctx = e.getContext("2d");
	ctx.drawImage(img,0,0, e.width, e.height);
	ctx.rect(0,0,slice3.start*3,e.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
	
	ctx.rect(slice3.end*3,0,e.width,e.height);
    ctx.lineWidth = 0;
    ctx.fillStyle = '#FFFFFF';
    ctx.fill();
    ctx.stroke();
}