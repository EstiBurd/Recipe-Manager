import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';
import { UserService } from '../user.service';
import {ActivatedRoute, Router} from '@angular/router';
import { CompareP } from '../models/CompareP';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  myForm:FormGroup;
ngOnInit(): void {

  
  let name=this.userS.name;
console.log(name)
  this.myForm=new FormGroup({
    "CodeUser":new FormControl("",Validators.required),
    "NameUser":new FormControl(name),
    "Address":new FormControl(""),
    "Email":new FormControl("",Validators.compose([Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'),Validators.required])),
    "Password":new FormControl("",Validators.required),
    "Password1":new FormControl("",Validators.required)
    
  }
,CompareP.compare("Password","Password1"));
}
  
  
  constructor(private userS:UserService,private router:Router,private acttiveRoute:ActivatedRoute) { }
  save(){
    //var NUser=new User(this.myForm.value.CodeU,this.myForm.value.NameU,this.myForm.value.Adress,this.myForm.value.Email,this.myForm.value.password);
    this.userS.register(this.myForm.value).subscribe
    (s=>{if(s==1){alert("משתמש קיים!")}
     if(s==0) {
      this.userS.getUserByCode(parseInt(this.myForm.value.CodeU)).subscribe(s => {
        console.log(s);
        sessionStorage.setItem("currentUser",JSON.stringify(s));         
        this.router.navigate(["allRecipe"])},e => { console.log(e) })
        }  
      } 
       ,e=>{console.log(e)})
  
    // this.myForm.reset();
   }
}

