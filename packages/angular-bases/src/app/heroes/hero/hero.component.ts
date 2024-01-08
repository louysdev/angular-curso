import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public name: string = 'Spiderman';
  public age: number = 20;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero():void {
    this.name = "Batman"
  }

  changeAge():void {
    this.age = 40
  }

  resetForm():void {
    this.name = "Spiderman";
    this.age = 20;
  }
}
