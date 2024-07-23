import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-images',
  templateUrl: './lazy-images.component.html',
  styleUrl: './lazy-images.component.css',
})
export class LazyImagesComponent implements OnInit {
  @Input()
  public url!: string;
  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if (!this.url) throw new Error('El parametro url es requerido');
  }

  onLoad() {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }
}
