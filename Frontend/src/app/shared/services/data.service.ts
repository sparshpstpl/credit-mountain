import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public userDetail = new BehaviorSubject(false);
  public redirectUrl = new BehaviorSubject('');
  constructor() { }
  
  getUserDetail() {
    return this.userDetail.asObservable();
  }

  setUserDetail(data: any) {
    this.userDetail.next(data);
  }

  getRedirectUrl() {
    return this.redirectUrl.asObservable();
  }

  setRedirectUrl(url: string) 
  {
    console.log(
      '🚀 ~ file: data.service.ts ~ line 40 ~ DataService ~ setRedirectUrl ~ url',
      url
    );
    this.redirectUrl.next(url);
  }
}
