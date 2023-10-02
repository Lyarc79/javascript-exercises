const convertToCelsius = function(x) {
  x = (x - 32) * 5 / 9;
  return Math.round(x * 10) / 10;
};

const convertToFahrenheit = function(x) {
  x = (x * 9 / 5 + 32);
  return Math.round(x * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
