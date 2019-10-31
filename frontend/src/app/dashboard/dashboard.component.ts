import { Component, OnInit } from '@angular/core';
import { FrontendserviceService } from '../frontendservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private user=[];
  private username;
  showFiller = false;
  constructor(private fservice:FrontendserviceService,private route:Router) { }

  ngOnInit() {
    this.username=localStorage.getItem('username');

    if(this.username==null)
    {
      this.route.navigateByUrl('/login');
    }

    this.fservice.getUserDetails(this.username).subscribe((data)=>{
      this.user=data;
      console.log(data,"dashboard user data");
      localStorage.setItem('name',data.name);
    
    });
  }
  

}