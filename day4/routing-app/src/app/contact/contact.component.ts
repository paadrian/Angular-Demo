import { Component } from '@angular/core';
import { WelcomeService } from '../services/welcome.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  constructor(public service: WelcomeService)
  {
    
  }
}
