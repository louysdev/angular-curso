import { Injectable } from '@angular/core';

// El servicio esta disponible para todos los components que inyecten este servicio
@Injectable({ providedIn: 'root' })
export class GifsService {
  private _tagsHistory: string[] = [];

  constructor() {}

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
    }
  }

  searchTag(tag: string): void {
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    // Añadir tag al principio del array
    this._tagsHistory.unshift(tag);
  }
}
