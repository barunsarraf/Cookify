import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrontendserviceService } from '../frontendservice.service';

@Component({
  selector: 'app-recommeded',
  templateUrl: './recommeded.component.html',
  styleUrls: ['./recommeded.component.css']
})
export class RecommededComponent implements OnInit {

  
  public recipe=[];

  constructor(private http:HttpClient,private fservice:FrontendserviceService) { }

  ngOnInit() {
    this.fservice.getalltrendingrecipe().subscribe(data => {this.recipe=data; console.log(this.recipe,"data of trending recipe")});
  }

}
