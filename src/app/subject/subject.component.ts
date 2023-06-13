import { Component } from '@angular/core';
import { DesignUtilityService } from '../service/design-utility.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent {

  userName:string=""

  constructor(private _designUtility: DesignUtilityService){

     this._designUtility.userName.subscribe(res=>{
      this.userName = res
      
    })
  }

}
