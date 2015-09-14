// Nora Top - this file contains all my answers for the javascript-part-2 workshop at DecodeMTL

/*Create a function that can be used with sort. 
This function should take two strings, and return a value that sort can use to determine which is the longest string. 
Finally, create an array of strings and try to get it sorted using your new function.*/

//function to use with sort in order to put the longest string at first element in array
function compareStringsForSort(a,b) {
        if (a.length > b.length) return -1;
        if (a.length < b.length) return 1;
        return 0;
}

//Exemple of use for the compareStringsForSort with sort
['word1', 'longestWordToGoFirst','word2'].sort(compareStringsForSort);

//******OFFSCOPE****** function longestWord as created in the javascript workshop part-1, but using the new function compareStringsForSort
function longestWord(phrase){
    
    var wordList = [];
    
    if (typeof phrase === 'string'){
        wordList = phrase.split(/[\s,./'\!}{"|?><+_)(*&^!\[\]]/g).sort(compareStringsForSort);
        
        return wordList.shift();
    }
    else return 'Please provide a phrase';
}
