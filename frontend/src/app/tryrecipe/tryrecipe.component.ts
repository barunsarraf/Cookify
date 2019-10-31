import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrontendserviceService } from '../frontendservice.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-tryrecipe',
  templateUrl: './tryrecipe.component.html',
  styleUrls: ['./tryrecipe.component.css']
})
export class TryrecipeComponent implements OnInit {


  public recipe=[];
  public igLength;
  public igQuantity=[];
  private num;
  public index=0;
  public ing=[];
  public Procedure=[];
  public timeRem=[];
  public isStartDisabled = false;
  public isPauseDisabled = false;
  public isMainDisabled = false;
  constructor(private http:HttpClient, private route:ActivatedRoute, private fservice:FrontendserviceService) { }

  ngOnInit() {
    let recipeid=this.route.snapshot.paramMap.get('recipeid');
    console.log(recipeid,"ddddddd");
    this.fservice.getRecipeDetails(recipeid)
    .subscribe(data => {this.recipe=data; 
                        console.log(this.recipe,"Recipe Details");
                        this.num=data.serve_for;
                        this.igLength=(data.Ingredients).length;
                        this.ing=data.Ingredients;
                        this.Procedure=data.procedure;
                        console.log(data);
                        for(let i=0; i<this.Procedure.length; i++) {
                          this.timeRem[i] = this.Procedure[i].stageTime*60;
                        }});
      
    

  }
// Serve for count
  changeserve(operation)
  {
    if(operation=='minus'){
      if(this.num<=0)
      {
        this.num=0;
      }
      else
      {
        this.num=this.num-1;
      }
     
    }
    else{
      this.num=this.num+1;
    }
    
  }

  // Pass Entered quantity of ingredients to backend
  orderval()
  {
    var obj=[];
    for(let i=0; i<this.igLength; i++)
    {
    var x={"ingredient_used":this.ing[i].ingredient_used,"quantity_recquired":this.igQuantity[i]};
      obj.push(x);
  }
  console.log(obj);
   
  }

// Set time for each stage
  getStageTime() {
    for(let i=0; i<this.Procedure.length; i++) {
      this.timeRem[i]=this.Procedure[i].stageTime;
    }
  }

  //Countdown timer
  // Start Timer
  interval;
  startTimer(i) {
      this.isMainDisabled = true;
      this.isStartDisabled = true;
      this.isPauseDisabled = false;
      this.interval = setInterval(() => {
        if(this.timeRem[i] > 0) {
          this.timeRem[i]--;
        } else {
          this.timeRem[i] = 0;
          this.isStartDisabled = false;
        }
      },1000)
  }
// Pause Timer
  pauseTimer(i) {
    this.isPauseDisabled = true;
    this.isStartDisabled = false;
    clearInterval(this.interval);
  }
}

