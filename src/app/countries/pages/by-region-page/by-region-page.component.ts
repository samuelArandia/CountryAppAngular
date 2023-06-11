import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {

  public countries: Country[] = [];

  constructor( public countriesServices: CountriesService ) { }

  searchByRegion( region: string ) {
    console.log(region);
    this.countriesServices.searchByRegion( region )
      .subscribe( countries =>
        this.countries = countries
      )
  }
}
