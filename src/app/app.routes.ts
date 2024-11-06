import { Routes } from '@angular/router';
import { HotelBookingComponent } from './hotel-booking/hotel-booking.component';
import { CitiesComponent } from './cities/cities.component';  // Standalone component import
import { FlightBookingComponent } from './flight-booking/flight-booking.component';  
import { HomeComponent } from './home/home.component';// Standalone component import
import { RatingsComponent } from './ratings/ratings.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent } from './register/register.component';
import { CityFormComponent } from './city-form/city-form.component';


export const routes: Routes = [

    { path: '', redirectTo: '/home' , pathMatch:'full'},
    { path: 'home', component: HomeComponent },
  { path: 'hotel-booking', component: HotelBookingComponent },
  { path: 'cities', component: CitiesComponent },
  { path: 'flight-booking', component: FlightBookingComponent },
  { path: 'ratings', component: RatingsComponent },
  {path:'travel-details/:id',component:TravelDetailsComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'register',component:RegisterComponent},
  { path: 'cities', component: CitiesComponent },
  { path: 'city-form', component: CityFormComponent },  // Add new city
  { path: 'city-form/:id', component: CityFormComponent } 
];
