import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormsModule,ReactiveFormsModule, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { FrontendserviceService } from '../frontendservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-selectinterests',
  templateUrl: './selectinterests.component.html',
  styleUrls: ['./selectinterests.component.css']
})
export class SelectinterestsComponent implements OnInit {

  public reposearch=[];
  public recipeform: FormGroup;
  public id;
  
  private search:any;

  constructor(private formBuilder: FormBuilder,  private search1:FrontendserviceService,private router:Router)
   {
    this.recipeform = this.formBuilder.group({
      favourites:this.formBuilder.array([])
    });
    
    }
 public addfinal()
  { 
   this.search1.submitfinalfavourites(this.recipeform.value.favourites).subscribe();
    console.log(this.recipeform.value.favourites);
    this.router.navigateByUrl(`/login`);
   }
  
 
onChange(view:any,isChecked:boolean)
{
const control=<FormArray>this.recipeform.controls.favourites;
if(isChecked)
{
  control.push(new FormControl(view));
  console.log(this.recipeform);
  console.log(control);
  console.log(view);
  console.log(this.recipeform.value.favourites); 
}
else
{
 const index=control.controls.findIndex(x=>(x.value==view))
 console.log(view);
 control.removeAt(index);
 console.log(index);
}
} 
  ngOnInit() 
  {
    this.search1.getdataforinterests().subscribe(data=> {this.reposearch=data;console.log(data);});
    
  }

}
