import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submited:boolean;
  registerForm:FormGroup;
  errMsg='';
  constructor(private fb:FormBuilder,private auth:AuthService,private commonService: CommonService,) { }
  
  ngOnInit(): void {
    const pattern = "/^[0-9]*$/";
    this.registerForm = this.fb.group({
      fullName:[''],
      email:['',[Validators.required,Validators.email]],
      phone:['',[Validators.required]],
      password:['',],
      confirmPass:['']
    })
  }

  ConfirmPassErr='';
  submit()
  {
    this.submited = true;
    this.ConfirmPassErr='';
    this.errMsg='';
    if(!this.registerForm.valid)
    {
      this.registerForm.markAllAsTouched();
      return false;
    }

    // validate confirm pasword
    if(this.registerForm.get('password').value !=this.registerForm.get('confirmPass').value)
    {
      this.ConfirmPassErr = "Password and confirm password should be same."
      return false;
    }
    this.auth.register(this.registerForm.value).subscribe((res:any)=>{
      console.log(res);
    },(error)=>{
      let eventErr = error?.error;
           this.commonService.logger(' loginErr',eventErr);
           let msg = eventErr && eventErr.message;
           this.commonService.showSuccess('error','',msg);
    })
  }

  get getControls() {
    return this.registerForm.controls;
  }
  public findInvalidControls() {
    const invalid = [];
    const controls = this.registerForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
}

}
