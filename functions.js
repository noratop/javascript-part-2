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