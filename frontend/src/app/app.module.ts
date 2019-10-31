import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomecomponentComponent } from './homecomponent/homecomponent.component';
import { TrendingComponent } from './trending/trending.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import {HttpClientModule} from '@angular/common/http';
import { MasterComponent } from './master/master.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RecipecardComponent } from './recipecard/recipecard.component';
import { MastercardComponent } from './mastercard/mastercard.component';
import { FrontendserviceService } from './frontendservice.service';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipedetailsComponent } from './recipedetails/recipedetails.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoggednavbarComponent } from './loggednavbar/loggednavbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { RecommendedbyhistoryComponent } from './recommendedbyhistory/recommendedbyhistory.component';
import { TryrecipeComponent } from './tryrecipe/tryrecipe.component';
import { MatCardModule } from '@angular/material/card';
import { PublishRecipeComponent } from './publish-recipe/publish-recipe.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {MatChipsModule, MAT_CHIPS_DEFAULT_OPTIONS} from '@angular/material/chips';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import { SelectinterestsComponent } from './selectinterests/selectinterests.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { TestcomponentComponent } from './testcomponent/testcomponent.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AgmCoreModule } from '@agm/core';
import {} from 'googlemaps';
import {MatGridListModule} from '@angular/material/grid-list';
import { DashboardrecipecardComponent } from './dashboardrecipecard/dashboardrecipecard.component';
import {MatButtonModule} from '@angular/material/button';
import { RecommededComponent } from './recommeded/recommeded.component';
import { DashboardtrendingComponent } from './dashboardtrending/dashboardtrending.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MinuteSecondsPipe } from './minute-seconds.pipe';




@NgModule({
  declarations: [AppComponent, HomecomponentComponent, TrendingComponent, MasterComponent, AboutComponent, FeaturesComponent, FooterComponent, LoginComponent, RecipecardComponent, MastercardComponent, NavbarComponent, RecipedetailsComponent, RegisterComponent, DashboardComponent, LoggednavbarComponent, RecommendedbyhistoryComponent, TryrecipeComponent, SelectinterestsComponent,PublishRecipeComponent, UserprofileComponent, TestcomponentComponent, DashboardrecipecardComponent, RecommededComponent, DashboardtrendingComponent,MinuteSecondsPipe],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDL37YbuTkA3eJyMt5UuEBZAo3UXwf_ZvA'
    }),
    MatButtonModule,
    MatGridListModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    Ng2CarouselamosModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatTableModule,
    MatTabsModule,
    MatExpansionModule,
    ScrollToModule.forRoot()
  ],
  providers: [FrontendserviceService,{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  },
  {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { showError: true }
  },
  {
    provide: MAT_CHIPS_DEFAULT_OPTIONS,
    useValue: {
      separatorKeyCodes: [ENTER, COMMA]
    }
  }],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
