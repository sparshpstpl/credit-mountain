import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Endpoints } from '../../../config';
import { AuthService } from '../../../services';
import { ApiService } from '../../../../app/shared/services/api.service';
import { CommonService } from '../../../../app/services/common.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submited:boolean;
  processing:boolean;
  loginForm:FormGroup;
  loginErr='';
  
  
  
  constructor(private fb:FormBuilder,private router:Router,private auth:AuthService,private apiService: ApiService,private commonService: CommonService) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]],
    })
  }

  submit()
  {
    this.processing= true;
    this.submited = true;
    this.loginErr='';
    if(!this.loginForm.valid)
    {
      this.processing =false;
      this.loginForm.markAllAsTouched();
      return false;
    }
    //this.auth.signIn(this.loginForm.value)
  this.apiService.post(`${Endpoints.login}`,this.loginForm.value).subscribe((response:any)=>{
    this.commonService.handleApiResponse(response,true).then((res:any)=>{
      this.processing =false;
      console.log(res)
      if(res.token)
      {
        this.auth.setToken(res.token);
        this.router.navigate(['/']);
      }
    }).catch(e=>{
      console.log("error", e)  
    })
      
    }
    ,(error)=>{
      let eventErr = error?.error;
           this.commonService.logger(' loginErr',eventErr);
           let msg = eventErr && eventErr.message;
           this.commonService.showSuccess('error','',msg);
    }
    )
 
  }

  get getControls() {
    return this.loginForm.controls;
  }
}
