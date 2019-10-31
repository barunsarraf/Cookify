import { NgModule, Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes} from '@angular/router';
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { LoginComponent } from './login/login.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TryrecipeComponent } from './tryrecipe/tryrecipe.component';
import { PublishRecipeComponent } from './publish-recipe/publish-recipe.component';
import { SelectinterestsComponent } from './selectinterests/selectinterests.component';
import { UserprofileComponent} from './userprofile/userprofile.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';

const routes: Routes = [
  {path:'',redirectTo:'/homecomponent',pathMatch:'full'},
  {path:'test',component:TestcomponentComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'homecomponent',component:HomecomponentComponent},
  {path:'login',component:LoginComponent},
  {path:'recipedetails/:recipeid',component:RecipedetailsComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'tryrecipe/:recipeid',component:TryrecipeComponent},
  {path:'publish-recipe', component:PublishRecipeComponent},
  {path:'selectyourinterests',component:SelectinterestsComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponent=[HomecomponentComponent,LoginComponent,RecipedetailsComponent,RegisterComponent,TryrecipeComponent,SelectinterestsComponent,UserprofileComponent,TestcomponentComponent];
