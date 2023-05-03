const tailwindConfig = require('../tailwind.config.js');
const resolveConfig = require('tailwindcss/resolveConfig');
const { theme } = resolveConfig(tailwindConfig);

const obj = theme.screens;
for (const p in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, p)) {
    const val = `${obj[p]}`;
    const newString = val.slice(0, val.length - 2);
    obj[p] = parseInt(newString);
  }
}

export const breakpoints = obj; // Gives breakpoints in pixels
