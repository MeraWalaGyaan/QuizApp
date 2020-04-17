import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-gk',
  templateUrl: './gk.component.html',
  styleUrls: ['./gk.component.css']
})
export class GKComponent implements OnInit {
que = [];
count1 = 0 ;
count2 = 0 ;
min = 0 ;
  constructor(private api: ApiService) { }

  ngOnInit() {
    this.api.getAllQg().subscribe(
      (Response: any) => this.que = Response.results
    );
  }
  w() {
    this.count1 = this.count1 + 1 ;
   }
   w1() {
    this.count2 = this.count1;
     this.min = 10 - this.count2 ;
   }
}
