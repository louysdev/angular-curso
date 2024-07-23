import { Gif } from './../../interfaces/gifs.interfaces';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input()
  public gif!: Gif;

  // Mensaje en caso de que la propiedad no venga
  ngOnInit(): void {
    if (!this.gif) throw new Error('La propiedad Gif es requerida');
  }
}
