//Nora Top 2015/09/14: This file contains my answers for the warriors part of the javascript-part-2 workshop at DecodeMTL

/*
constructor function called Warrior that can create new warriors. This function will take parameters name, and gender. 
name can be any string, gender can be M or F. It should create a warrior that has these properties:
name: the value that was passed to the constructor
gender: the value that was passed to the constructor
level: 1
weapon: wooden sword
power: a random number between 1 and 100
fight: will output to the console: " rushes to the arena with "
faceoff: faceoff takes one argument called opponent. Based on the power of each opponent, this method should output to the console which player won the fight based on their power. Be as creative as you like with the text of this method :)
*/

function Warrior(name,gender){
	this.name = name;
	if (gender === 'F') {this.gender = gender;}
	else this.gender = 'M';
	this.level = 1;
	this.weapon = 'wooden sword';
	this.power = Math.round(100*Math.random());
	this.fight = function(){
		console.log(' rushes to the arena with ');
	};
	this.faceoff = function(opponent){
		if (this.power === opponent.power) {console.log("This fight ends to a tie");}
		else if (this.power > opponent.power) {console.log(this.name + " won the fight using a " + this.weapon);}
		else {this.name + " was too weak. " + opponent.name + " won the game in 5 seconds."}
	}
}




/*
constructor function called Warrior that can create new warriors. This function will take parameters name, and gender. 
name can be any string, gender can be M or F. It should create a warrior that has these properties:
name: the value that was passed to the constructor
gender: the value that was passed to the constructor
level: 1
weapon: wooden sword
power: a random number between 1 and 100
fight: will output to the console: " rushes to the arena with "
faceoff: faceoff takes one argument called opponent. Based on the power of each opponent, this method should output to the console which player won the fight based on their power. Be as creative as you like with the text of this method :)
*/

function Warrior(name,gender){
	this.name = name;
	if (gender === 'F') {this.gender = gender;}
	else this.gender = 'M';
	this.level = 1;
	this.weapon = 'wooden sword';
	this.power = 100*Math.random();
}

Warrior.prototype = {
	fight : function(){
		console.log(' rushes to the arena with ');
	},
	faceoff : function(opponent){
		if (this.power === opponent.power) {console.log("The fight between "+this.name+" and "+opponent.name+" ends to a tie");}
		else if (this.power > opponent.power) {console.log(this.name + " beats "+opponent.name+" with a " + this.weapon);}
		else {console.log(this.name + " was too weak. " + opponent.name + " won the game in 5 seconds.")}
	}
}

var warrior1 = new Warrior('hulk','M');
var warrior2 = new Warrior('catwoman','F');
var warrior3 = new Warrior('Mary Poppins','F');
var warrior4 = new Warrior('Mad Max','M');

warrior1.faceoff(warrior4);
warrior1.faceoff(warrior3);
warrior3.faceoff(warrior1);
warrior4.faceoff(warrior2);

