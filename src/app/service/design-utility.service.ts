import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  userName = new BehaviorSubject<string>('Manish')

  videoEmmit = new ReplaySubject<string>(3, 5000);

  constructor() { }
}
