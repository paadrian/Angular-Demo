import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StudentRegComponent } from './students/student-reg/student-reg.component';
import { StudentDisplayComponent } from './students/student-display/student-display.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { CombinedComponent } from './combined/combined.component';
import { PPDetailsComponent } from './passports/pp-details/pp-details.component';
import { PPRegistrationComponent } from './passports/pp-registration/pp-registration.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    StudentRegComponent,
    StudentDisplayComponent,
    NavComponent,
    CombinedComponent,
    PPDetailsComponent,
    PPRegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
