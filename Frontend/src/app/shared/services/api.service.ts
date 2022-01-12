import { Injectable } from '@angular/core';
import {environment as env} from '../../../environments/environment'
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { EMPTY, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  base_url = env.base_url;
  
  constructor(private http:HttpClient,) { }
  post(endpoint,req:any)
  {
    let param = new HttpParams();
    param = req;
    return this.http.post(this.base_url+endpoint,param).pipe(
      // retry(1),
      catchError(this.errorHandl)
    );
  }
  get(endpoint)
  {
    return this.http.get(this.base_url+endpoint);
  }

  delete(endpoint)
  {
    return this.http.delete(this.base_url+endpoint);
  }

  put(endpoint,req:any)
  {
    let param = new HttpParams();
    param = req;
    return this.http.put(this.base_url+endpoint,param)
  }
  patch(endpoint,req:any)
  {
    let param = new HttpParams();
    param = req;
    return this.http.patch(this.base_url+endpoint,param)
  }
  fetch(endpoint,req:any)
  {
    let param = new HttpParams();
    param = req;
    return this.http.put(this.base_url+endpoint,param)
  }
  
  // Error handling
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      
      // Get client-side error
      errorMessage = error.error.message;
    } else {

      // Get server-side error
      errorMessage = error;
      if (error.status === 401) {
        // localStorage.clear();       
      }
    }
    console.log('errorMessage',errorMessage);
    return throwError(errorMessage);
  }

}
