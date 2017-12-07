import { TestBed, inject } from '@angular/core/testing';

import { WeatherComponentService } from './weather-component.service';

describe('WeatherComponentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherComponentService]
    });
  });

  it('should be created', inject([WeatherComponentService], (service: WeatherComponentService) => {
    expect(service).toBeTruthy();
  }));
});
