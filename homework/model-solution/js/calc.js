// Add a click event listener to a button DONE
// Add click event listeners for each button * DONE
// Event listener accesses the text from the button that is clicked DONE
// Enter the text from the number and operator buttons onto the screen in the HTML *

var numberButtons = document.getElementsByClassName('buttonNum');
var operatorButtons = document.getElementsByClassName('operator');
var display = document.getElementById('screen');
var equalsButton = document.getElementsByClassName('equals')[0];
var firstNumber, secondNumber;

function addButtonListeners() {
	for (var ii = 0; ii < numberButtons.length; ii++) {
		var button = numberButtons[ii];
		button.addEventListener("click", function(event) {
			var number = event.target.innerHTML;
			displayText(number);
			saveNumber(number);
		});
	}

	for (var ii = 0; ii < operatorButtons.length; ii++) {
		var button = operatorButtons[ii];
		button.addEventListener("click", function() {
			displayText(this.innerHTML);
		});
	}

	equalsButton.addEventListener("click", function() {
		calculate("vars");
	})
}

addButtonListeners();

function displayText(text) {
	return display.innerHTML = text;
}

function saveNumber() {
	if (!firstNumber) {
		return firstNumber = number;
	} else {
		return secondNumber = number;
	}
}

// Add event listener to the calculate button that fires function called "calculate" *

// Write the calculate function to take two numbers and an operator and return the answer
function calculate(firstNum, secondNum, operator) {
	switch(operator) {
		case "+":
			return firstNum + secondNum;
		case "-":
			return firstNum - secondNum;
		case "*":
			return firstNum * secondNum;
		case "/":
			return firstNum / secondNum;
		default:
			return "Incorrect Operator";
	}
}
// Display the answer on the screen

// Add an event listener to the rest button to clear the page and the variables *