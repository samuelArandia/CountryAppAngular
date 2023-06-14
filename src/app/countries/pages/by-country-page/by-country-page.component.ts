import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit{

  public countries: Country[] = [];
  public isLoanding: boolean = false;
  public initialValue : string = '';

  constructor( public countriesService: CountriesService,) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry( term: string ): void {
    console.log(term);
    this.isLoanding = true;
    this.countriesService.searchByCountry( term )
      .subscribe( countries => {
        this.countries = countries;
        console.log(this.countries);
        this.isLoanding = false;
        })
  }

}
