import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {interval, timer, Observable} from 'rxjs';
import {flatMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  private baseUrl = 'https://interview-mock.herokuapp.com/api/workers/';

  constructor(protected http: HttpClient) { }

  private getUrl(url: string = '') {
    return this.baseUrl + url;
  }

  public getWorkers(url: string = ''): Observable<any> {
    return this.http.get(this.getUrl(url));
  }

  // public getFlights(workerId) {
  //   return timer(100, 60000).pipe(flatMap(() => {
  //     return this.http.get(this.getUrl(workerId));
  //   }));
  // }

  public getFlights(workerId): Observable<any> {
    return this.http.get(this.getUrl(workerId));
  }
}
