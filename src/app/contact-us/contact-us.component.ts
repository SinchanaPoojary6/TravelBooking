import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  templateUrl: './contact-us.component.html',
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Form Values:', this.contactForm.value);
      alert('Form Submitted Successfully');
    } else {
      console.log('Form Validation Status:', {
        name: this.contactForm.get('name')?.errors,
        email: this.contactForm.get('email')?.errors,
        subject: this.contactForm.get('subject')?.errors,
        message: this.contactForm.get('message')?.errors,
      });
      alert('Please fill in all fields correctly');
    }
 
  }
  // Helper method to log field state
  private logFieldState(fieldName: string): void {
    const control = this.contactForm.get(fieldName);
    if (control) {
      console.log(`Field: ${fieldName}`);
      console.log(`  Pristine: ${control.pristine}`);
      console.log(`  Dirty: ${control.dirty}`);
      console.log(`  Untouched: ${control.untouched}`);
      console.log(`  Valid: ${control.valid}`);
      console.log(`  Errors: ${JSON.stringify(control.errors)}`);
    }
  }
}

