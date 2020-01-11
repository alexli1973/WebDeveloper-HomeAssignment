import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {Flight, Worker} from '../../shared/interfaces';
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
  selectedRow: number;

  @Input()selectedWorker: Worker;

  constructor(private apiService: BaseApiService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.flightSubscr = this.apiService.getFlights(this.selectedWorker).subscribe(flights => {
      // @ts-ignore
      this.flights = flights;
      this.selectedFlight = flights[0];
      this.selectRow(0);
    });
  }

  ngOnDestroy() {
    if (this.flightSubscr) {
      this.flightSubscr.unsubscribe();
    }
  }

  selectFlight(selectedFlight, index) {
    this.selectedFlight = selectedFlight;
    this.selectRow(index);
  }

  selectRow(index) {
    this.selectedRow = index;
  }

}
