import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './models/User';

//import { User } from './models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
name="";
  constructor(private Http:HttpClient) {

   }

  register(User:User){  
    console.log(User); 
  return this.Http.post<number>("https://localhost:44393/api/User/AddUser",User);
  
  }
  All(User:User){
    console.log(User)
    return this.Http.post<number>("https://localhost:44393/api/User/IsWorng",User)
}
  getUserByCode(CodeUser:number){
    return this.Http.get<User>("https://localhost:44393/api/User/GetUserById",{'params':{'code':CodeUser.toString()}});
  }
}
