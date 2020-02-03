import { TinyColor } from '@ctrl/tinycolor';

/**
 * @param {String} color color code in hex format
 * @param {number} style palette style to be returned, default value is constantine
 * @returns {Object} Object of generated palette
 * @description Returns palette for a given color code and style.
 */
export default function generatePalette(color, style='constantine') {
    const baseColor = new TinyColor(color, 'hex');
    const baseLight = new TinyColor('#FFFFFF');
    const baseDark = baseColor.darken(20).toHexString();

    const paletteConstantine = {
        50: baseColor.mix(baseLight, 85).toHexString(), 
        100: baseColor.mix(baseLight, 70).toHexString(), 
        200: baseColor.mix(baseLight, 50).toHexString(), 
        300: baseColor.mix(baseLight, 30).toHexString(), 
        400: baseColor.mix(baseLight, 12).toHexString(), 
        500: baseColor.mix(baseLight, 0).toHexString(), 
        600: baseColor.mix(baseDark, 25).toHexString(), 
        700: baseColor.mix(baseDark, 54).toHexString(), 
        800: baseColor.mix(baseDark, 70).toHexString(), 
        900: baseColor.mix(baseDark, 87).toHexString(), 
    };

    const paletteTraditional = {
        50: baseColor.lighten(52).toHexString(), 
        100: baseColor.lighten(37).toHexString(), 
        200: baseColor.lighten(26).toHexString(), 
        300: baseColor.lighten(12).toHexString(), 
        400: baseColor.lighten(6).toHexString(), 
        500: baseColor.toHexString(), 
        600: baseColor.darken(6).toHexString(), 
        700: baseColor.darken(12).toHexString(), 
        800: baseColor.darken(18).toHexString(), 
        900: baseColor.darken(24).toHexString(), 
    };

    return style === 'constantine' ? paletteConstantine : paletteTraditional
}