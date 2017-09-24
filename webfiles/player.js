alert("Hello Reached the player.js");

var plbone = document.querySelector("#pl1");
var plbtwo = document.querySelector("#pl2");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var reset = document.querySelector("#reset");


var intpl1 =0;
var intpl2 =0;
var gameOver = false;
var winningScore = 7;

plbone.addEventListener("click", function()
					{ 
								intpl1++;

								if(!gameOver)
								{

									console.log(" The click is increasing" + intpl1);


										if(intpl1 === winningScore){

											console.log(" The value of the intpl1 is "+" : "+intpl1);

											gameOver = true;
											score1.classList.add("winner");

										}

											score1.textContent = intpl1;
									
								}								

					});


plbtwo.addEventListener("click", function(){


			intpl2++;

			if(!gameOver){


				if( intpl2 === winningScore){


					gameOver = true;
					score2.classList.add("winner");
				}
				score2.textContent = intpl2;
			}

});



reset.addEventListener("click", function(){


			intpl1 =0 ;
			intpl2 =0;

			score1.textContent =0;
			score2.textContent=0;
			score1.classList.remove("winner");
			score2.classList.remove("winner");
			gameOver = false;




});
