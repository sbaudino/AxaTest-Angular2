import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from "./app.routes";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

// Services
import { InhabitantsService } from "./services/inhabitants.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InhabitantComponent } from './components/inhabitant/inhabitant.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    InhabitantComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    app_routing
  ],
  providers: [
    InhabitantsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
