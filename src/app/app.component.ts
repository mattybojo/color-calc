import { Component } from '@angular/core';
import * as tinycolor from 'tinycolor2';
import { HTMLNamedColor, NAMED_COLORS } from './app.beans';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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

  isColorLocked: boolean = false;

  constructor() {
    this.color = tinycolor.random();
    this.complementaryColor = tinycolor(this.color.toHexString()).complement();
    this.splitComplementaryColors = tinycolor(this.color.toHexString()).splitcomplement();
    this.triadColors = tinycolor(this.color.toHexString()).triad();
    this.tetradColors = tinycolor(this.color.toHexString()).tetrad();
    this.greyscaleColor = tinycolor(this.color.toHexString()).greyscale();
    this.analogousColors = tinycolor(this.color.toHexString()).analogous();
    this.monochromaticColors = tinycolor(this.color.toHexString()).monochromatic();
  }

  updateColors(color: tinycolor.Instance): void {
    this.color = color;
    this.complementaryColor = tinycolor(this.color.toHexString()).complement();
    this.splitComplementaryColors = tinycolor(this.color.toHexString()).splitcomplement();
    this.triadColors = tinycolor(this.color.toHexString()).triad();
    this.tetradColors = tinycolor(this.color.toHexString()).tetrad();
    this.analogousColors = tinycolor(this.color.toHexString()).analogous();
    this.monochromaticColors = tinycolor(this.color.toHexString()).monochromatic();
    this.greyscaleColor = tinycolor(this.color.toHexString()).greyscale();
  }
}
