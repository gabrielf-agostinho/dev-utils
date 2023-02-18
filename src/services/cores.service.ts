import { Hex } from "../models/cores/hex";
import { RGB } from "../models/cores/rgb";
import { RGBA } from "../models/cores/rgba";

export const generateRGB: Function = (): RGB => {
  const colors: number[] = [];

  for (let i: number = 0; i < 3; i++)
    colors.push(Math.floor(Math.random() * 255));

  return {
    red: colors[0],
    green: colors[1],
    blue: colors[2]
  }
};

export const generateRGBA: Function = (): RGBA => {
  const rgb: RGB = generateRGB();

  return {
    red: rgb.red,
    green: rgb.green,
    blue: rgb.blue,
    opacity: parseFloat(Math.random().toFixed(2))
  }
};

export const generateHex: Function = (): Hex => {
  let hex: string = '#';

  for (let i: number = 0; i < 6; i++)
    hex = `${hex}${parseNumberToLetter(Math.floor(Math.random() * 16))}`;

  return { hex: hex };
}

const parseNumberToLetter: Function = (number: number): string => {
  if (number < 10)
    return number.toString();

  switch (number) {
    case 10:
      return 'A';
    case 11:
      return 'B';
    case 12:
      return 'C';
    case 13:
      return 'D';
    case 14:
      return 'E';
    case 15:
      return 'F';
    default:
      return 'A';
  }
};