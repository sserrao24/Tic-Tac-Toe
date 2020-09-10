alert("Welcome to Tic-Tac-Toe!!!");

var gameBoard =  [0,1,2,
				  3,4,5,
				  6,7,8];

var combo = 								
				[[0,1,2],	// 0			
				 [3,4,5],	// 1
				 [6,7,8],	// 2
				 [0,3,6],	// 3
				 [1,4,7],	// 4
				 [2,5,8],	// 5
				 [0,4,8],	// 6
				 [2,4,6]];	// 7

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
	alert("Player X is first.");
	playerX();
}
else{
	alert("Player O is first.");
	playerO();
}

//player X turn to choose a spot
	function playerX(){
	
		var choice = prompt("Input the numbered spot you want to place X in: ");
		for(var i=0; i<gameBoard.length; i++)													//how do i make this loop unending: until it hits the "break"
			if((gameBoard[choice]) == "x" || (gameBoard[choice]) == "o" ){
				var choice = prompt("Sorry Pick a new spot Input the numbered spot you want to place X in: ");
		
			}
			else{
				gameBoard[choice] = "x";
				break;
			}
	
	 
//player X did this connect 3 in a row?

		for(var i = 0; i<combo.length; i++){
			let xxx = [];
			xxx.push(gameBoard[combo[i][0]]);
			xxx.push(gameBoard[combo[i][1]]);
			xxx.push(gameBoard[combo[i][2]]);
		
			if(JSON.stringify(xxx) == JSON.stringify(["x","x","x"])){
				alert("You Win");
				return;
			}
			else{ 
				xxx = [];
			}
		}

//player X are all indexes filled in the array?
		var sum = 0;

		for(var i=0;i<gameBoard.length; i++){
				if(gameBoard[i]<9){
					sum += gameBoard[i];
				}
		}
		if(sum = 0){
				alert("End Game. It's a tie.");
		}
		else{
			playerO();
		}
	}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//player X turn to choose a spot
	function playerO(){
	
		var choice = prompt("Input the numbered spot you want to place O in: ");
		for(var i=0; i<gameBoard.length; i++)													//how do i make this loop unending: until it hits the "break"
			if((gameBoard[choice]) == "x" || (gameBoard[choice]) == "o" ){
				var choice = prompt("Sorry Pick a new spot Input the numbered spot you want to place O in: ");
		
			}
			else{
				gameBoard[choice] = "o";
				break;
			}
	
	 
//player X did this connect 3 in a row?

		for(var i = 0; i<combo.length; i++){
			let ooo = [];
			ooo.push(gameBoard[combo[i][0]]);
			ooo.push(gameBoard[combo[i][1]]);
			ooo.push(gameBoard[combo[i][2]]);
		
			if(JSON.stringify(ooo) == JSON.stringify(["o","o","o"])){
				alert("You Win");
				return;
			}
			else{
				ooo = [];
			}
		}

//player X are all indexes filled in the array?
		var sum = 0;

		for(var i=0;i<gameBoard.length; i++){
				if(gameBoard[i]<9){
					sum += gameBoard[i];
				}
		}
		if(sum = 0){
				alert("End Game. It's a tie.")
		}
		else{
			playerX();
		}
	}