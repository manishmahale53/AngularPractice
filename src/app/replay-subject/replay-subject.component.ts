import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../service/design-utility.service';
import { Subscription } from 'rxjs';
import {interval, Observable} from 'rxjs';
@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.css']
})
export class ReplaySubjectComponent implements OnInit{

  // List data
  user1List=[
    'Angular 1',
    'Angular 2'
  ];
  user2List:string[]=[];
  user3List:string[]=[];

  // subscribe modes
  subMode2:boolean = false;
  subMode3:boolean = false;

  // Subscriptions
  subscription2!: Subscription;
  subscription3!: Subscription;

  //Toggle Properties
  methodInterval: boolean = false;

  // Interval Unsubscribe
  IntSubscription! : Subscription
  

  constructor(private _du:DesignUtilityService){
    
  }

  ngOnInit(): void {

    this._du.videoEmmit.subscribe(res=>{
      console.log(res)

      this.user1List.push(res)
    })
    
  }

  // video add method
  onVideoAdd(video:any){

    //console.log(video.value)

    this._du.videoEmmit.next(video.value)

  }

  // user 2 subscribe button
  user2subscribe(){

    if(this.subMode2){
      this.subscription2.unsubscribe();

    }else{

      this.subscription2 = this._du.videoEmmit.subscribe(res=>{
        this.user2List.push(res);
     })
    }
    
    this.subMode2 = !this.subMode2;  // if one is left side is true then other would be false & vice versa
  }

  // user 3 subscribe button
  user3subscribe(){

    if(this.subMode3){

      this.subscription3.unsubscribe();

    }else{

      this.subscription3 = this._du.videoEmmit.subscribe(res=>{
        this.user3List.push(res);
      })
    }
    
    this.subMode3 = !this.subMode3;
  }

  // Toggle Method
  toggleMethod(){

    const broadCastVideo:Observable<number> = interval(1000);

    if(!this.methodInterval){ 

     this.IntSubscription = broadCastVideo.subscribe(res=>{
        this._du.videoEmmit.next('video '+ res)
       })

    }else{

      this.IntSubscription.unsubscribe()
       
    }

    this.methodInterval = !this.methodInterval;

  }

}
