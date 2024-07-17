// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"




// going to need to separate the characters of the string, .split() should work for this
// need to filter through them, .filter()
// need to get the number value of the letters, I believe .charCodeAt() is right
// since it returns a value 64 higher then we want we will subtract 64 from the value to get what we need
// we will need to keep it within a certain range, so we will only want numbers between 64 and 91
// we will then subtract 64 from those numbers to get the one we want
// need to put them back together, .join() is needed for that
// need to make them all lowercase or uppercase, didn't like lowercase for some reason
// we will need to map through the array 
function alphabetPosition(text){
    const upText = text.toUpperCase();
    const arr = upText.split("").map(char => char.charCodeAt());
    const arrNew = arr.filter(num => {
        if(num > 64 && num < 91){
            return num;
        }
    })
    const numArr = arrNew.map(num => num - 64)
    return numArr.join(" ");
}