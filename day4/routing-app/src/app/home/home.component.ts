import { Component } from '@angular/core';
import { WelcomeService } from '../services/welcome.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public objService: WelcomeService) {
    
  }
}
