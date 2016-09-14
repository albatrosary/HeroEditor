import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { HttpModule, XHRBackend } from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from '../components/shared/in-memory-data.service';

import { AppComponent }   from '../components/app.component';
import { routing }        from './app.routing';

import { HeroesComponent }      from '../components/heroes/heroes.component';
import { DashboardComponent }   from '../components/dashboard/dashboard.component';
import { HeroDetailComponent }  from '../components/hero-detail/hero-detail.component';
import { HeroSearchComponent }  from '../components/hero-search/hero-search.component';

import { HeroService }  from '../components/shared/hero.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}