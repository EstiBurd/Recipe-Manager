import { FormGroup } from "@angular/forms";

export class CompareP{
    public static compare(control1:string,control2:string){
        return(fb:FormGroup)=>{
            let a=fb.controls[control1].value;
            let b=fb.controls[control2].value;
            if(a==b)
            return null;
            return{"confirmError":{massage:"! הסיסמאות אינן זהות"}}
        }
            }
}