import {Component, Input, OnInit, Output} from '@angular/core';
import {Worker} from '../shared/interfaces';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
 selectedWorker: Worker;

  constructor() { }

  ngOnInit() {
  }

  selectWorker($event) {
    this.selectedWorker = $event;
  }

}
