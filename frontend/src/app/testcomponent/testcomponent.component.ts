import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
  private  lat:any= 'locating...';
  private lng:any= 'locating...';

  constructor() { 
  }

  ngOnInit() {
   
  }

  findme()
  {
    if (navigator.geolocation)
    {
      
      navigator.geolocation.getCurrentPosition((position) => {this.lat=position.coords.latitude;this.lng=position.coords.longitude;console.log(position);});
    }
    else
    {
      console.log("nothing");
    }
  }
}