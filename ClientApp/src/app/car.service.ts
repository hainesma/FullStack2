import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Car } from './car';

@Injectable()
export class CarService {
  constructor(private http: HttpClient) {

  }
  endpoint: string = "Car";

  getCarsList(@Inject('BASE_URL') baseUrl: string): any {
    return this.http.get<Car[]>(baseUrl + this.endpoint);
  }
}
