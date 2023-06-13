import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  userName = new BehaviorSubject<string>('Manish')

  constructor() { }
}
