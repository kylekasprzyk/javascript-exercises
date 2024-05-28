const convertToCelsius = function (temperatureFahrenheit) {
  let temperatureCelsius = (temperatureFahrenheit - 32) * (5 / 9);
  let rounded = Math.round(temperatureCelsius * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function (celsiusTemperature) {
  let fahrenheitTemperature = celsiusTemperature * (9 / 5) + 32;
  let fahrenheitRounded = Math.round(fahrenheitTemperature * 10) / 10;
  return fahrenheitRounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
