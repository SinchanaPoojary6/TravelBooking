import { Injectable } from "@angular/core";
import { IBooking } from "./cities.model";
import { BehaviorSubject } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private cities: IBooking[] = [
    { tourID: 1, img: 'assets/images/paris.jpg', name: 'Paris', type: 'Cultural/Heritage', rating: 5, price: 3200 },
    { tourID: 2, img: 'assets/images/macu.jpg', name: 'Machu Picchu', type: 'Adventure/Hiking', rating: 4.7, price: 2300 },
    { tourID: 3, img: 'assets/images/bali.jpg', name: 'Bali', type: 'Nature', rating: 4.9, price: 1750 },
    { tourID: 5, img: 'assets/images/sydney.jpg', name: 'Sydney', type: 'Family Travel', rating: 4.6, price: 2200 },
    { tourID: 6, img: 'assets/images/japan.jpg', name: 'Tokyo', type: 'Family Travel', rating: 4.5, price: 1900 },
    { tourID: 7, img: 'assets/images/swz.jpg', name: 'Switzerland', type: 'Nature', rating: 5, price: 3600 },
    { tourID: 8, img: 'assets/images/Rome.jpg', name: 'Rome', type: 'Vibrant culture', rating: 4.9, price: 2700 },
  ];

  private citiesSubject = new BehaviorSubject<IBooking[]>(this.cities);
  cities$ = this.citiesSubject.asObservable();
  //getAllBookings(id: number): IBooking | undefined {
    //return this.cities.find(city => city.tourID === id) || [];
  //}

  getAllBookings(): IBooking[] {
    return this.cities || [];
  }
  addCity(city: IBooking): void {
    const existingCity = this.cities.find(c => c.name.toLowerCase() === city.name.toLowerCase());
    if (existingCity) {
      alert("City is already present.");
    } else {
      this.cities.push(city);
      this.citiesSubject.next(this.cities); // Notify subscribers about the update
    }
  }

  updateCity(city: IBooking) {
    const index = this.cities.findIndex(c => c.tourID === city.tourID);
    if (index !== -1) {
      this.cities[index] = city;
      this.citiesSubject.next(this.cities);
    }
  }
  deleteCity(tourID: number): void {
    this.cities = this.cities.filter(c => c.tourID !== tourID);
    this.citiesSubject.next(this.cities);
  }
  }
  
 
