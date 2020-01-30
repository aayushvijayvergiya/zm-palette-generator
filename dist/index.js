"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = generateColor;

var _tinycolor = require("@ctrl/tinycolor");

/**
 * @param {String} color color code in hex format
 * @param {number} style palette style to be returned, default value is constantine
 * @returns {Object} Object of generated palette
 * @description Returns palette for a given color code and style.
 */
function generateColor(color) {
  var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'constantine';
  var baseColor = new _tinycolor.TinyColor(color, 'hex');
  var baseLight = new _tinycolor.TinyColor('#FFFFFF');
  var baseDark = baseColor.darken(20).toHexString();
  var paletteConstantine = {
    50: baseColor.mix(baseLight, 85).toHexString(),
    100: baseColor.mix(baseLight, 70).toHexString(),
    200: baseColor.mix(baseLight, 50).toHexString(),
    300: baseColor.mix(baseLight, 30).toHexString(),
    400: baseColor.mix(baseLight, 12).toHexString(),
    500: baseColor.mix(baseLight, 0).toHexString(),
    600: baseColor.mix(baseDark, 25).toHexString(),
    700: baseColor.mix(baseDark, 54).toHexString(),
    800: baseColor.mix(baseDark, 70).toHexString(),
    900: baseColor.mix(baseDark, 87).toHexString()
  };
  var paletteTraditional = {
    50: baseColor.lighten(52),
    100: baseColor.lighten(37),
    200: baseColor.lighten(26),
    300: baseColor.lighten(12),
    400: baseColor.lighten(6),
    500: baseColor,
    600: baseColor.darken(6),
    700: baseColor.darken(12),
    800: baseColor.darken(18),
    900: baseColor.darken(24)
  };
  return style === 'constantine' ? paletteConstantine : paletteTraditional;
}