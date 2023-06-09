import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import data from '../data/currency.json';
import { TCurrency } from '../types/currencyType';

@Component({
  selector: 'app-input2',
  templateUrl: './input2.component.html',
  styleUrls: ['./input2.component.css'],
})
export class Input2Component implements OnInit {
  constructor() {}

  currencys: TCurrency[] = [];

  ngOnInit(): void {
    this.currencys = data;
  }

  @Output() valueChange = new EventEmitter<number>();
  @Output() currencyChange = new EventEmitter<string>();
  @Input() value1: number | null = null;

  public value = 0;
  public currency = 'PLN';

  changeValue(event: Event) {
    const { value } = event.target as HTMLInputElement;
    this.value = +value;
    this.valueChange.emit(this.value);
  }

  changeCurrency(event: Event) {
    const { value } = event.target as HTMLSelectElement;
    this.currency = value;
    this.currencyChange.emit(this.currency);
  }
}
