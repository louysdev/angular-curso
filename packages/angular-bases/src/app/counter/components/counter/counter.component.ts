import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h1>Counter</h1>

    <P>Counter: {{ counter }}</P>

    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="reset()">RESET</button>
  `,
})
export class CounterComponent {
  public counter: number = 10;

  increaseBy(value: number = 0): void {
    this.counter += value;
  }

  reset(): void {
    this.counter = 10;
  }

  constructor() {}
}
