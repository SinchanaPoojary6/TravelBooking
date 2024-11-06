import { Component } from '@angular/core';
import { IBooking } from '../cities/cities.model';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../cities/cities.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
 
@Component({
  selector: 'app-city-form',
  standalone: true,
  imports: [FormsModule, CommonModule,MatSlideToggleModule],
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.css']
})
export class CityFormComponent {
  id: number | undefined;
  cities: IBooking = { tourID: 0, name: '', img: '', type: '', rating: 0, price: 0 };
  isEditMode: boolean= false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private bkngService: BookingService
  ) {}
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((map) => {
      const idParam = map.get('id');
      if (idParam) {
        this.id = +idParam;
        const city = this.bkngService.getAllBookings().find(city => city.tourID === this.id);
        if (city) {
          this.cities = city;
          this.isEditMode = true;  // Set edit mode if city is found
        } else {
          alert("City not found");
          this.router.navigate(['/cities']);
        }
      } else {
        this.isEditMode = false;  // Set to add mode if no id parameter is present
      }
    });
  }

  onSave(): void {
    if (this.isEditMode) {
      this.bkngService.updateCity(this.cities);
      alert("City updated successfully");
    } else {
      this.bkngService.addCity(this.cities);
      alert("New city added successfully");
    }
    this.router.navigate(['/cities']);
  }

  onBack(): void {
    this.router.navigate(['/cities']);
  }
}