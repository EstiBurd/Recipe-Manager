import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hours'
})
export class HoursPipe implements PipeTransform {
  newHour:string="";

  transform(value:string): string {
    let newH:number=+value;
    if(newH>60){
      this.newHour=""+Math.floor(newH/60)+" שעות "+newH%60+" דקות ";
    }
    else if(newH<60){
       this.newHour=newH+" דקות ";
     }
    else if(newH==60){
      this.newHour=" שעה  ";
    }
    return this.newHour;
  }

}
