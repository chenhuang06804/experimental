import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdButton,
  MdDialogModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogOneComponent } from './dialog-one/dialog-one.component';
import { DialogTwoComponent } from './dialog-two/dialog-two.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogOneComponent,
    DialogTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdDialogModule
  ],
  providers: [],
  entryComponents: [
    DialogOneComponent,
    DialogTwoComponent
  ], bootstrap: [AppComponent]
})
export class AppModule { }
