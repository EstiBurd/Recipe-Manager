import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from './models/Recipe';

@Injectable({
  providedIn: 'root'
})
export class AllService {
  [x: string]: any;

  constructor(private Http:HttpClient) { }
  all(){
    return this.Http.get<Recipe[]>("https://localhost:44393//api/Recipe/getRecipe");
  }
  Recipes= new Recipe(null,null,null,null,null,null,null,null,null,null,null);


add(recipe:Recipe){
return this.Http.post<number>("https://localhost:44393//api/Recipe/AddRecipe",recipe);

}
editS(recipe:Recipe){
  return this.Http.post<any>("https://localhost:44393//api/Recipe/EditRecipe",recipe);
  
  }
}