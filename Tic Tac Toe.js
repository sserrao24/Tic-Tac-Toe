alert("Welcome to Tic-Tac-Toe!!!")

var gameBoard =  [0,1,2,
				  3,4,5,
				  6,7,8];

var winningCombinations = 
				[[0,1,2],	// 0
				 [3,4,5],	// 1
				 [6,7,8],	// 2
				 [0,3,6],	// 3
				 [1,4,7],	// 4
				 [2,5,8],	// 5
				 [0,4,8],	// 6
				 [2,4,6]];	// 7

var X = [];
var O = [];

randomStart();

	function randomStart(){
		if(Math.round(Math.random())>0){
			X = "first";
			O = "second";
		}
		else{
			O = "first";
			X = "second";
		}
	}


if(x = "first"){
	playerX();
}
else{
	playerO();
}

	function playerX(){
		var choice = prompt("Input the numbered spot you want to place X in: ");
		//while(gameBoard[choice]!== "x" || (gameBoard[choice]) !== "o" ){				//trying to figure a loop here
		if((gameBoard[choice]) !== "x" || (gameBoard[choice]) !== "o" ){
			gameBoard[choice] = "x";
		}
		else{
			var choice = prompt("Sorry Pick a new spot Input the numbered spot you want to place X in: ");
		}
	}
	 
	