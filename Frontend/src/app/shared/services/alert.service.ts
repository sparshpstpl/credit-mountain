import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';  
import { Subject } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  public DeleteOption = new Subject<any>();


  constructor() { }
  deletePopup(deleteID,apiUrl='',deleteMessage='',deleteStatus=false)
  {
    let message  = (deleteMessage)?deleteMessage:"Are you sure you want to delete this?";
    let deleteOption = {deleteId:deleteID,message:message,apiUrl:apiUrl}
    this.DeleteOption.next(deleteOption);
  }
  

}
