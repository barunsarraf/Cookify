import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrontendserviceService } from '../frontendservice.service';

@Component({
  selector: 'app-dashboardtrending',
  templateUrl: './dashboardtrending.component.html',
  styleUrls: ['./dashboardtrending.component.css']
})
export class DashboardtrendingComponent implements OnInit {


  public recipe=[];

  constructor(private http:HttpClient,private fservice:FrontendserviceService) { }

  ngOnInit() {
    this.fservice.getalltrendingrecipe().subscribe(data => {this.recipe=data; console.log(this.recipe,"data of trending recipe")});

  }

}
