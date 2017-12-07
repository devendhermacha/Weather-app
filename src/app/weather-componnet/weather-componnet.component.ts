import { Component, OnInit } from '@angular/core';
import {WeatherComponentService} from "./weather-component.service";
import {Subject} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'weather-componnet',
  templateUrl: './weather-componnet.component.html',
  styleUrls: ['./weather-componnet.component.css']
})
export class WeatherComponnetComponent implements OnInit {

  public searchItemValue = new Subject<string>();
  matchingItems:any;
  showList:boolean = false;
  searchLocation:any;
  private weatherResponse: any;
  weatherStatus:boolean = false;
  weatherStatusText:string = 'Click here to check weather full information';

  constructor(private weatherComponentService:WeatherComponentService,private route: ActivatedRoute) {
    this.weatherComponentService.search(this.searchItemValue).subscribe(res=>{
      this.matchingItems= res;
      console.log(res);
    });
    this.route.queryParams.subscribe(params => {
      this.selectItem('',params['woeid'],params['location']);
    });
  }

  ngOnInit() {
  }

  // locationChange(event){
  //   this.showList = true;
  //   if(event.length>0){
  //     this.searchItemValue.next(event);
  //   } else {
  //     this.showList = false;
  //     this.matchingItems =[]
  //   }
  // }
  selectItem(event?:any,id?:any,location?:any){
    this.searchLocation = location;
    console.log('item',event);
    this.showList = false;
    this.matchingItems = [];
    if(id){
      this.weatherComponentService.getWeatherInfo(id).subscribe(res=>{
        this.weatherResponse= res;
      },error=>{
        console.log('error',error);
      });
    }

  }
  roundNumber(value){
    if(value!==null){
      return value.toFixed(2);
    } else {
      return '-';
    }

  }
  getValueForDay(value){
    if(value==0){
      return "Today";
    } else if(value ===1){
      return 'Tomorrow';
    }
  }
  checkValue(i){
    if(i>1){
      return true;
    }
  }
  statusChange(){
    this.weatherStatus = !this.weatherStatus;
    this.weatherStatusText = (!this.weatherStatus)?'Click here check full information':'Click here to check todays information';
  }
}
