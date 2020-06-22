import Color from 'color';

export const gray = (factor: number) =>
  Color('#ffffff')
    .darken(factor / 100)
    .hex();

export const darken = (color: string, factor: number) =>
  Color(color)
    .darken(factor)
    .hex();

export const lighten = (color: string, factor: number) =>
  Color(color)
    .lighten(factor)
    .hex();
export const whiten = (color: string, factor: number) =>
  Color(color)
    .whiten(factor)
    .hex();

export const blacken = (color: string, factor: number) =>
  Color(color)
    .whiten(factor)
    .hex();

export const alpha = (color: string, factor: number) =>
  Color(color)
    .alpha(factor)
    .hex();
