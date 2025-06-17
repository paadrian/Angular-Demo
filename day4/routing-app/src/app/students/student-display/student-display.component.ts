import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-display',
  standalone: false,
  templateUrl: './student-display.component.html',
  styleUrl: './student-display.component.css'
})
export class StudentDisplayComponent {
service: StudentsService;
  constructor(service: StudentsService) {
    this.service = service;
  }
}
