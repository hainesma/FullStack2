import { Component, Inject } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [CarService]
})
export class HomeComponent {
  carJson: string = "Loading cars from db...";
  cars: Car[];
  base: string="";
  constructor(private CarApi: CarService, @Inject('BASE_URL') baseUrl) {
    this.base = baseUrl;
  }

  callCarApi() {
    this.CarApi.getCarsList(this.base).subscribe(
      carData => {
        this.cars = carData;
      }, error => console.error(error));
    console.log(this.cars);
    
  }
}
