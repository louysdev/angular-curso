import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../Interfaces/country.interface';

@Injectable({ providedIn: 'root' })
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  // Retorna un observable con la lista de paises
  searchCapital(term: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`);
  }
}
