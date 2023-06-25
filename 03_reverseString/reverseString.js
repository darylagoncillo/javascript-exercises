const reverseString = function(str) {
    /*
    1. Split the string with split() into an array of the individual letters
    2. Reverse the array with reverse()
    3. Join the individual array strings back into one string with join()
    */
    return str.split('').reverse().join('')
};

// Do not edit below this line
module.exports = reverseString;
