import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoanding: boolean = false;
  public initialValue : string = '';

  constructor( private countriesServices : CountriesService ) { }

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byCapital.countries;
    this.initialValue = this.countriesServices.cacheStore.byCapital.term;
  }

  searchByCapital( term: string ) {
    console.log(term);
    this.isLoanding = true;
    this.countriesServices.searchByCapital( term )
      .subscribe( countries =>{
        this.countries = countries;
        this.isLoanding = false;
      })
  }
}
