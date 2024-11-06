import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-hotel-booking',
  standalone: true,    // Standalone component
  imports: [CommonModule],  // Import CommonModule to use *ngFor
  templateUrl: './hotel-booking.component.html',
  styleUrls: ['./hotel-booking.component.css']
})
export class HotelBookingComponent {
  pageTitle: string = "Book Your Stay";
  hotels = [
    { name: "The Taj Hotel", location: "Mumbai", price: "₹10,000 per night" },
    { name: "Leela Palace", location: "Delhi", price: "₹12,000 per night" },
    { name: "The Oberoi", location: "Bangalore", price: "₹8,500 per night" }
  ];
}
