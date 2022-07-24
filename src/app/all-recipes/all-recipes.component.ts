import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../all.service';
import { CategoryService } from '../category.service';
import { Category } from '../models/Category';
import { Recipe } from '../models/Recipe';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css']
})
export class AllRecipesComponent implements OnInit {
  filterList:Recipe[];
  name:string;
  listcatgury:Category[];
  codeC:number;
  time:number;
  arrR:Recipe[];
  constructor(private All:AllService,private r:Router,public sa:CategoryService) {
    // this.All.all().subscribe(s=>this.arrR=s,e=>console.log(e));
   }
 all(){
      this.All.all().subscribe(s=>{this.arrR=s,this.filterList=s},e=>console.log(e));
    }
    goTo(){
this.r.navigate(["addRecipe"]);
    }
  ngOnInit(): void {
   this.all();
   this.sa.AllC().subscribe(s=>this.listcatgury=s,e=>console.log(e));
  } 
  f(){
    this.filterList=this.arrR;
    if(this.name){
      this.filterList=this.filterList.filter(f=>f.NameRecipe.includes(this.name));
    }
    if(this.time){
      this.filterList=this.filterList.filter(f=>f.Time<=this.time);
    }
   if(this.codeC){
     if(this.codeC!=0){
       this.filterList=this.filterList.filter(f=>f.CodeCategory==Number(this.codeC));
     }
   }
 
 
  }

}
