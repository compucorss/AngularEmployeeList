import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListWithpicsComponent } from './employee-list-withpics/employee-list-withpics.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListWithpicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
