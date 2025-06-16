import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students = [
      { id: 1, name: 'John Doe', age: 20, contact: '123456789', fee: 5000 },
      { id: 2, name: 'Jane Smith', age: 22, contact: '987654321', fee: 6000 },
      { id: 3, name: 'Alice Johnson', age: 21, contact: '456789123', fee: 5500 },
      { id: 4, name: 'Bob Brown', age: 23, contact: '321654987', fee: 7000 },
      { id: 5, name: 'Charlie White', age: 19, contact: '789123456', fee: 4800 },
    ];

  constructor()
  {
    
  }

  public display(): Array<{ id: number, name: string, age: number, contact: string, fee: number }> {
    return this.students;
  }

  public register(student: { id: number, name: string, age: number, contact: string, fee: number }): void {
    this.students.push(student);
  }
}
