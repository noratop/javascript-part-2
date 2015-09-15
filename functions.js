// Nora Top - this file contains all my answers for the javascript-part-2 workshop at DecodeMTL

/*Create a function that can be used with sort. 
This function should take two strings, and return a value that sort can use to determine which is the longest string. 
Finally, create an array of strings and try to get it sorted using your new function.*/

//function to use with sort in order to put the longest string at last in array
function compareStringsForSort(a,b) {
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
        return 0;
}

//Exemple of use for the compareStringsForSort with sort
['word1', 'longestWordToGoLast','word2'].sort(compareStringsForSort);


/*Create an array of objects (don’t need to use new here, just regular object literals). 
These objects will contain a name and email property. 
Then, run some code that will sort your array by the longest name. 
Then, run some code that will sort your array by e-mail address in alphabetical order.*/

var listOfEmail = [
    {name: 'Nora',
    email: 'top.nora@gmail.com'},
    {name: 'Nathan',
    email: 'Nathan@gmail.com'},
    {name: 'Ziad',
    email: 'Ziad@gmail.com'},
    {name: 'Karl',
    email: 'Karl@gmail.com'},
    {name: 'François',
    email: 'François@gmail.com'}
    ];
    
// sort listOfEmail by the longest name 
listOfEmail.sort(function(a,b){
	if (a.name.length > b.name.length) return 1;
    if (a.name.length < b.name.length) return -1;
    return 0;
});



// sort listOfEmail by email alphabetically
listOfEmail.sort(function(a,b){
	if (a.email.toLowerCase() > b.email.toLowerCase()) return 1;
    if (a.email.toLowerCase() < b.email.toLowerCase()) return -1;
    return 0;
});


/*Create a function that can be used with Array.prototype.map. 
This function should take a number and return its square. 
Then, use this function with map on an array of numbers to check the result.*/

function square(num){
    return Math.pow(num,2);
}

//exemple of use for map with the square function
[2,4,6,9].map(square);


/*Create a function that can be used with Array.prototype.map. 
This function should be able to take an object and square its “num” property. 
Then, use this function with map on an array of objects each containing a “num” property.*/

function squareNum(obj){
	
		if (typeof obj === 'object'){

			var returnObj = Object.create(obj);

			returnObj.num = Math.pow(returnObj.num,2);

			return returnObj;
	}
}


//Exemple of use of map with the squareNum function
[{name:'obj1',
num:2},
{name:'obj2',
num:4},
{name:'obj3',
num:3},
{name:'obj4',
num:11},
{name:'obj5',
num:7},
].map(squareNum);


/* Create a function called operationMaker that takes only a string called operation as argument. This string could be “add”, “subtract”, “mult” or “div”. 
Your function will return a function that will take two numbers and return the result of running operation on these numbers.*/

function operationMaker(operation){
    if (typeof operation === "string"){
	    switch(operation) {
	        case 'add':
	            return function(num1,num2){return num1+num2;};
	            break;
	        case 'subtract':
	            return function(num1,num2){return num1-num2;};
	            break;
	        case 'mult':
	            return function(num1,num2){return num1*num2;};
	            break;
	        case 'div':
	            return function(num1,num2){return num1/num2;};
	            break;
	        default:
	        return function(){return 0};
	    }
	}
}

var adder = operationMaker('add');
var sum = adder(5, 10);
console.log(sum);

var multiplier = operationMaker('mult');
var product = multiplier(5, 10);
console.log(product);