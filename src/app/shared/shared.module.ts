import { NgModule     } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent     } from './pages/home-page/home-page.component';
import { AboutPageComponent    } from './pages/about-page/about-page.component';
import { SideBarComponent      } from './components/side-bar/side-bar.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { SearchBoxComponent    } from './components/search-box/search-box.component';


@NgModule({
  declarations: [
    HomePageComponent,
    AboutPageComponent,
    SideBarComponent,
    ContactPagesComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
    SideBarComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
