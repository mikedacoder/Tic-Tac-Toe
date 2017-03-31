// Declare array to to hold all of the starting divs.
var divArray = [1,2,3,4,5,6,7,8,9];
// Variables to hold letter value of the selection.
var div1, div2, div3, div4, div5,
	div6, div7, div8, div9;
// Initialize variables used for determining the winner.
var userWon = false;
var computerWon = false;

// Function to set the user's selection. Turns the div
// red and places an 'X' in it.
function setUserSelection(ID){
			ID = document.getElementById(ID);		
			ID.style.backgroundColor="red";
			ID.innerHTML="X";			
}

// Function to set the computer's selection. Turns the div
// blue and places an 'O' in it.
function setComputerSelection(computerChoice){
			ID = document.getElementById(computerChoice);		
			ID.style.backgroundColor="blue";
			ID.innerHTML="O";			
}
	
// Function to change the div when selected
// (parameter passed from in parentheses of what's
// in the onclick quotes.
function Changediv(ID){	

	if (divArray.indexOf(ID) === -1){	
		message.innerHTML="That spot has already been selected, please select again";
	}
	
	else{
		// Clear message.
		message.innerHTML="";
		
		// Number passed from div selection causes the
		// div to change to a red box with a large 'X'.
		switch(ID){
			case 1:
				div1 = 'X';
				setUserSelection(ID);
				break;
			case 2:
				div2 = 'X';
				setUserSelection(ID);
				break;
			case 3:
				div3 = 'X';
				setUserSelection(ID);
				break;
			case 4:
				div4 = 'X';
				setUserSelection(ID);
				break;
			case 5:	
				div5 = 'X';
				setUserSelection(ID);
				break;
			case 6:
				div6 = 'X';
				setUserSelection(ID);
				break;
			case 7:	
				div7 = 'X';
				setUserSelection(ID);
				break;
			case 8:	
				div8 = 'X';
				setUserSelection(ID);
				break;
			case 9:	
				div9 = 'X';
				setUserSelection(ID);
				break;					
		}
		
		// Determine if the user has won the game.
		if((div1 === 'X' && div2 === 'X' && div3 === 'X') ||
		   (div4 === 'X' && div5 === 'X' && div6 === 'X') ||
		   (div7 === 'X' && div8 === 'X' && div9 === 'X') ||
		   (div1 === 'X' && div4 === 'X' && div7 === 'X') ||
		   (div2 === 'X' && div5 === 'X' && div8 === 'X') ||
		   (div3 === 'X' && div6 === 'X' && div9 === 'X') ||
		   (div1 === 'X' && div5 === 'X' && div9 === 'X') ||
		   (div3 === 'X' && div5 === 'X' && div7 === 'X')){
				winner = document.getElementById('winner');
				winner.innerHTML="You Win!!!";
				userWon = true;
				divArray = [];
		}	
		
		// Cause a short delay so it appears that the computer
		// is taking a turn.
		setTimeout(function() {
		
			// Only continue if the user did not already win.
			if(!userWon){		
			
				// Remove the used div from the array so it cannot be
				// used again.
				var index = divArray.indexOf(ID);
				divArray.splice(index, 1);		
			
				console.log(divArray);
			
				// Make a random selection from the remaining divs for
				// the computer to use.
				var rand = Math.floor(Math.random() * divArray.length);				
			
				console.log(rand);		
				
				// Set computer's choice to the randomly generated
				// value from divArray.
				computerChoice = divArray[rand];
			
				console.log(computerChoice);
			
				// Number passed from computer's div selection causes the
				// div to change to a blue box with a large 'O'.
				switch(computerChoice){
					case 1:
						div1 = 'O';						
						setComputerSelection(computerChoice);
						break;
					case 2:
						div2 = 'O';
						setComputerSelection(computerChoice);
						break;
					case 3:
						div3 = 'O';
						setComputerSelection(computerChoice);
						break;
					case 4:
						div4 = 'O';
						setComputerSelection(computerChoice);
						break;
					case 5:	
						div5 = 'O';
						setComputerSelection(computerChoice);
						break;
					case 6:
						div6 = 'O';
						setComputerSelection(computerChoice);
						break;
					case 7:	
						div7 = 'O';
						setComputerSelection(computerChoice);
						break;
					case 8:	
						div8 = 'O';
						setComputerSelection(computerChoice);
						break;
					case 9:	
						div9 = 'O';		
						setComputerSelection(computerChoice);
						break;					
		}
			
				// Remove the used div from the array so it cannot be
				// used again.
				var index2 = divArray.indexOf(computerChoice);
				divArray.splice(index2, 1);
			
				console.log(divArray);		
			
				// Determine if the computer has one the game.
				if((div1 === 'O' && div2 === 'O' && div3 === 'O') ||
				   (div4 === 'O' && div5 === 'O' && div6 === 'O') ||
				   (div7 === 'O' && div8 === 'O' && div9 === 'O') ||
				   (div1 === 'O' && div4 === 'O' && div7 === 'O') ||
				   (div2 === 'O' && div5 === 'O' && div8 === 'O') ||
				   (div3 === 'O' && div6 === 'O' && div9 === 'O') ||
				   (div1 === 'O' && div5 === 'O' && div9 === 'O') ||
				   (div3 === 'O' && div5 === 'O' && div7 === 'O')){
						winner = document.getElementById('winner');
						winner.innerHTML="Sorry, the computer wins.";
						computerWon = true;
						divArray = [];
				}
			}
			
			// Determine if the game is a draw.
			if(!userWon && !computerWon && divArray.length < 1){
				winner = document.getElementById('winner');
				winner.innerHTML="Draw!";
			}
			
		}, (500)); // Set time out to 500 milliseconds (1/2 second).
	
	}
	
}