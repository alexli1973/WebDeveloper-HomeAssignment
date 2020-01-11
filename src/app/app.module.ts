import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { WorkersComponent } from './main-layout/workers/workers.component';
import {HttpClientModule} from '@angular/common/http';
import { FlightListComponent } from './main-layout/flight-list/flight-list.component';
import { FlightDetailsComponent } from './main-layout/flight-details/flight-details.component';
import { TimeFormatPipe } from './shared/time-format.pipe';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    WorkersComponent,
    FlightListComponent,
    FlightDetailsComponent,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
