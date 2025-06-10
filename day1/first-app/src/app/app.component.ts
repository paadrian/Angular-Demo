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
    { id: 1, name: 'Adrian Panaite', age: 30, position: 'Software Engineer' },
    { id: 2, name: 'John Doe', age: 25, position: 'Data Analyst' },
    { id: 3, name: 'Jane Smith', age: 28, position: 'Project Manager' }
  ];
}
