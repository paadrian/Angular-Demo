import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeRo from '@angular/common/locales/ro';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpComponent } from './emp/emp.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import { DaythreeComponent } from './daythree/daythree.component';
import { CustomPipeExampleComponent } from './custompipe-example/custompipe-example.component';
import { CubePipe } from "./cube.pipe";
import { DataConvergentPipePipe } from './data-convergent-pipe.pipe';

registerLocaleData(localeRo, 'ro-RO'); // Register the Romanian locale data

@NgModule({
  declarations: [
    AppComponent,
    EmpComponent,
    DaythreeComponent,
    CustomPipeExampleComponent,
    DataConvergentPipePipe,
    CubePipe,
    DataConvergentPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
],
  providers: [{ provide:LOCALE_ID, useValue: 'ro-RO'}], // Set the locale to Romanian
  bootstrap: [CustomPipeExampleComponent]
})
export class AppModule { }
