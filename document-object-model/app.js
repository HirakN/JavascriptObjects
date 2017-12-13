//console.log(document.children[0]);
function test() {
	var myName = document.getElementsByClassName('firstPar');
	console.log(myName);
	myName[0].innerHTML = "<button>Click here to win an iPhone 6!</button>";
}

// ..ByCLassName returns array, ById returns single val.