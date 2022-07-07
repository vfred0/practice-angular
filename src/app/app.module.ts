import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Example01Component } from './components/example01/example01.component';
import { Example02Component } from './components/example02/example02.component';
import { Example03Component } from './components/example03/example03.component';
import { Example04Component } from './components/example04/example04.component';

@NgModule({
  declarations: [
    AppComponent,
    Example01Component,
    Example02Component,
    Example03Component,
    Example04Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
