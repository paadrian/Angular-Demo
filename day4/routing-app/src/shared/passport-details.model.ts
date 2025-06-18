import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PassportDetails {
    id: number = 0;
    holderName: string = '';
    number: string = '';
    expiryDate: Date = new Date();
    code: string = '';
}