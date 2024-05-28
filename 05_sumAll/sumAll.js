const sumAll = function (numberOne, numberTwo) {
  if (
    typeof numberOne !== "number" ||
    typeof numberTwo !== "number" ||
    numberOne < 0 ||
    numberTwo < 0
  ) {
    return "ERROR";
  }

  let start = Math.min(numberOne, numberTwo);
  let end = Math.max(numberOne, numberTwo);
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
