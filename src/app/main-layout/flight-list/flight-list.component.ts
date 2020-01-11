import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {interval} from 'rxjs';
import {Flight} from '../../shared/interfaces';
import {Subscription} from 'rxjs';
import {BaseApiService} from '../../shared/services/base-api.service';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.scss']
})
export class FlightListComponent implements OnInit, OnChanges, OnDestroy {
  flights: Flight[] = [];
  flightSubscr: Subscription;
  selectedFlight: Flight;


  @Input()selectedWorker: Subscription;

  constructor(private apiService: BaseApiService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.flightSubscr = this.apiService.getFlights(this.selectedWorker).subscribe(flights => {
      this.flights = flights;
      this.selectedFlight = flights[0];
    });
  }

  ngOnDestroy() {
    if (this.flightSubscr) {
      this.flightSubscr.unsubscribe();
    }
  }

  selectFlight(selectedFlight) {
    this.selectedFlight = selectedFlight;
  }

}
