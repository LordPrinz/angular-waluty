import { Component, OnInit } from '@angular/core';
import data from '../data/currency.json';
import { TCurrency } from '../types/currencyType';

@Component({
  selector: 'app-kantor',
  templateUrl: './kantor.component.html',
  styleUrls: ['./kantor.component.css'],
})
export class KantorComponent implements OnInit {
  constructor() {}

  currencys: TCurrency[] = data;

  currency1: TCurrency = this.currencys[0];
  currency2: TCurrency = this.currencys[1];

  amount1: number = 0;
  amount2: number = 0;

  calculatedValue = 0;

  lastActive = false;

  ngOnInit(): void {}

  calculateExchange1() {
    const stock1 = this.currency1.value;
    const stock2 = this.currency2.value;

    const result = (this.amount1 * stock1) / stock2;

    this.amount2 = +result.toFixed(2);
    this.calculatedValue = +result.toFixed(2);
  }

  calculateExchange2() {
    const stock1 = this.currency1.value;
    const stock2 = this.currency2.value;

    const result = (this.amount2 * stock2) / stock1;

    this.amount1 = +result.toFixed(2);
    this.calculatedValue = this.amount2;
  }

  onValueChange1(value: number) {
    this.amount1 = value;
    this.calculateExchange1();
    this.lastActive = false;
  }

  onCurrencyChange1(currency: string) {
    this.currency1 = this.currencys.find((curr) => curr.name === currency)!;
    if (this.lastActive) {
      this.calculateExchange2();
      return;
    }
    this.calculateExchange1();
  }

  onValueChange2(value: number) {
    this.amount2 = value;
    this.calculateExchange2();
    this.lastActive = true;
  }

  onCurrencyChange2(currency: string) {
    this.currency2 = this.currencys.find((curr) => curr.name === currency)!;
    if (this.lastActive) {
      this.calculateExchange2();
      return;
    }
    this.calculateExchange1();
  }
}
