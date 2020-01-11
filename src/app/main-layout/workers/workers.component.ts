import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Worker} from '../../shared/interfaces';
import {BaseApiService} from '../../shared/services/base-api.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.scss']
})
export class WorkersComponent implements OnInit, OnDestroy {
  workers: Worker[] = [];
  workerSubscr: Subscription;
  @Output() selectedWorker = new EventEmitter<Worker>();
  selectedRow: number;

  constructor(private apiService: BaseApiService) { }

  ngOnInit() {
    this.workerSubscr = this.apiService.getWorkers().subscribe(workers => {
      this.workers = workers;
      this.selectWorker(workers[0].id, 0);
      // this.selectRow(0);
    });
  }

  ngOnDestroy() {
    if (this.workerSubscr) {
      this.workerSubscr.unsubscribe();
    }
  }

  selectWorker(workerId, index) {
    this.selectedWorker.emit(workerId);
    this.selectRow(index);
  }

  selectRow(index) {
    this.selectedRow = index;
  }


}
