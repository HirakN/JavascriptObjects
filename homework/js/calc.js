//add on clicks

//
var updateField = document.getElementById('screen');
var updateString="";

var buttons = document.getElementsByClassName("buttonNum"); //returns array

function update(val) {
	updateField.innerHTML = val;
}

function clear() {
	updateString = "";
}

function one() {
	updateString = updateString + 1;
	update(updateString);
}

function two() {
	updateString = updateString + 2;
	update(updateString);
}

function three() {
	updateString = updateString + 3;
	update(updateString);
}

function four() {
	updateString = updateString + 4;
	update(updateString);
}

function five() {
	updateString = updateString + 5;
	update(updateString);
}

function six() {
	updateString = updateString + 6;
	update(updateString);
}

function seven() {
	updateString = updateString + 7;
	update(updateString);
}

function eight() {
	updateString = updateString + 8;
	update(updateString);
}

function nine() {
	updateString = updateString + 9;
	update(updateString);
}

function mul() {
	updateString = updateString + "*";
	update(updateString);
}

function div() {
	updateString = updateString + "/";
	update(updateString);
}

function add() {
	updateString = updateString + "+";
	update(updateString);
}

function sub() {
	updateString = updateString + "-";
	update(updateString);
}

function eq() {
	updateString = eval(updateString);
	update(updateString);
	// toString call
	updateString = updateString.toString();
}

function ac() {
	clear();
	update("CLEARED");
}