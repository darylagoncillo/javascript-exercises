const repeatString = function (word, times) {
  //create blank string
  if (times < 0) {
    return "ERROR";
  }
  let string = "";
  //create a loop that adds word + how many times it says
  for (i = 0; i < times; i++) {
    string += word;
  }
  return string;
};

// Do not edit below this line
module.exports = repeatString;
