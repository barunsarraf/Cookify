import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponseBase, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';

import { FrontendserviceService } from '../frontendservice.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private token;
  
  private loggedusername;
  

  private loginstatus;
  constructor(private router:Router,private http:HttpClient,private FrontEndService:FrontendserviceService) { }

  ngOnInit() {
    this.loginstatus="";
  }
   register()
  {
   this.router.navigateByUrl(`/register`)
  }

  user: User =new User();
  
  
  submitlogindetails(username,password): any
  {
    this.user.username=username;
    this.user.password=password;

   this.FrontEndService.login(this.user).subscribe((res)=>{
  if(res.status==200)
  {
    localStorage.setItem('token',JSON.stringify(res.body));
    localStorage.setItem('username',username);
    this.router.navigate(['dashboard']);
  }
  },
  (error) => {console.log(error,"bbbbbbb");
  if(error.status==401)
  this.loginstatus="Incorrect Details";
    // this.router.navigate(['register']);
}
  );
    // this.http.post<User>(_url,this.user,{observe:'response'}).subscribe((response)=>{
    //   if(response.status==401) {
    //     console.log("****")
    //   }
    //     console.log("passed with "+response)
    
    // });

    
    // this.http.post<any>(_url).subscribe((data)=>{this.token=data;console.log(data)});
  }
}
