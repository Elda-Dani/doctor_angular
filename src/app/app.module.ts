import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdddoctorComponent } from './adddoctor/adddoctor.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewallComponent } from './viewall/viewall.component';

const appRoutes:Routes=[
  {
    path:"",component:AdddoctorComponent
  },
  {
    path:"view",component:ViewallComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdddoctorComponent,
    ViewallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
