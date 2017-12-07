import { Injectable } from '@angular/core';
import {Http, RequestOptions} from "@angular/http";
import {environment} from "../../environments/environment";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";

@Injectable()
export class WeatherComponentService {

  public weatherLocationUrl:string = environment.weatherLocaationUrl;
  public weatherApi:string = environment.weatherApi;

  constructor(private http:Http) { }

  search(data:Observable<string>){
    return data.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(value=>this.searchLocation(value));
  }


  searchLocation(location:any){
    return this.http.get(this.weatherLocationUrl+location)
      .map(res=>res.json())
      .catch(error=> Observable.throw(error));
  }
  getWeatherInfo(id:any):Observable<any>{

    return this.http.get(this.weatherApi+id).map(res=>res.json());
  }


}
