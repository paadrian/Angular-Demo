import { Component, OnInit } from '@angular/core';
import { PassportDetailsService } from '../../../shared/passport-details.service';
import { NgForm } from '@angular/forms';
import { PassportDetails } from '../../../shared/passport-details.model';

@Component({
  selector: 'app-registration',
  standalone: false,
  templateUrl: './pp-registration.component.html',
  styleUrl: './pp-registration.component.css'
})
export class PPRegistrationComponent implements OnInit {
  constructor(public service: PassportDetailsService) {
    
  }

  ngOnInit(): void {
    this.resetForm();
  }

  resetForm(form?: NgForm): void {
    if (form != null) {
      form.resetForm();
    }
    this.service.passport = {
      id: 0,
      holderName: '',
      number: '',
      expiryDate: new Date(),
      code: ''
    };
  }

  insertRecord(form: NgForm): void{
    const newPassport: PassportDetails = {
      id: form.value.id,
      holderName: form.value.HolderName,
      number: form.value.HolderNumber,      
      expiryDate: form.value.HolderExpiryDate,
      code: form.value.HolderCode
    };

    this.service.registerPassport(newPassport).subscribe({
      next: () => {
        this.resetForm(form);
        this.service.getPassports(); // Refresh the list after registration
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
}
