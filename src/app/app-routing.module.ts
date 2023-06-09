import { NgModule     } from '@angular/core';
import { Routes       } from '@angular/router';
import { RouterModule } from '@angular/router';

import { HomePageComponent     } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent    } from './shared/pages/about-page/about-page.component';
import { ContactPagesComponent } from './shared/pages/contact-pages/contact-pages.component';

const routes: Routes = [
  {
    path:'',
    component: HomePageComponent
  },
  {
    path:'about',
    component: AboutPageComponent
  },
  {
    path:'contact',
    component: ContactPagesComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule { }
