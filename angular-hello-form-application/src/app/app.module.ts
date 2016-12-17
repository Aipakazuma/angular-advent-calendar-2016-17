import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FirstFormComponent } from './first-form/first-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UseFormBuilderComponent } from './use-form-builder/use-form-builder.component';
import { DatePickerDirective } from './date-picker.directive';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component'; // <- add

@NgModule({
  declarations: [
    AppComponent,
    FirstFormComponent,
    UseFormBuilderComponent,
    DatePickerDirective,
    DynamicFormComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule, // <- add
    ReactiveFormsModule // <- add
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
