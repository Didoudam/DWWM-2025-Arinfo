let temperatureCelcius = prompt("entrez la température en °C");
let temperatureKelvin = Number(temperatureCelcius)+ 273.15;
console.log(`la temperature de ${temperatureCelcius}°C vaut ${temperatureKelvin}K`);