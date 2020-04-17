import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-cel',
  templateUrl: './cel.component.html',
  styleUrls: ['./cel.component.css']
})
export class CelComponent implements OnInit {
  Cel = [];
  fini = 0;

  constructor(private apicel: ApiService) {
  }
  count = 0;
  a = [10];
  i = 0 ;
  h = true ;
min = 0 ;
  ngOnInit() {
    this.apicel.getAllcel().subscribe(
      (Response: any) => this.Cel = Response.results
    );
  }
  yup() {
    this.count = this.count + 1;
  }
  finish() {
    this.fini = this.count;
    this.min = 10 - this.fini ;
  }
}
