import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import * as tinycolor from 'tinycolor2';

@Component({
  selector: 'cc-color-box',
  templateUrl: './color-box.component.html',
  styleUrls: ['./color-box.component.scss']
})
export class ColorBoxComponent implements OnInit, OnChanges {

  @Input() color!: tinycolor.Instance;
  @Input() isSameMainColor: boolean = false;
  @Input() showLabels: boolean = true;

  hexString: string = '';
  rgbaString: string = '';
  hslaString: string = '';

  constructor() { }

  ngOnInit(): void {
    this.setClassVariables();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setClassVariables();
  }

  setClassVariables(): void {
    this.hexString = this.color.toHexString();
    this.rgbaString = this.color.toRgbString().toLowerCase();
    this.hslaString = this.color.toHslString();
  }
}
