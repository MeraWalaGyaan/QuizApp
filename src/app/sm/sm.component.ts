import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-sm',
  templateUrl: './sm.component.html',
  styleUrls: ['./sm.component.css']
})
export class SMComponent implements OnInit {
sm = [];
  constructor(private apism: ApiService) { }

  ngOnInit() {
    this.apism.getAlls().subscribe(
      (Response: any) => this.sm = Response.results
    );
  }

}
