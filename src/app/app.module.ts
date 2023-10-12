import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar';
import { HomeComponent } from './components/home';
import { FooterComponent } from './components/footer';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ApiService } from './services';
import { HttpClientModule } from '@angular/common/http';
import { EventsComponent, TableRenderComponent } from './components/events';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    EventsComponent,
    FooterComponent,
    TableRenderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
