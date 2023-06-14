import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';

import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{

  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  public countries: Country[] = [];
  public isLoanding: boolean = false;
  public selectedRegion?: Region;

  constructor( public countriesServices: CountriesService ) { }

  ngOnInit(): void {
    this.countries = this.countriesServices.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesServices.cacheStore.byRegion.region;
  }

  searchByRegion( region: Region ) {
    console.log(region);
    this.isLoanding = true;
    this.selectedRegion = region;

    this.countriesServices.searchByRegion( region )
      .subscribe( countries => {
        this.countries = countries;
        console.log(this.countries);
        this.isLoanding = false;
      })
  }
}
