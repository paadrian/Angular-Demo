import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-app';
  emps:any[] = [
    { id: 1, name: 'Adrian Panaite', age: 30, position: 'Software Engineer', departement: 'It' },
    { id: 2, name: 'John Doe', age: 25, position: 'Data Analyst', departement: 'Analytics' },
    { id: 3, name: 'Jane Smith', age: 28, position: 'Project Manager', departement: 'Management' },
    { id: 4, name: 'Alice Johnson', age: 32, position: 'UX Designer', departement: 'Design' },
    { id: 5, name: 'Bob Brown', age: 29, position: 'DevOps Engineer', departement: 'It' },
    { id: 6, name: 'Charlie White', age: 27, position: 'QA Engineer', departement: 'It Assurance' },
    { id: 7, name: 'Diana Green', age: 31, position: 'Business Analyst', departement: 'Analytics' },
    { id: 8, name: 'Ethan Blue', age: 26, position: 'System Administrator', departement: 'It' },
    { id: 9, name: 'Fiona Black', age: 33, position: 'Marketing Specialist', departement: 'Sales' },
    { id: 10, name: 'George Yellow', age: 24, position: 'Sales Representative', departement: 'Sales' },
    { id: 11, name: 'Hannah Purple', age: 30, position: 'Content Writer', departement: 'Marketing' },
    { id: 12, name: 'Ian Orange', age: 28, position: 'Network Engineer', departement: 'It' },
    { id: 13, name: 'Jack Grey', age: 29, position: 'Database Administrator', departement: 'It' },
    { id: 14, name: 'Kathy Pink', age: 27, position: 'Graphic Designer', departement: 'Design' },
    { id: 15, name: 'Liam Cyan', age: 31, position: 'Product Manager', departement: 'Management' }
  ];
  userAge: number = 17;
  userLuckyNumber: number = 0;
  selected: boolean = true;

  getStyle() {
    return {
      'color': 'green',
      'border': '2px solid green',
      'padding': '10px',
    };
  }

  getFailStyle() {
    return {
      'color': 'red',
      'border': '2px solid green',
      'padding': '10px',
    };
  }
}
