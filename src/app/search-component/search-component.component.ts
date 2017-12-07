import {Component, OnInit, Input} from '@angular/core';
import {WeatherComponentService} from "../weather-componnet/weather-component.service";
import {Subject} from "rxjs";
import {ActivatedRoute, NavigationExtras,Router} from "@angular/router";

@Component({
  selector: 'search-component',
  templateUrl: './search-component.component.html',
  styleUrls: ['./search-component.component.css']
})
export class SearchComponentComponent implements OnInit {
  matchingItems:any=[];
  public searchItemValue = new Subject<string>();
  private showList: boolean;
  @Input() searchLocation:any;

  constructor(private weatherComponentService:WeatherComponentService,private router: Router) {
    this.weatherComponentService.search(this.searchItemValue).subscribe(res=>{
      this.matchingItems= res;
      console.log(res);
    })
  }

  ngOnInit() {
  }
  selectItem(event:any){
    this.searchLocation = event.title;
    console.log('item',event);
    this.matchingItems = [];

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "woeid": event['woeid'],
        "location":event['title']
      }
    };
    this.router.navigate(["search"], navigationExtras);

    // this.weatherComponentService.getWeatherInfo(event.woeid).subscribe(res=>{
    //   this.weatherResponse= res;
    // })
  }

  locationChange(event){
    this.showList = true;
    this.searchLocation = event.title;
    if(event.length>0){
      this.searchItemValue.next(event);
    } else {
      this.showList = false;
      this.matchingItems =[]
    }
  }
}
