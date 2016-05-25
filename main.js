// Write a function called letterCapitalize which takes a single string 
// parameter and capitalizes the first letter of each word in the string. You 
// can assume that words in the input string will be separated by only one space.

function letterCapitalize(inputStr){
    var firstLetter = inputStr.charAt(0).toUpperCase() + inputStr.substring(1, inputStr.length)
    
    return firstLetter
}

letterCapitalize('brian in the best name in the world!')

// Write a function called wordCount which takes a single string parameter and 
// returns the number of words the string contains (ie. "Never eat shredded 
// wheat" would return 4). You can assume that words in the input string will be 
// separated by only one space.

function wordCount(inputStr){
    return inputStr.split(' ').length
}

wordCount('Today is the first day of the rest of our lives.') 