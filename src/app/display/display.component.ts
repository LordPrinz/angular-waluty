import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent {
  @Input() currency1: string | null | undefined = null;
  @Input() currency2: string | null | undefined = null;
  @Input() value1: number | null = null;
  @Input() calVal: number | null = null;
}
