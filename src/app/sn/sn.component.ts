import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-sn',
  templateUrl: './sn.component.html',
  styleUrls: ['./sn.component.css']
})
export class SnComponent implements OnInit {
sn = [];
  constructor(private apisn: ApiService) { }

  ngOnInit() {
    this.apisn.getAllsn().subscribe(
      (Response: any) => this.sn = Response.results
    );
  }

}
