import { Component, OnInit } from '@angular/core';
import { PassportDetailsService } from '../../../shared/passport-details.service';

@Component({
  selector: 'app-details',
  standalone: false,
  templateUrl: './pp-details.component.html',
  styleUrl: './pp-details.component.css'
})
export class PPDetailsComponent implements OnInit {

  constructor(public service: PassportDetailsService) { }

  ngOnInit(): void {
    this.service.getPassports(); // Fetch the list of passports on initialization
  }
  
  deleteRecord(id: number): void {
    this.service.deletePassportById(id).subscribe({
      next: () => {
        
      },
      error: (err: any) => {
        console.error('Error deleting passport:', err);
      }
    });
  }  
}
