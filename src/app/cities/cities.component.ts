import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BookingService } from './cities.service';
import { IBooking } from './cities.model';
import { RatingsComponent } from '../ratings/ratings.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [CommonModule, FormsModule, RatingsComponent,MatSlideToggleModule],
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  destinations: IBooking[] = [];
  filteredCities: IBooking[] = [];
  searchTerm: string = '';  // Search term to filter cities

  constructor(private _bookService: BookingService, private router: Router) {}

  // Lifecycle hook: OnInit
  ngOnInit(): void {
    this._bookService.cities$.subscribe((cities) => {
      this.destinations = cities;
      this.filterCities();   // Apply filter to update filteredCities
    });
  }
  

  // Method to filter cities based on search term
  filterCities(): void {
    const searchLower = this.searchTerm.toLowerCase();
    this.filteredCities = this.destinations.filter(city =>
      city.name.toLowerCase().includes(searchLower)
    );
  }
   // Method to refresh the cities list
   refreshCities(): void {
    this.destinations = this._bookService.getAllBookings();
    this.filteredCities = this.destinations;  // Update filtered list as well
  }

  // Method to navigate to the form for adding a new city
  addCity(): void {
    this.router.navigate(['/city-form']);
  }

  // Method to navigate to the form for editing an existing city
  editCity(tourID: number): void {
    this.router.navigate(['/city-form', tourID]);
  }

  // Method to delete a city
  deleteCity(tourID: number): void {
    const confirmDelete = confirm("Are you sure you want to delete this city?");
    if (confirmDelete) {
      this._bookService.deleteCity(tourID);
      alert("City deleted successfully");
      this.refreshCities();  // Refresh the cities list after deletion
    }
  }

  // Method to navigate to the travel details page
  bookCity(tourID: number): void {
    this.router.navigate(['/travel-details', tourID]); // Navigates to 'travel-details/:id'
  }
  
  // Method to handle the rating click event from the ratings component
  onRatingClicked(message: string): void {
    alert(message);
  }
}
