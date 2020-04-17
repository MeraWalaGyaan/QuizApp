import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getAllQg() {
    return this.http.get('https://opentdb.com/api.php?amount=10&category=9');
  }

  getAlls() {
    return this.http.get('https://opentdb.com/api.php?amount=10&category=19');
  }

  getAllsports(){
    return this.http.get('https://opentdb.com/api.php?amount=10&category=21');
  }
  getAllsn(){
    return this.http.get('https://opentdb.com/api.php?amount=10&category=17');
  }
  getAllcel(){
    return this.http.get('https://opentdb.com/api.php?amount=10&category=26');
  }

}
