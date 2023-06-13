import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {

  comp3userName: string = '';

  constructor(private _designUtility: DesignUtilityService){

    this._designUtility.userName.subscribe(res=>{

      this.comp3userName = res
    })

  }

  onChange(uname:any){
    console.log(uname.value)

    this._designUtility.userName.next(uname.value)
  }

}
