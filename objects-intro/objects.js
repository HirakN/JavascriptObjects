// Method 1
var Person = new Object();

Person.age = 55;
Person.name = "Hirak Naik";
Person.numbers = [1,2,3,4,5];
Person.alertMe = function() {
	alert("Your Mac has been infected!")
}
Person.alertMe2 = function() {
	return "shout";
}

console.log(Person);
console.log(Person.age);

var result = Person.alertMe2();
console.log(result);

// Method 2 - Object.create
var Car = Object.create(Object.prototype);
Car.engineSize = "V8";

console.log(Car);

// Method 3 - Function constructor
var Zoo = function() {
	this.name = "London Zoo";
	this.postCode = "NW2 3ZK";
	this.fname = function() {
		alert("hello zoo speaking");
	}
	this.animals = ["Wolf", "Lion", "Dog"]
}

var MyZoo = new Zoo();
var YourZoo = new Zoo();
var TheirZoo = new Zoo();


YourZoo.name = "hello";

console.log(MyZoo);
console.log(YourZoo);
console.log(TheirZoo);

// Method 4 - Function contructor with args
var Biscuit = function(name, type, flavour, size) {
	this.name = name;
	this.type = type;
	this.flavour = flavour;
	this.size = size;
}

var Oreo = new Biscuit("Oreo", "sandwich", "Chocolatey", "medium");

console.log(Oreo);

// Object creation using JSON
var person1 = {
	name: "Steve",
	age: 32,
	employed: true,
	sayHello: function() {
		console.log("Hi my name is " + this.name);
	}
}

console.log(person1);
person1.sayHello();