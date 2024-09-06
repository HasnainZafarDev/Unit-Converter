const lengthUnitSymbols = {
  mm: "millimeter",
  cm: "centimeter",
  m: "meter",
  km: "kilometer",
  in: "inch",
  ft: "foot",
  yd: "yard",
  mi: "mile",
};

const lengthConversionRates = {
  millimeter: 0.001,
  centimeter: 0.01,
  meter: 1,
  kilometer: 1000,
  inch: 0.0254,
  foot: 0.3048,
  yard: 0.9144,
  mile: 1609.344,
};
const weightUnitSymbols = {
  mg: "milligram",
  g: "gram",
  kg: "kilogram",
  oz: "ounce",
  lb: "pound",
};
const weightConversionRates = {
  milligram: 0.001,
  gram: 1,
  kilogram: 1000,
  ounce: 28.3495,
  pound: 453.592,
};
const temperatureUnitSymbols = {
  c: "celsius",
  f: "fahrenheit",
  k: "kelvin",
};
const volumeUnitSymbols = {
  ml: "milliliter",
  l: "liter",
  gal: "gallon",
  qt: "quart",
  pt: "pint",
};

const volumeConversionRates = {
  milliliter: 1,
  liter: 1000,
  gallon: 3785.41,
  quart: 946.353,
  pint: 473.176,
};

const areaUnitSymbols = {
  sqm: "squareMeter",
  sqkm: "squareKilometer",
  sqft: "squareFoot",
  sqyd: "squareYard",
  acre: "acre",
  hectare: "hectare",
};

const areaConversionRates = {
  squareMeter: 1,
  squareKilometer: 1e6,
  squareFoot: 0.092903,
  squareYard: 0.836127,
  acre: 4046.86,
  hectare: 10000,
};
module.exports = {
  lengthUnitSymbols,
  lengthConversionRates,
  weightUnitSymbols,
  weightConversionRates,
  temperatureUnitSymbols,
  volumeUnitSymbols,
  volumeConversionRates,
  areaUnitSymbols,
  areaConversionRates,
};
