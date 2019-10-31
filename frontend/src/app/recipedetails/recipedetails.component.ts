import { Component, OnInit } from '@angular/core';
import { DetailService} from './detail.service'
import { ActivatedRoute,Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FrontendserviceService } from '../frontendservice.service';

@Component({
  selector: 'app-recipedetails',
  templateUrl: './recipedetails.component.html',
  styleUrls: ['./recipedetails.component.css']
})
export class RecipedetailsComponent implements OnInit {

  title = 'recipe';
  recipeid;
  public recipedetail={};

  constructor(private search1:DetailService,private route:ActivatedRoute,private router:Router, private http:HttpClient,private fservice:FrontendserviceService) { }
  ngOnInit()
  {
    this.recipeid= this.route.snapshot.paramMap.get('recipeid');
    let _url=`http://localhost:3000/Recipe_details/`+this.recipeid;
    this.http.get(_url).subscribe((data)=>{this.recipedetail=data; console.log(data,"recipedetails");});
  }
  navtopage()
  {
    this.router.navigateByUrl(`/tryrecipe/${this.recipeid}`)
  }

  like()
  {
    console.log("like recipe");
    this.fservice.saveuserlikerecipe(this.recipedetail).subscribe();
  }

}
