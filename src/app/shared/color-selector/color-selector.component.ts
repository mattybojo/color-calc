import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Color, HSLColor, HTMLNamedColor, NAMED_COLORS, RGBColor } from '../../app.beans';
import * as tinycolor from 'tinycolor2';

@Component({
  selector: 'cc-color-selector',
  templateUrl: './color-selector.component.html',
  styleUrls: ['./color-selector.component.scss']
})
export class ColorSelectorComponent implements OnInit {

  @Input() initialColor = tinycolor.random();
  @Output() selectedColor: EventEmitter<tinycolor.Instance> = new EventEmitter<tinycolor.Instance>();

  colorInput: Color;
  color: tinycolor.Instance;

  htmlNamedColors = NAMED_COLORS;
  selectedNamedColor: HTMLNamedColor | undefined = undefined;
  tc = tinycolor; // Used in template

  constructor() {
    this.color = tinycolor('#FFF');
    this.colorInput = Color.createDefaultColor();
  }

  ngOnInit(): void {
    this.color = this.initialColor;
    this.colorInput = new Color(this.color.toHslString(), this.color.toHexString(), this.color.toRgbString());
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
    this.selectedColor.emit(this.color);
  }

  onFilterColors(event: any): void {
    if (event.target.value) {
      this.htmlNamedColors = NAMED_COLORS.filter((color: HTMLNamedColor) => color.name.toLowerCase().includes(event.target.value.toLowerCase()));
    } else {
      this.htmlNamedColors = NAMED_COLORS;
    }
  }
}
