import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PassportDetails } from './passport-details.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassportDetailsService {
  readonly api = 'http://localhost:5000/api/passport';
  passports: PassportDetails[] = [];
  passport: PassportDetails = new PassportDetails();

  constructor(private readonly httpClient: HttpClient) { }

  public getPassports(): any[] {
    this.httpClient.get<any>(this.api).subscribe({
      next: (data) => {
        this.passports = data as PassportDetails[];
      },
      error: (error) => {
        console.error('Error fetching passports:', error);
      }
    });
    return this.passports;
  }

  public deletePassportById(id: number): any {
    return this.httpClient.delete(`${this.api}/${id}`).subscribe({
      next: (data) => { 
        console.log('Passport deleted successfully:', data);
        this.passports = this.passports.filter(passport => passport.id !== id);
       },
      error: (error) => {
        console.error('Error deleting passport:', error);
      }
    });
  }

  public registerPassport(passport: PassportDetails): Observable<PassportDetails> {
    return new Observable<PassportDetails>(subscriber => {
        this.httpClient.post<PassportDetails>(this.api, passport).subscribe({
            next: (data: PassportDetails) => {
                console.log('Passport registered successfully:', data);
                this.passports.push(data);
                subscriber.next(data);
            },
            error: (error) => {
                console.error('Error registering passport:', error);
                subscriber.error(error);
            },
            complete: () => subscriber.complete()
        });
    });
  }
}
