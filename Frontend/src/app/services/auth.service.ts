import { Injectable } from '@angular/core';
import { Endpoints } from './../config';
import { Router } from '@angular/router';
import { ApiService } from '../shared/services';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint = Endpoints; // fetch all endpoints
  headers:any

  constructor(private route:Router,private api:ApiService){ }
  
  // register user to server 
  register(data)
  {
    return this.api.post(this.endpoint.register,data)
  }

  // authenticate user to server 
  signIn(data)
  {
    return this.api.post(this.endpoint.login,data)
  }
  
  // logout and clear login user session
  logout() 
  {
    localStorage.removeItem('authtoken');
    this.route.navigate(['/auth/login']);
  }

  // set user session on login or refresh session
  setToken(token)
  {
    localStorage.setItem('token', token);
  }

  // fetch login user token for authenticate api
  getToken()
  { 
    var token = localStorage.getItem('token');
    if(token)
    {
       return token;
    }
    
    return null;
  }

  // set login user token in api request for authenticate api
  /* setHeader(method='')
  {
    let token = this.getToken();
    if(token)
    {
      this.headers = new HttpHeaders({'Content-Type': 'application/json','Authorization':'Bearer '+token});
    }
    else{
      this.headers = new HttpHeaders({'Content-Type': 'application/json'});
    }
  } */
  setHeader(ContentType='application/json')
  {
    let token = this.getToken();
    if(token)
    {
      let obj = {'Content-Type': ContentType,'token':token};
      if(ContentType !== 'application/json') {
        delete obj['Content-Type'];
        // delete obj['x-api-token'];
      }
      this.headers = new HttpHeaders(obj);
    }
    else{
      this.headers = new HttpHeaders({'Content-Type': ContentType});
    }
    return this.headers;
  }


  // check user is loggedInOr not
  checkLogin()
  {
    let token = this.getToken();
    return (token)?true:false;
  }
  
}
