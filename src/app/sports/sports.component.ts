import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
spo = [10];
i = 0;
  constructor(private apisport: ApiService ) { }

  ngOnInit() {
    this.apisport.getAllsports().subscribe(
      (Response: any) => this.spo = Response.results
    );
  }
}
