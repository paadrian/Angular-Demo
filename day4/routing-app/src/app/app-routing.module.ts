import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { StudentDisplayComponent } from './students/student-display/student-display.component';
import { StudentRegComponent } from './students/student-reg/student-reg.component';
import { CombinedComponent } from './combined/combined.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "about", component: AboutComponent},
  { path: "contact", component: ContactComponent},
  { path: "students/display", component: StudentDisplayComponent},
  { path: "students/reg", component: StudentRegComponent},
  { path: "combined", component: CombinedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
