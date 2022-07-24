import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AllService } from '../all.service';
import { CategoryService } from '../category.service';
import { Category } from '../models/Category';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

 
  ngOnInit(): void {
    
    this.myRecipe=new FormGroup({
      "CodeRecipe":new FormControl("",Validators.compose([Validators.required,Validators.pattern('[0-9]*')])),
      "NameRecipe":new FormControl("",Validators.required),
      "CodeCategory":new FormControl(""),
      "Time":new FormControl("",Validators.compose([Validators.required,Validators.pattern('[0-9]*')])),
      "LevelOfDifficul":new FormControl("",Validators.compose([Validators.required,Validators.pattern('[1-5]')])),
      "DateAddRecipe":new FormControl("",Validators.required),
      "ListComponent":new FormControl("",Validators.required),
      "PrepartionM":new FormControl("",Validators.required),
      "CodeUser":new FormControl("",Validators.compose([Validators.required,Validators.pattern('[0-9]*')])),
      "Image":new FormControl("")
     
    })
   
    } 
    listC:string[]=[""];
    listP:string[]=[""];
    arrP:string[]=[""];
    arrL:string[]=[""];
    ArrC:Category[];
    myRecipe:FormGroup;
constructor(public allC:CategoryService, private AllS:AllService,private routerR:Router) { 
  
  this.allC.AllC().subscribe(s=>{this.ArrC=s;console.log(s)},e=>{console.log(e)});
} 
add(){
  this.arrP=this.arrP.filter(item=>item!="");
  this.arrL=this.arrL.filter(item=>item!="");
  const Form={...this.myRecipe.value};
  Form["ListComponent"]=[...this.arrL];
  Form["PrepartionM"]=[...this.arrP];

  
this.AllS.add(Form).subscribe(s=>{if(s==1){alert("שגיאה בהכנסת מתכון!")}
if(s==0){this.sweet(),this.routerR.navigate(["allRecipe"])}},e=>{console.log(e)})

}
sweet(){
  let timerInterval
  Swal.fire({
    title: 'המתכון מתווסף כעת !',
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      timerInterval = setInterval(() => {
        const content = Swal.getContent()
        if (content) {
          const b = content.querySelector('b')
          // if (b) {
          //   b.textContent = Swal.getTimerLeft()
          // }
        }
      }, 100)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      console.log('I was closed by the timer')
    }
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
}
