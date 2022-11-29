import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  url = 'https://bd-api.nicocartalla.com/api/v1/';

  getAppsAndMenus() {
    return this.http.get(this.url+'aplicativos/menu');
  }
}
