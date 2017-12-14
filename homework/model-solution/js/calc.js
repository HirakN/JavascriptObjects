// Add a click event listener to a button DONE
// Add click event listeners for each button * DONE
// Event listener accesses the text from the button that is clicked DONE

var numberButtons = document.getElementsByClassName('buttonNum');
var operatorButtons = document.getElementsByClassName('operator');
var display = document.getElementById('screen');
function addButtonListeners() {
	for (var ii = 0; ii < numberButtons.length; ii++) {
		var button = numberButtons[ii];
		button.addEventListener("click", function(event) {
			console.log(event.target.innerHTML);
		});
	}

	for (var ii = 0; ii < operatorButtons.length; ii++) {
		var button = operatorButtons[ii];
		button.addEventListener("click", function() {
			console.log(this.innerHTML);
		});
	}
}

addButtonListeners();

// Enter the text from the number and operator buttons onto the screen in the HTML *
function displayText(text) {
	return display.innerHTML = text;
}

displayText("hello");
// Add event listener to the calculate button that fires function called "calculate" *

// Write the calculate function to take two numbers and an operator and return the answer

// Display the answer on the screen

// Add an event listener to the rest button to clear the page and the variables *