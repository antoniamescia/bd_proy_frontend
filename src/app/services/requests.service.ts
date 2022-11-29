import { AnimateTimings } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }

  url = 'https://bd-api.nicocartalla.com/api/v1/';

  getRequests() {
    return this.http.get(this.url+'permissions/requests');
  }

  handleRequest(estado: any, userId: any, appId: any, rolNegId: any) {
    return this.http.put(this.url+'permissions/requests', {estado, userId, appId, rolNegId}, {observe: 'response'});
  }

  getNewRequestOptions() {
    return this.http.get(this.url+'permissions/rolesapp');
  }

}
