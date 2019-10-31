import { Component, OnInit } from '@angular/core';
import {FrontendserviceService} from '../frontendservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
 }
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private frontendserviceservice:FrontendserviceService,private http:HttpClient,private router:Router) { }
  
  ngOnInit() {
  }
  state ="";
  country="";
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  nameFormControl = new FormControl('', [
    Validators.required,Validators.pattern("[a-zA_Z ]*")
  ]);
  userNameFormControl = new FormControl('', [
    Validators.required,Validators.pattern("[a-z0-9_-]*")
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required
  ]);
  ageFormControl = new FormControl('', [
    Validators.required,Validators.pattern("[0-9]{1,3}")
  ]);
  cityFormControl = new FormControl('', [
    Validators.required
  ]);
  matcher = new MyErrorStateMatcher();
 
  


  getStateAndCountry($event,city)
  {
    this.frontendserviceservice.getStateAndCountry().subscribe((data)=>{console.log(data);
    for(var i in Object.keys(data))
    {
      let s=data[i].city;
      console.log(s.length);
      if(s==city)
      {
        this.state=data[i].state;
        this.country=data[i].country;
        break;
      }
    }
    });

  }

  registerUser(name,email,userName,password,city,age,gender)
  {
    console.log(name+email+userName+password+city+age+gender);
      var userObj={name:name,emailId:email,username:userName,password:password,city:city,state:this.state,country:this.country,age:age,gender:gender};

      var url="http://localhost:8080/userLogin/register";
      this.http.post(url,userObj).subscribe();
      this.router.navigateByUrl(`/selectyourinterests`);
  }
}