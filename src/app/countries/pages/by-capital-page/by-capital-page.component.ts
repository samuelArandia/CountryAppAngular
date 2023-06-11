import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];

  constructor( private countriesServices : CountriesService ) { }

  searchByCapital( term: string ) {
    console.log(term);
    this.countriesServices.searchByCapital( term )
      .subscribe( countries =>
        this.countries = countries
      )
  }
}
