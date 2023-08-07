function round(num, precision = 0) {
  let multi = Math.pow(10, precision);
  return Math.round(num * multi) / multi;
}

const convertToCelsius = function (tempF) {
  return round((tempF - 32) * (5 / 9), 1);

};

const convertToFahrenheit = function (tempC) {
  return round(tempC * (9 / 5) + 32, 1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
