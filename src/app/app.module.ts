import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { RatingComponent } from './components/rating/rating.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { registerLocaleData } from '@angular/common';

import localeAT from '@angular/common/locales/de-AT';
registerLocaleData(localeAT);
@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RatingComponent,
    RestaurantDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'de-AT' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }