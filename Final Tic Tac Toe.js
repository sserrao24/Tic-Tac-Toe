alert("Welcome to Tic-Tac-Toe!!!");

var gameBoard =  [0,1,2,
				  3,4,5,
				  6,7,8];

var combo = 	[[0,1,2],	// 0			
				 [3,4,5],	// 1
				 [6,7,8],	// 2
				 [0,3,6],	// 3
				 [1,4,7],	// 4
				 [2,5,8],	// 5
				 [0,4,8],	// 6
				 [2,4,6]];	// 7

var player_x = "x";
var player_o = "o";

randomStart();

function randomStart(){
	var first_player = player_x; 
	if(Math.round(Math.random())>0){
		first_player = player_o;
	}

	alert(`Player ${first_player} is first.`);
	play(first_player);
}

//player X turn to choose a spot
function play(current_player){

	var tile_count = 9; 
	var choice = prompt(`Input the numbered spot you want to place ${current_player} in: `);
	
	if(tile_count > 0){
		for(var i=0; i<gameBoard.length; i++){
			if( (gameBoard[choice]) == player_x || (gameBoard[choice]) == player_o ){
				choice = prompt(`Sorry Pick a new spot Input the numbered spot you want to place ${current_player} in: `);
			}
			else{
				gameBoard[choice] = current_player;
				tile_count--; 
				break;
			}
		}
	}
	else{
		alert("End Game. It's a tie.");
	}
	
	var winning_line = { x: "x,x,x", o: "o,o,o" };
	
	for(var i = 0; i<combo.length; i++){
		if(gameBoard[combo[i]].join() == winning_line[current_player]){
			alert("You Win");
			break;
		}
	}
	
	(current_player === "x") ? play(player_o) : play(player_x);
}
