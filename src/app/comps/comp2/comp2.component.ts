import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {

  comp2userName:string= '';
  
  constructor(private _designUtility: DesignUtilityService){

    this._designUtility.userName.subscribe(res=>{
      this.comp2userName = res
    })

  }

  onChange(uname:any){
    console.log(uname.value)

    this._designUtility.userName.next(uname.value)
  }

}
