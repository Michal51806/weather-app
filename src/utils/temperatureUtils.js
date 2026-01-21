export const convertTemperature = (celsius, unit) => {
  switch (unit) {
    case 'fahrenheit':
      return (celsius * 9/5) + 32;
    case 'kelvin':
      return celsius + 273.15;
    case 'celsius':
    default:
      return celsius;
  }
};

export const getTemperatureSymbol = (unit) => {
  switch (unit) {
    case 'fahrenheit':
      return '°F';
    case 'kelvin':
      return 'K';
    case 'celsius':
    default:
      return '°C';
  }
};

export const formatTemperature = (celsius, unit) => {
  const converted = convertTemperature(celsius, unit);
  const symbol = getTemperatureSymbol(unit);
  return `${Math.round(converted)}${symbol}`;
};
