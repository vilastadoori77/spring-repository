var p1button = document.querySelector("#one");
var p2button = document.querySelector("#two");
//var h1 = document.querySelector("h1");
var spl1 = document.getElementById("spl1");
var spl2 = document.getElementById("spl2");
var reset = document.getElementById("reset");

var p1b =0;
var p2b =0;
var gameOver = false;
var winningScore = 7;


p1button.addEventListener("click",function(){


		//alert(" Clicked the p1button");
		if(!gameOver)

				p1b++;
				
				if(p1b === winningScore)
				{
						
							console.log("Game Over");
							spl1.classList.add("winner");
							gameOver = true;

				}

				spl1.textContent= p1b;

});


p2button.addEventListener("click", function (){



	if( !gameOver){

			p2b++;
			if(p2b === winningScore){

				console.log("Game Over");
				spl2.classList.add("winner");
				gameOver=true;


			}
			spl2.textContent=p2b;

	}
	

	

});

reset.addEventListener("click", function(){

	p1b =0;
	p2b =0;

	spl1.textContent = 0;
	spl2.textContent =0;
	spl1.classList.remove("winner");
	spl2.classList.remove("winner");

	gameOver = false;

}); 





//alert("We have reached the scorekeeper.js ");