import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../cities/cities.service';
import { IBooking } from '../cities/cities.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-travel-details',
  standalone:true,
  imports:[CommonModule],
  templateUrl: './travel-details.component.html',
  styleUrls: ['./travel-details.component.css']
})
export class TravelDetailsComponent implements OnInit {
  id: number | null = null;
  selectedCity: IBooking | undefined;

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService,
    private router: Router
  ) {}

  
  ngOnInit(): void {
    // Fetch the id from the route parameters
    const idParam = this.route.snapshot.paramMap.get('id');
    this.id = idParam ? +idParam : null;
    
    // Get the selected city by id using the service
    if (this.id !== null) {
      this.selectedCity = this.bookingService.getAllBookings().find(city => city.tourID === this.id);
    }
  }

  onBack(): void {
    this.router.navigate(['/cities']);
  }
}
