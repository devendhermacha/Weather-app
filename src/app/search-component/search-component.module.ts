import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchComponentComponent} from "./search-component.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {WeatherComponentService} from "../weather-componnet/weather-component.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [SearchComponentComponent],
  exports:[SearchComponentComponent],
  providers:[WeatherComponentService]
})
export class SearchComponentModule { }
