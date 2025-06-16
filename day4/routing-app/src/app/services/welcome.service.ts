import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  welcomeMessage(): void
  {
    console.log('Welcome to the Angular Routing App!2');
  }

  constructor() { }
}
