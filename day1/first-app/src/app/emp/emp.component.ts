import { Component } from '@angular/core';

@Component({
  selector: 'app-emp',
  standalone: false,
  templateUrl: './emp.component.html',
  styleUrl: './emp.component.css'
})
export class EmpComponent {
  empName: string = 'Adrian Panaite';
  imgUrl: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  isDisabled: boolean = false;
  
  welcome(name: MouseEvent): void {
    console.log('EmpComponent initialized');
    alert(`Welcome ${this.empName} and ${name.AT_TARGET} to event binding in Angular!`);
  }

  changeProperty(): void {
    this.isDisabled = !this.isDisabled;
    console.log(`Button is now ${this.isDisabled ? 'disabled' : 'enabled'}`);
  }
}
