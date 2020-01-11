import {Component, Input, OnInit} from '@angular/core';
import {Flight} from '../../shared/interfaces';

@Component({
  selector: 'app-flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.scss']
})
export class FlightDetailsComponent implements OnInit {
  @Input() selectedFlight: Flight;

  constructor() { }

  ngOnInit() {
  }

}
