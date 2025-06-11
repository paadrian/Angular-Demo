import { Component } from '@angular/core';

@Component({
  selector: 'app-custompipe-example',
  standalone: false,
  templateUrl: './custompipe-example.component.html',
  styleUrl: './custompipe-example.component.css'
})
export class CustomPipeExampleComponent {
  firstNumbber: number = 25;
  secondNumber: number = 5;
  thirdNumber: number = 10;
  firstByteSize: number = 2048; // Example byte size
  secondByteSize: number = 1048576; // Example byte size in bytes
  thirdByteSize: number = 1073741824; // Example byte size in bytes
  firstGbSize: number = 2 * 1024; // Example GB size in bytes
  secondGbSize: number = 5 * 1024; // Example GB size in bytes
  thirdGbSize: number = 10 * 1024; // Example GB size in bytes
  firstTbSize: number = 1; // Example TB size in bytes
  secondTbSize: number = 2; // Example TB size in bytes
  thirdTbSize: number = 3; // Example TB size in bytes
}
