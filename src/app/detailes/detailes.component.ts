import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllService } from '../all.service';
import { Recipe } from '../models/Recipe';
import { User } from '../models/User';
import Swal from 'sweetalert2'
import { CategoryService } from '../category.service';
import { Category } from '../models/Category';
@Component({
  selector: 'app-detailes',
  templateUrl: './detailes.component.html',
  styleUrls: ['./detailes.component.css']
})
export class DetailesComponent implements OnInit {
re:Recipe;
userM:User;
  constructor(public s:AllService,public rout:Router,public c:CategoryService) { 
    this. userM=JSON.parse(sessionStorage.getItem("currentUser"));

    this.re=this.s.Recipes;
console.log(this.re);
  }

  ngOnInit(): void {
this.level(this.re.LevelOfDifficul);

  }

  pic=[];
level(l){
  for(let i=0;i<l;i++){
    this.pic[i]="../../assets/כוכבא..png";
  
  }
  for(let i=l;i<5;i++){
    this.pic[i]="../../assets/star.png";
  }
  console.log(this.pic);
}
editMe(){ 
  if(this.re.CodeUser==this.userM.CodeUser){
     this.s.Recipes={...this.re}
   this.rout.navigate(["app-edit"]);
  }
 else{
  this.sweet();
 }
}
   asian(){
    if (this.re.CodeCategory==1)
    return true;
    return false;
  }
  aitaly(){
    if (this.re.CodeCategory==2)  
     return true;
   return false;
 }
 isrealy(){
  if (this.re.CodeCategory==3)  
   return true;
   return false;
 }


 sweet(){
  Swal.fire({
    title: 'אין באפשרותך לערוך את המתכון',
    text: "...בעל המתכון בלבד רשאי לערוך",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
     })
  }
  // }).then((result) => {
  //   if (result.isConfirmed) {
  //     Swal.fire(
  //       'Deleted!',
  //       'Your file has been deleted.',
  //       'success'
  //     )
  //   }
  // })
 }

