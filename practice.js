alert("Welcome to Tic-Tac-Toe!!!")

var gameBoard =  ["0","1","2","3","4","5","6","7","8"];

playerX();

	function playerX(){
		var choice = prompt("Input the numbered spot you want to place X in: ");

			if((gameBoard[choice]) == choice){
			gameBoard[choice] == "x";
			}
			else{
			prompt("This spot is taken. Choose another numbered spot: ");
			}
	}
	
console.log(gameBoard);


alert("Welcome to Tic-Tac-Toe!!!")

var gameBoard =  ["0","1","2","3","4","5","6","7","8"];

playerX();

	function playerX(){
		var choice = prompt("Input the numbered spot you want to place X in: ");

			if((gameBoard[choice]) == choice){
				gameBoard[choice] = "x"
			}
			else{
			prompt("This spot is taken. Choose another numbered spot: ");
			}
	}
	
console.log(gameBoard);
