//Celcius to Fahrenheit:
const celciusToFahrenheit = (celcius: number): number => {
  return celcius * 1.8 + 32;
};
const celcius = 37;
const fahrenheit = celciusToFahrenheit(celcius);
console.log(fahrenheit);

function convertCelsiusToFahrenheit(celsius: number): number {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

console.log(`${celcius}°C is equal to ${fahrenheit}°F`);


