/*var colors = ["rgb(255, 0, 0)",
							"rgb(255, 255, 0)",
							"rgb(0, 255, 0)",
							"rgb(0, 255, 255)",
							"rgb(0, 0, 255)",
							"rgb(255, 0, 255)"
]; */

var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
//var pickedcolor = colors[4];

var pickedcolor = pickRandomColor();

var reset = document.getElementById("reset");
var colorDisplay = document.getElementById("pcolor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent = pickedcolor;


easyBtn.addEventListener("click", function(){

	
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares  = 3;
	colors = generateRandomColors(numSquares);
	pickedcolor = pickRandomColor();
	colorDisplay.textContent = pickedcolor;
	for( var i =0 ; i < squares.length; i++){

		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display ="none";
		}
	}


});

hardBtn.addEventListener("click", function(){

	

	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares =6;
	colors = generateRandomColors(numSquares);
	pickedcolor = pickRandomColor();
	colorDisplay.textContent = pickedcolor;
	for( var i =0 ; i < squares.length; i++){

		
			squares[i].style.backgroundColor = colors[i];
		
			squares[i].style.display ="block";
	}
	

});

reset.addEventListener("click",function(){

	//alert("Hell you have clicked the new colors button");	
	colors = generateRandomColors(6);

	pickedcolor = pickRandomColor();

	colorDisplay.textContent = pickedcolor;

	for(var i =0; i< colors.length; i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display ="block";
	}

	h1.style.backgroundColor="steelblue";
	message.textContent =" ";
	reset.textContent=" New Colors "

});


for( var i =0; i<colors.length; i++){

		squares[i].style.backgroundColor=colors[i];

		//upon clicking get the color in the alert window

		squares[i].addEventListener("click", function(){

				var clickedcolor = this.style.backgroundColor;
				if(clickedcolor === pickedcolor){
					alert(" The color clicked is Correct");
					message.textContent ="Correct!!!";
					reset.textContent="Play Again???"
					changedColor(clickedcolor);
					h1.style.backgroundColor=clickedcolor;

				}
				else{

					alert(" The color clicked is WRONG");
					this.style.backgroundColor = "#232323";
					message.textContent = "Try Again!!!";

				}

		});

		function changedColor(color){

			for( var i =0; i<colors.length; i++){

				squares[i].style.backgroundColor = color;
			}
		}
}

function pickRandomColor(){

		var randomcl = Math.floor(Math.random() * colors.length);

		return colors[randomcl];

}

function generateRandomColors(num){

	var arr = [];

	for( var i=0; i<num; i++){

		arr.push(randomColor());

	}


	return arr;
}


function randomColor(){

	var r = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);

	//alert("rgb(" + r + ", " + g + ", " + b + ")");

	return "rgb(" + r + ", " + g + ", " + b + ")";

}

		