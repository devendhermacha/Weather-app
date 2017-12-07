import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WeatherComponnetComponent} from "./weather-componnet.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {WeatherComponentService} from "./weather-component.service";
import {SearchComponentModule} from "../search-component/search-component.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SearchComponentModule
  ],
  declarations: [WeatherComponnetComponent],
  exports:[WeatherComponnetComponent],
  providers:[WeatherComponentService]
})
export class WeatherComponentModule { }
