import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/User';
import Swal from 'sweetalert2'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Forml:FormGroup;
  ngOnInit(): void {
this.Forml=new FormGroup({
"CodeUser":new FormControl(""),
"NameUser":new FormControl("",Validators.required),
"Password":new FormControl("",Validators.required,)
})
  }
constructor(private UserL:UserService,private routerL:Router) { }



send() {
  const name = this.Forml.value.NameU;
  this.UserL.All(this.Forml.value).subscribe(s => {
     if (s == 0) { this.sweet() }
    else
        if (s == 1) {
     this.UserL.getUserByCode(parseInt(this.Forml.value.CodeUser)).subscribe(s => {
        console.log(s);
        sessionStorage.setItem("currentUser",JSON.stringify(s));
       
        this.routerL.navigate(["allRecipe"]);
        }
         , e => { console.log(e) })
    }
    else if (s == 2) {
     this.UserL.name = name;
      this.routerL.navigate(["register"])

    }

  }, e => console.log(e));
} 
    

sweet(){
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: '! סיסמא שגויה ',

  })
}
isShow=true;
myFunction(pass) {
    
  if (pass.type === "password") {
   pass.type = "text";
  } else {
   pass.type = "password";
  }

 this.isShow=!this.isShow;
 
 
  
}
}

