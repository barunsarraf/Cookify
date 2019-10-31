import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class FrontendserviceService {

  private currentusernamesubject:BehaviorSubject<String>;
  private currentusername;

  private token:BehaviorSubject<String>;
  private currenttoken;

 
  

  constructor(private http:HttpClient,) {
    this.currentusernamesubject=new BehaviorSubject<String>(localStorage.getItem('username'));
    this.currentusername=this.currentusernamesubject.asObservable();

    

    this.token=new BehaviorSubject<String>(localStorage.getItem('token'));
    this.currenttoken=this.token.asObservable();
   }

getalltopmasters():Observable<any>
{

return this.http.get<any>("http://localhost:3000/master");
}

getalltrendingrecipe():Observable<any>
{

return this.http.get<any>("http://localhost:3000/Trending_Recipe");
}

getallrecommendedbyhistoryrecipe():Observable<any>
{
  return this.http.get<any>("http://localhost:3000/Trending_Recipe")
}

getallrecommendedrecipe():Observable<any>
{
  return this.http.get<any>("http://localhost:3000/Trending_Recipe")
}

login(user:User)
{
  let _url="http://localhost:8080/userLogin/authenticate";
  return this.http.post<User>(_url,user,{observe:'response'});
}

logout()
{
  localStorage.removeItem('username');
  localStorage.removeItem('token');
  localStorage.removeItem('name');
}

getStateAndCountry()
{
  return this.http.get<any>("http://localhost:3000/country");
}
public  getdataforinterests():Observable<any>
  { let _url= "http://localhost:3000/interestrecipes";
    return this.http.get<any>(_url);
  }
public submitfinalfavourites(obj:any):Observable<any>
{
  let _url1="http://localhost:3000/Favourites_selected";
 return  this.http.post(_url1,obj);
}

 public postPublishRecipe(obj:any):Observable<any>
{
  let urlz="http://localhost:8082/api/v1/recipe";
  return this.http.post(urlz,obj);

}

getRecipeDetails(id)
{
  return this.http.get<any>("http://localhost:3000/Recipe_Details/"+id)
}

getUserDetails(username)
{
  console.log(username+" inside Service");
  return this.http.get<any>("http://localhost:8111/api/v1/user/"+username)
}

saveuserlikerecipe(recipeobj)
{
  let urlz="http://localhost:8111/api/v1/userlikerecipe/"+localStorage.getItem('username');
  console.log(urlz,"inside save");
  return this.http.post(urlz,recipeobj);
}


}

