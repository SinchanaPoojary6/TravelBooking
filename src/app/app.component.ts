import { Component } from '@angular/core';
import { FlightBookingComponent } from './flight-booking/flight-booking.component';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { CitiesComponent } from "./cities/cities.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CurrencyPipe } from '@angular/common';
import { RatingsComponent } from './ratings/ratings.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { CityFormComponent } from './city-form/city-form.component';

@Component({
  selector: 'app-root',
  standalone: true,    // Standalone root component
  imports: [HomeComponent,FlightBookingComponent, HotelBookingComponent, CitiesComponent,RatingsComponent,ContactUsComponent,RegisterComponent,CityFormComponent,RouterOutlet,RouterLink,CurrencyPipe],    // Import the standalone components
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 
})
export class AppComponent {
  title = 'Travel Booking';
}

