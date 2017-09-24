/*var colors = ["rgb(255, 0, 0)",
							"rgb(255, 255, 0)",
							"rgb(0, 255, 0)",
							"rgb(0, 255, 255)",
							"rgb(0, 0, 255)",
							"rgb(255, 0, 255)"
]; */

var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
//var pickedcolor = colors[4];

var pickedcolor = pickRandomColor();

var reset = document.getElementById("reset");
var colorDisplay = document.getElementById("pcolor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedcolor;


reset.addEventListener("click",function(){

	alert("Hell you have clicked the new colors button");

	colors = generateRandomColors(6);

	pickedcolor = pickRandomColor();

	colorDisplay.textContent = pickedcolor;

	for(var i =0; i< colors.length; i++){
		squares[i].style.backgroundColor=colors[i];
	}

	h1.style.backgroundColor="#232323";
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

		