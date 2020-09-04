alert("Welcome to Tic-Tac-Toe!!!")

var gameBoard =  [0,1,2,
				  3,4,5,
				  6,7,8];

var combo = 
				[[0,1,2],	// 0
				 [3,4,5],	// 1
				 ["x", "x", "x"],	// 2
				 [0,3,6],	// 3
				 [1,4,7],	// 4
				 ["x", "x", "x"],	// 5
				 [0,4,8],	// 6
				 [2,4,6]];	// 7

	for(var i=0; i<combo.length; i++){
		if(combo[i] != ["x","x","x"]){
		console.log(combo[i]);
		}
	}


var combo = 
				[["x","x","x"],	// 0
				 [3,4,5],	// 1
				 [6,7,8],	// 2
				 [0,3,6],	// 3
				 [1,4,7],	// 4
				 [2,5,8],	// 5
				 [0,4,8],	// 6
				 [2,4,6]];	// 7

	for(var i=0; i<combo.length; i++){
		if(combo[i] != 3,4,5){
			console.log(combo[i]);
		}
		else{
			console.log("sorry")
		}
	}
