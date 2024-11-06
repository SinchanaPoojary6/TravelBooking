import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter,OnChanges } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar  } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-ratings',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule], // Correct import for FontAwesomeModule
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.css']
})
export class RatingsComponent implements OnChanges {
  faStar = faStar; // Solid star icon
  
  @Input() rating: number = 0;  // Input rating
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  starWidth: number = 0;  // Width for the filled stars

  // Recalculate starWidth based on the rating
  ngOnChanges(): void {
    this.calculateStarWidth();
  }

  // Calculate the width of the filled stars as a percentage
  calculateStarWidth(): void {
    this.starWidth = (this.rating / 5) * 100;  // Calculate width in percentage
  }

  // Handle click event
  onClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} is clicked`);
  }
}

