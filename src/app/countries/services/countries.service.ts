import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of  } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(
    private http: HttpClient
  ) { }

  searchCountryByAlphaCode( code: string ): Observable<Country | null > {
    return this.http.get<Country[]>(`${ this.apiUrl }/alpha/${ code }`)
      .pipe(
        map( countries => countries.length > 0 ? countries[0] : null),
        catchError( () => of(null) )
      );
  }

  searchByCapital( term: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${ this.apiUrl }/capital/${ term }`)
      .pipe(
        catchError( err => {
          console.log('Error:', err );
          return of([]);
        })
      )
  }

  searchByCountry( term: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${ this.apiUrl }/name/${ term }`)
      .pipe(
        catchError( err => {
          console.log('Error:', err );
          return of([]);
        })
      )
  }

  searchByRegion( region: string ): Observable<Country[]> {
    return this.http.get<Country[]>(`${ this.apiUrl }/region/${ region }`)
      .pipe(
        catchError( err => {
          console.log('Error:', err );
          return of([]);
        }
      )
    )
  }
}
