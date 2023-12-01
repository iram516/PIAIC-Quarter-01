"use strict";
// Reverse String Function
function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}
const originalString = "I am Learning Web3 with PIAIC";
const reversedString = reverseString(originalString);
console.log(reversedString);
/*function reorderString(inputString: string): string {
    return inputString.split('').sort().join('');
}
const givenString: string = "Where Are You Going";
const reorderedString: string = reorderString(givenString);
console.log(reorderedString);*/
