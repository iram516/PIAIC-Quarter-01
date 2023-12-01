"use strict";
//Celcius to Fahrenheit:
const celciusToFahrenheit = (celcius) => {
    return celcius * 1.8 + 32;
};
const celcius = 37;
const fahrenheit = celciusToFahrenheit(celcius);
console.log(fahrenheit);
function convertCelsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}
console.log(`${celcius}°C is equal to ${fahrenheit}°F`);
