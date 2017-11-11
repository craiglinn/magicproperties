import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LandlorddashboardComponent } from './components/landlorddashboard/landlorddashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { appRouterModule } from './app.routes';
import { LoginComponent } from './components/login/login.component';
import {PasswordModule, InputTextModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandlorddashboardComponent,
    AdmindashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    PasswordModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
