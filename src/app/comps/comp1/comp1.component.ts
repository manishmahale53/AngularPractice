import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/service/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit{

  comp1userName:string= '';

  constructor(private _designUtility: DesignUtilityService){
    this._designUtility.userName.subscribe(res=>{
      this.comp1userName = res;
    })

  }

  ngOnInit(): void {
    
  }

  onChange(uname:any){
     console.log(uname.value)
     this._designUtility.userName.next(uname.value)
  }

}
