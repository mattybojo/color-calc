import { Component } from '@angular/core';
import * as tinycolor from 'tinycolor2';
import { Color, HSLColor, HTMLNamedColor, NAMED_COLORS, RGBColor } from './app.beans';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  colorInput: Color;
  color: tinycolor.Instance;
  complementaryColor: tinycolor.Instance;
  splitComplementaryColors: tinycolor.Instance[];
  triadColors: tinycolor.Instance[];
  tetradColors: tinycolor.Instance[];
  analogousColors: tinycolor.Instance[];
  monochromaticColors: tinycolor.Instance[];
  greyscaleColor: tinycolor.Instance;

  htmlNamedColors = NAMED_COLORS;
  selectedNamedColor: HTMLNamedColor | undefined = undefined;
  tc = tinycolor; // Used in template

  constructor() {
    this.color = tinycolor('#FFF');
    this.colorInput = new Color(this.color.toHslString(), this.color.toHexString(), this.color.toRgbString());
    this.complementaryColor = tinycolor(this.color.toHexString()).complement();
    this.splitComplementaryColors = tinycolor(this.color.toHexString()).splitcomplement();
    this.triadColors = tinycolor(this.color.toHexString()).triad();
    this.tetradColors = tinycolor(this.color.toHexString()).tetrad();
    this.greyscaleColor = tinycolor(this.color.toHexString()).greyscale();
    this.analogousColors = tinycolor(this.color.toHexString()).analogous();
    this.monochromaticColors = tinycolor(this.color.toHexString()).monochromatic();
  }

  onColorChange(type: string, namedColor?: HTMLNamedColor): void {
    const color = this.colorInput;
    switch (type) {
      case 'hsl':
        this.color = tinycolor(color.hsl.toString());
        this.colorInput.hex = this.color.toHexString();
        this.colorInput.rgb = new RGBColor(this.color.toRgbString().toLowerCase());
        break;
      case 'rgb':
        this.color = tinycolor(color.rgb.toString());
        this.colorInput.hex = this.color.toHexString();
        this.colorInput.hsl = new HSLColor(this.color.toHslString());
        break;
      case 'hex':
        this.color = tinycolor(color.hex);
        this.colorInput.rgb = new RGBColor(this.color.toRgbString().toLowerCase());
        this.colorInput.hsl = new HSLColor(this.color.toHslString());
        break;
      case 'namedColor':
        this.selectedNamedColor = namedColor!;
        this.color = tinycolor(namedColor!.hex);
        this.colorInput.rgb = new RGBColor(this.color.toRgbString().toLowerCase());
        this.colorInput.hsl = new HSLColor(this.color.toHslString());
        this.colorInput.hex = namedColor!.hex;
        break;
      default:
        console.error(`Unknown type: ${type}`);
    }
    this.updateColors();
  }

  onFilterColors(event: any): void {
    if (event.target.value) {
      this.htmlNamedColors = NAMED_COLORS.filter((color: HTMLNamedColor) => color.name.toLowerCase().includes(event.target.value.toLowerCase()));
    } else {
      this.htmlNamedColors = NAMED_COLORS;
    }
  }

  updateColors(): void {
    this.complementaryColor = tinycolor(this.color.toHexString()).complement();
    this.splitComplementaryColors = tinycolor(this.color.toHexString()).splitcomplement();
    this.triadColors = tinycolor(this.color.toHexString()).triad();
    this.tetradColors = tinycolor(this.color.toHexString()).tetrad();
    this.analogousColors = tinycolor(this.color.toHexString()).analogous();
    this.monochromaticColors = tinycolor(this.color.toHexString()).monochromatic();
    this.greyscaleColor = tinycolor(this.color.toHexString()).greyscale();
  }
}
