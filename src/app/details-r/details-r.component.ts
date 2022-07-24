import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../all.service';
import { Recipe } from '../models/Recipe';
import { User } from '../models/User';

@Component({
  selector: 'app-details-r',
  templateUrl: './details-r.component.html',
  styleUrls: ['./details-r.component.css']
})
export class DetailsRComponent implements OnInit {
@Input()
MyRecipe:Recipe;
Recipes:Recipe;
userM:User;
  constructor(public ser:AllService,public ret:Router) {
    this. userM=JSON.parse(sessionStorage.getItem("currentUser"));
  }
 
  getAllDetailes(){
    if(sessionStorage.getItem("currentUser").length>0){
    this.ser.Recipes={...this.MyRecipe}

    this.ret.navigate(["detailes"]);
  }
  else{
    alert("login now");
  }
  }  
  
  ngOnInit(): void {
  }

}
