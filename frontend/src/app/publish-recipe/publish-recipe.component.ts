import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { FrontendserviceService } from '../frontendservice.service';
import { DatePipe, NumberFormatStyle } from '@angular/common';



export interface Ingredients {
  category: string;
  name: string;
  quantity:number;
  unit:string;

}

export interface Steps{
  stepContent: string;
}

export interface Stages{
  stageName:string;
  duration: number;
  steps:Steps[];
}

export interface Comments{
  userName: string;
  comment: string;
  time: Date;
  userImage: string;
}

export interface Ratings{
  userName: string;
  rating: number;
  time: Date;
}

export interface Process{
  processName: string;

}

export interface Procedure{
 stages :Stages[];
}




export interface Recipe{
  recipeName:string;
  description:string;
  servesFor:number;
  ingredients:Ingredients[];
  procedure:Procedure;
  cuisine:string;
  images:string[];
  ratingCount:number;
  duration:number;
  price:number;
  publishedOn:number;
  publishedBy:string;
  comment: Comments[];
  rating: number;
  course: string;

}

// export interface Procedure{
//   procedureName: string;
//   process: Process[];
// }



@Component({
  selector: 'app-publish-recipe',
  templateUrl: './publish-recipe.component.html',
  styleUrls: ['./publish-recipe.component.css']
})


export class PublishRecipeComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;

  constructor(private _formBuilder: FormBuilder,private http:HttpClient,private fservice:FrontendserviceService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    console.log(this.processs);
    console.log(this.ingredients);




  }

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  ingredients: Ingredients[] = [];
  n=1;

  processs: Process[]=[

  ];

  procedure: Procedure;

  stage: Stages[]=[];
  step: Steps[]=[];
  step1: Steps[]=[];
  step2: Steps[]=[];
  step3: Steps[]=[];
  step4: Steps[]=[];





  steps = ['Step 1'];
  activeStep = this.steps[0];
  links = [this.steps[0]];
  activeLink = this.links[0];

  steps1 = ['Step 1'];
  activeStep1 = this.steps1[0];
  links1 = [this.steps1[0]];
  activeLink1 = this.links1[0];

  steps2 = ['Step 1'];
  activeStep2 = this.steps2[0];
  links2 = [this.steps2[0]];
  activeLink2 = this.links2[0];

  steps3 = ['Step 1'];
  activeStep3 = this.steps3[0];
  links3 = [this.steps3[0]];
  activeLink3 = this.links3[0];

  steps4 = ['Step 1'];
  activeStep4 = this.steps4[0];
  links4 = [this.steps4[0]];
  activeLink4 = this.links4[0];



  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.ingredients.push({category: "tom",
        name: value.trim(),
        quantity:45,
        unit:"tom"});

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(ingredients: Ingredients): void {
    const index = this.ingredients.indexOf(ingredients);

    if (index >= 0) {
      this.ingredients.splice(index, 1);
    }
  }

  addLink() {
    this.links.push(`Step ${this.links.length + 1}`);
  }

  addLink1() {
    this.links1.push(`Step ${this.links1.length + 1}`);
  }

  addLink2() {
    this.links2.push(`Step ${this.links2.length + 1}`);
  }

  addLink3() {
    this.links3.push(`Step ${this.links3.length + 1}`);
  }

  addLink4() {
    this.links4.push(`Step ${this.links4.length + 1}`);
  }

  // addStep() {
  //   this.steps.push(`Step ${this.steps.length + 1}`);

  // }

  addProcess(value){
    this.step.push({stepContent:value});
  }

  addProcess1(value){
    this.step1.push({stepContent:value});
  }

  addProcess2(value){
    this.step2.push({stepContent:value});
  }

  addProcess3(value){
    this.step3.push({stepContent:value});
  }

  addProcess4(value){
    this.step4.push({stepContent:value});
  }

  a:number=0;
  a1:number=0;
  a2:number=0;
  a3:number=0;
  a4:number=0;



  adda(){
    this.a++;
  }

  adda1(){
    this.a1++;
  }
  adda2(){
    this.a2++;
  }
  adda3(){
    this.a3++;
  }
  adda4(){
    this.a4++;
  }





  // addStages(value){
  //   if(this.n==1){
  //   this.stage.push({stageDescription:value,steps:this.step});
  //   }else if(this.n==2){
  //     this.stage.push({stageDescription:value,steps:this.step1});
  //     } else if(this.n==3){
  //       this.stage.push({stageDescription:value,steps:this.step2});
  //       } else if(this.n==4){
  //         this.stage.push({stageDescription:value,steps:this.step3});
  //         } else if(this.n==5){
  //           this.stage.push({stageDescription:value,steps:this.step4});
  //           }

  // }

     addStages(value){
      this.stage.push({stageName:value,duration:0,steps:this.step});

     }

     addStages1(value){
      this.stage.push({stageName:value,duration:0,steps:this.step1});

     }

     addStages2(value){
      this.stage.push({stageName:value,duration:0,steps:this.step2});

     }

     addStages3(value){
      this.stage.push({stageName:value,duration:0,steps:this.step3});

         }

     addStages4(value){
      this.stage.push({stageName:value,duration:0,steps:this.step4});

     }

  addIngredient( value1, value2){
     let n = this.ingredients.length;
     if(this.ingredients.length>0){
    this.ingredients[n-1].category='';
    // this.ingredients[n-1].name=value;
    this.ingredients[n-1].quantity=value1;
    this.ingredients[n-1].unit=value2;
     } else{
      this.ingredients[0].category='';
      // this.ingredients[0].name=value;
      this.ingredients[0].quantity=value1;
      this.ingredients[0].unit=value2;
     }
  }

  toggle = true;
  status = 'Confirm Ingredients';

   enableDisableRule(job) {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Confirm Ingredients' : 'Ingredients Confirmed';
    }

    toggle1 = true;
    status1 = 'Confirm Step';

     enableDisableRule1(job) {
      this.toggle1 = !this.toggle1;
      this.status1 = this.toggle1 ? 'Confirm Step' : 'Step Confirmed';
      }






  publishRecipe(value1,value2,value3,value4,value5){
           this.procedure=({stages:this.stage});
     let  recipe : Recipe =({recipeName:value1,
          description:value2,
          cuisine:value3,
          course:value4,
          servesFor:value5,
          images:[],
          price:0,
          publishedBy:'',
          rating:0,
//           procedure:this.stage,
          procedure:this.procedure,
          ingredients:this.ingredients,
          comment:[],
          ratingCount:0,
          duration:0,
          publishedOn:Date.now()

        })

        //Empty image array being send


        //Getting todays date
        // let dateFormat = require('dateformat');
        // let now = new Date();
        // this.recipe.publishedOn=dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT");

        this.fservice.postPublishRecipe(recipe).subscribe();




  }

  addn(){
    if(this.n==5){

    }else{
    this.n++;
    }
  }



}
