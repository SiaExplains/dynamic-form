import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { AppComponent }                 from './app.component';
import { DynamicFormGroupComponent } from './dynamic-form-group.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';



@NgModule({
  imports: [ BrowserModule, ReactiveFormsModule, BrowserAnimationsModule, MaterialModule ],
  declarations: [ AppComponent,  DynamicFormGroupComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
