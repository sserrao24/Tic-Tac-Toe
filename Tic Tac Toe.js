alert("Welcome to Tic-Tac-Toe!!!")

var gameBoard =  [0,1,2,
				  3,4,5,
				  6,7,8];

var combo = 								//0xxxxxxxx0xxxxxxx
				[[0,1,2],	// 0			//0xxxxxxxx
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

//player X turn to choose a spot
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
	 
	for(var i=0; i<combo.length; i++){
		if(combo[i] == ["x","x","x"])
	}


//did this connect 3 in a row?
var combo = 
				[["x","x","x"],	// 0
				 [3,4,5],	// 1
				 [6,7,8],	// 2
				 [0,3,6],	// 3
				 [1,4,7],	// 4
				 [2,5,8],	// 5
				 [0,4,8],	// 6
				 [2,4,6]];	// 7
var xxx = ["x","x","x"];

	for(var i=0; i<combo.length; i++){
		if(JSON.stringify(combo[i]) == JSON.stringify(xxx)){
			console.log("You're a winner!");
		}	
		else{
			console.log("Keep playing.");
		}
	}

//are all indexes filled in the array?
var sum = 0;

	for(var i=0;i<gameBoard.length; i++){
		if(gameBoard[i]<9){
			sum += gameBoard[i];
		}
	}

	if(sum = 0){
		alert = "End Game. It's a tie."
	}
	else{
		playerO();
	}
