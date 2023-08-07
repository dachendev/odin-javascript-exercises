const sumAll = function(a, b) {
  // Returns 'ERROR' with non-number parameters
  // Returns 'ERROR' with negative numbers
  if (
    (typeof a !== "number" || typeof b !== "number")
    || (a < 0 || b < 0)
  ) {
    return "ERROR";
  }

  // Works with larger number first
  let min = a;
  let max = b;

  if (a > b) {
    min = b;
    max = a;
  }

  // Sums numbers within the range
  // Iterate [min, max] (inclusive)
  let sum = 0;

  for (let n = min; n < max + 1; n++) {
    sum += n;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
