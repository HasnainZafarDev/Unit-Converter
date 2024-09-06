const {
  lengthConversionRates,
  weightUnitSymbols,
  weightConversionRates,
  temperatureUnitSymbols,
  lengthUnitSymbols,
  volumeUnitSymbols,
  volumeConversionRates,
  areaUnitSymbols,
  areaConversionRates,
} = require("./constants/constants");

const conversions = {
  length: (value, fromUnit, toUnit) => {
    fromUnit = lengthUnitSymbols[fromUnit] || fromUnit;
    toUnit = lengthUnitSymbols[toUnit] || toUnit;
    if (!lengthConversionRates[fromUnit] || !lengthConversionRates[toUnit]) {
      throw new Error("Invalid unit specified");
    }
    const valueInMeters = value * lengthConversionRates[fromUnit];
    const convertedValue = valueInMeters / lengthConversionRates[toUnit];
    return convertedValue;
  },

  weight: (value, fromUnit, toUnit) => {
    fromUnit = weightUnitSymbols[fromUnit] || fromUnit;
    toUnit = weightUnitSymbols[toUnit] || toUnit;
    if (!weightConversionRates[fromUnit] || !weightConversionRates[toUnit]) {
      throw new Error("Invalid unit specified");
    }
    const valueInGrams = value * weightConversionRates[fromUnit];
    const convertedValue = valueInGrams / weightConversionRates[toUnit];
    return convertedValue;
  },

  temprature: (value, fromUnit, toUnit) => {
    fromUnit =
      temperatureUnitSymbols[fromUnit.toLowerCase()] || fromUnit.toLowerCase();
    toUnit =
      temperatureUnitSymbols[toUnit.toLowerCase()] || toUnit.toLowerCase();

    let convertedValue;
    //  From Celsius
    if (fromUnit === "celsius") {
      if (toUnit === "fahrenheit") {
        convertedValue = (value * 9) / 5 + 32;
      } else if (toUnit === "kelvin") {
        convertedValue = value + 273.15;
      } else {
        convertedValue = value;
      }
      // From Fahrenheit
    } else if (fromUnit === "fahrenheit") {
      if (toUnit === "celsius") {
        convertedValue = ((value - 32) * 5) / 9;
      } else if (toUnit === "kelvin") {
        convertedValue = ((value - 32) * 5) / 9 + 273.15;
      } else {
        convertedValue = value;
      }
      // From Kelvin
    } else if (fromUnit === "kelvin") {
      if (toUnit === "celsius") {
        convertedValue = value - 273.15;
      } else if (toUnit === "fahrenheit") {
        convertedValue = ((value - 273.15) * 9) / 5 + 32;
      } else {
        convertedValue = value;
      }
    } else {
      throw new Error("Invalid temperature unit specified");
    }

    return convertedValue;
  },

  volume: (value, fromUnit, toUnit) => {
    fromUnit = volumeUnitSymbols[fromUnit] || fromUnit;
    toUnit = volumeUnitSymbols[toUnit] || toUnit;
    if (!volumeConversionRates[fromUnit] || !volumeConversionRates[toUnit]) {
      throw new Error("Invalid unit specified");
    }
    const valueInMilliliters = value * volumeConversionRates[fromUnit];
    const convertedValue = valueInMilliliters / volumeConversionRates[toUnit];
    return convertedValue;
  },

  area: (value, fromUnit, toUnit) => {
    fromUnit = areaUnitSymbols[fromUnit] || fromUnit;
    toUnit = areaUnitSymbols[toUnit] || toUnit;
    if (!areaConversionRates[fromUnit] || !areaConversionRates[toUnit]) {
      throw new Error("Invalid unit specified");
    }
    const valueInSquareMeters = value * areaConversionRates[fromUnit];
    const convertedValue = valueInSquareMeters / areaConversionRates[toUnit];
    return convertedValue;
  },
};
module.exports = conversions;
