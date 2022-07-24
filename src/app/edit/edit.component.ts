import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { AllService } from '../all.service';
import { Recipe } from '../models/Recipe';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit { 
  
  fromE: FormGroup;
  arrP:string[]=[""];
  arrL:string[]=[""];
  recipeToEdit:Recipe;

    ngOnInit(): void {
      this.on();
}
     
  cancel(){
        this.on();
        
      }
  on(){
    this.recipeToEdit={...this.ser.Recipes};
    this.fromE=new FormGroup({
      "CodeUser":new FormControl(this.recipeToEdit.CodeUser,Validators.compose([Validators.required,Validators.pattern('[0-9]*')])),

        "CodeRecipe":new FormControl(this.recipeToEdit.CodeRecipe,Validators.compose([Validators.required,Validators.pattern('[0-9]*')])),
        "NameRecipe":new FormControl(this.recipeToEdit.NameRecipe,Validators.required),
        "CodeCategory":new FormControl(this.recipeToEdit.CodeCategory),
        "Time":new FormControl(this.recipeToEdit.Time,Validators.compose([Validators.required,Validators.pattern('[0-9]*')])),
        "LevelOfDifficul":new FormControl(this.recipeToEdit.LevelOfDifficul,Validators.compose([Validators.required,Validators.pattern('[1-5]')])),
        "DateAddRecipe":new FormControl(this.recipeToEdit.DateAddRecipe,Validators.required)
  });
  this.arrP=[...this.recipeToEdit.PrepartionM];
  this.arrL=[...this.recipeToEdit.ListComponent];
  }
  saveC(){
    const Form={...this.fromE.value};
   
    Form["ListComponent"]=[...this.arrL];
    Form["PrepartionM"]=[...this.arrP]; 
     Form["Image"]=this.recipeToEdit.Image;
  this.ser.editS(Form).subscribe(s=>{this.sweet(),this.ret.navigate(["allRecipe"])},e=>console.log(e))
  }
  sweet(){
    Swal.fire({
      icon: 'success',
      title: '! השינויים נשמרו בהצלחה',
      showConfirmButton: false,
      timer: 4000
    })
}
  updatePre(){
    console.log(this.arrP);
    this.arrP=this.arrP.filter(item=>item!="");
    this.arrP.push("");
    console.log(this.arrP);
  }
  updateList(){
    console.log(this.arrL);
    this.arrL=this.arrL.filter(item=>item!="")
    this.arrL.push("");
    console.log(this.arrL);
  }
  trackByidx(index){
  return index;
  }
   constructor(public ser:AllService, public ret:Router) { }

  


}
