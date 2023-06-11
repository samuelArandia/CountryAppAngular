import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit {

  public country? : Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id ) )
      )
      .subscribe( country => {
          if ( !country ) return this.router.navigateByUrl('/countries');
          return this.country = country;
        }
      )
  }

  getGoogleMapsUrl(country: any): SafeResourceUrl {
    const url = country.maps?.googleMaps || '';
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
