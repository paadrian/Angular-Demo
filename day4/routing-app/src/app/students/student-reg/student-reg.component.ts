import { Component } from '@angular/core';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-reg',
  standalone: false,
  templateUrl: './student-reg.component.html',
  styleUrl: './student-reg.component.css'
})
export class StudentRegComponent {
  student: { id: number, name: string, age: number, contact: string, fee: number } = {
    id: 0,
    name: '',
    age: 0, 
    contact: '',
    fee: 0
  };
  service: StudentsService;

  constructor(service: StudentsService)
  {
    this.service = service;
  }

  ngOnInit()
  {
    this.student = {
    id: 0,
    name: '',
    age: 0, 
    contact: '',
    fee: 0
  };;
  }

  register()
  {
    this.service.register(this.student);
    alert('Student registered successfully!');
    this.student = {
    id: 0,
    name: '',
    age: 0, 
    contact: '',
    fee: 0
  };;
  }
}
