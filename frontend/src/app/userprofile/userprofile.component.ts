import { Component, OnInit } from '@angular/core';
import { FrontendserviceService } from '../frontendservice.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  private user=[];
  private recipespublished=[];
  private recipestried=[];
  private recipesliked=[];
  constructor(private service:FrontendserviceService) { }

  ngOnInit() {
    let username="barunnew";
    this.service.getUserDetails(username).subscribe((data)=>
    {this.user=data;console.log(this.user);this.recipespublished=data.recipesPublished;
      this.recipestried=data.recipesTried;
      this.recipesliked=data.recipesLiked;
    })
  }
}
