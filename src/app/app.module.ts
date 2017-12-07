import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {WeatherComponentModule} from "./weather-componnet/weather-component.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {SearchComponentModule} from "./search-component/search-component.module";
import {RouterModule} from "@angular/router";
import {WeatherComponnetComponent} from "./weather-componnet/weather-componnet.component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path:'',component:AppComponent},
      {path:'search',component:WeatherComponnetComponent}
    ]),
    BrowserModule,
    WeatherComponentModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SearchComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
