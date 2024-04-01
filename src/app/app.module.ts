import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './lib/auth/auth.module';
import {StyleClassModule} from 'primeng/styleclass';
import { SharedModule } from './lib/shared/shared.module';
import { CalendarModule } from "primeng/calendar";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputFormClientComponent } from './lib/shared/input-form-client/input-form-client.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    StyleClassModule,
    SharedModule,
    CalendarModule,
    BrowserAnimationsModule,
    MenubarModule,
    ButtonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
