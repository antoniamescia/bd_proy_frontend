import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  url = 'https://bd-api.nicocartalla.com/api/v1/';

  getQuestions() {
    return this.http.get(this.url+'questions');
  }
}
