import { Component } from "@angular/core";
import {Router, NavigationStart} from '@angular/router';
import { FrontendserviceService } from './frontendservice.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "music-frontend";

  public shownav=false;
  public loggedshownav=false;
  private name;

  constructor(router:Router,private fservice:FrontendserviceService) {
router.events.forEach((event) => {
    if(event instanceof NavigationStart) 
    {
      if(event.url=="/homecomponent" || event.url=="/login" || event.url=="/register")
        {this.shownav = true;
        this.loggedshownav=false;}
      else
      {
        this.name=localStorage.getItem('name');
        this.shownav = false;
        this.loggedshownav=true;}
    }
  });
}
}
