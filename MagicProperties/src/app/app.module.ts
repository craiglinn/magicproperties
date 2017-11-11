import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LandlorddashboardComponent } from './components/landlorddashboard/landlorddashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LandlorddashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
