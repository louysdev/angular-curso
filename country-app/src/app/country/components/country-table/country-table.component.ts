import { Component, Input } from '@angular/core';
import { Country } from '../../Interfaces/country.interface';

@Component({
  selector: 'country-table',
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

}
