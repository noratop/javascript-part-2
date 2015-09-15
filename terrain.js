// Nora TOP 2015/09/14 : This file contains my answers to the terrain part of the javascript-part-2 workshop at DecodeMTL

/*
constructor function called Tile that can create new tiles. This function will take parameters x and y and create an object that has these properties:
x: the value that was passed to the constructor
y: the value that was passed to the constructor
height: a random number between 1 and 3
type: a random word between grass, rocks or water
condition: a random word between burning, normal or frozen
In addition to that, every object that gets created should have the following methods:
freeze: if the object is burning, then its condition should change to normal. if the object is normal then its condition should change to frozen and if it is frozen, its height should increment by 1
burn: if the object is frozen, then it will become normal. if the object is normal, then it should change to burning. if it is already burning, then its height should decrement by 1 until it gets to 0.
*/

function Tile(x,y){
	this.x = x;
	this.y = y;
	this.height = 3*Math.random();

	var randomType = 3*Math.random();

	if (randomType <= 1) {this.type = 'grass';}
	else if (randomType <= 2) {this.type = 'rocks';}
	else {this.type = 'water';}

	var randomCondition = 3*Math.random();
	if (randomCondition <= 1) {this.condition = 'burning';}
	else if (randomCondition <= 2) {this.condition = 'normal';}
	else {this.condition = 'frozen';}
}



Tile.prototype = {
	freeze : function(){
	    switch(this.condition) {
	        case 'burning':
	            this.condition = 'normal';
	            break;
	        case 'frozen':
	            this.height++;
	            break;
	        default:
	        this.condition = 'frozen';
	    }
	},
	burn : function(){
	    switch(this.condition) {
	        case 'frozen':
	            this.condition = 'normal';
	            break;
	        case 'burning':
	            if (this.height === 0) {
	            	while (this.weight>0){
	            		this.height--;
	            	}
	            }
	            break;
	        default:
	        this.condition = 'burning';
	    }
	}
}

var map20by20 = [];
for (var j = 1; j <= 20; j++){
	var newRow = [];
		for (var i= 1; i <= 20; i++){
			newRow.push(new Tile(j,i));
		}

	map20by20.push(newRow);
	//console.log(newRow);
}