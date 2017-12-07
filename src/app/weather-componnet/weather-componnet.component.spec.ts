import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponnetComponent } from './weather-componnet.component';

describe('WeatherComponnetComponent', () => {
  let component: WeatherComponnetComponent;
  let fixture: ComponentFixture<WeatherComponnetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherComponnetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherComponnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
