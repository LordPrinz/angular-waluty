import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputComponent } from './input/input.component';
import { DisplayComponent } from './display/display.component';
import { KantorComponent } from './kantor/kantor.component';
import { FormsModule } from '@angular/forms';
import { Input2Component } from './input2/input2.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    DisplayComponent,
    KantorComponent,
    Input2Component,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
