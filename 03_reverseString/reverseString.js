const reverseString = function (string) {
    // Step 1: Change string to an array and split all letters
    let splitString = string.split("");
  
    // Step 2: Reverse the order of the newly split letters
    let reverseString = splitString.reverse();
  
    // Step 3: Join the split letters and return as a string
    let joinedString = reverseString.join("");
  
    return joinedString;
  };
  

// Do not edit below this line
module.exports = reverseString;
