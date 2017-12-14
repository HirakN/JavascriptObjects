// Add a click event listener to a button DONE
// Add click event listeners for each button * DONE
// Event listener accesses the text from the button that is clicked DONE
// Enter the text from the number and operator buttons onto the screen in the HTML * DONE
// Add event listener to the calculate button that fires function called "calculate" * DONE
// Add an event listener to the rest button to clear the page and the variables *

var numberButtons = document.getElementsByClassName('buttonNum');
var operatorButtons = document.getElementsByClassName('operator');
var display = document.getElementById('screen');
var equalsButton = document.getElementsByClassName('equals')[0];
var resetButton = document.getElementsByClassName('buttonClear')[0];
var firstNumber, secondNumber, operator;

function init() {
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
			operator = this.innerHTML;
		});
	}

	equalsButton.addEventListener("click", function() {
		displayText(calculate(firstNumber, secondNumber, operator))
	});
	resetButton.addEventListener("click", reset);
}


function displayText(text) {
	return display.innerHTML = text;
}

function saveNumber(number) {
	parsedNumber = parseFloat(number);
	if (!firstNumber) {
		return firstNumber = parsedNumber;
	} else {
		return secondNumber = parsedNumber;
	}
}

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
			throw "Incorrect Operator";
	}
}
// Display the answer on the screen
function reset() {
	var firstNumber, secondNumber, operator = null;
	displayText(0);
}
init();