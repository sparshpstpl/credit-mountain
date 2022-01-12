//import { AlertService } from '@shared/services';
//import { CommonModalComponent } from '@shared/components';
import { CommonService } from '../../../../services/common.service';
import { ApiService } from '../../../../shared/services/api.service';
import { Endpoints } from '../../../../config';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('dt') dt; 
  cardError = '';
  nameError = '';
  loading;
  @ViewChild(StripeCardComponent) card: StripeCardComponent;

  cardOptions: StripeCardElementOptions = {
    hidePostalCode: true,
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };
  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };
  stripeFG: FormGroup;
  paymentFG: FormGroup;
  @Output() closeModal = new EventEmitter();
  //@ViewChild(CommonModalComponent) commonModal:CommonModalComponent
  constructor(private commonService: CommonService,
    private confirmationService: ConfirmationService,
    private fb: FormBuilder,
    private stripeService: StripeService,
   private apiService: ApiService , private router : Router ) {
    this.getPaymentlists();
   this.getUserlists();
   this.getPaymentOptions();
   }
//    users = [
//     {
//         "id": 14,
//         "fullName": "Rajesh Rathore",
//         "email": "rajesh@mailinator.com",
//         "password": "c37ba17f556eb47d5dbde91e7c51de69",
//         "cardId": "11234567890",
//         "type": "user",
//         "createdAt": "2022-01-11T12:21:06.034Z",
//         "updatedAt": "2022-01-11T12:32:32.187Z",
//         "deletedAt": null
//     },
//     {
//         "id": 13,
//         "fullName": "Demo User",
//         "email": "duser@mailinator.com",
//         "password": "92508d782610afd7518749d03adf0d8b",
//         "cardId": null,
//         "type": "user",
//         "createdAt": "2022-01-10T15:58:19.731Z",
//         "updatedAt": "2022-01-10T15:58:19.731Z",
//         "deletedAt": null
//     },
//     {
//         "id": 12,
//         "fullName": "Test User",
//         "email": "Test@mailinator.com",
//         "password": "5d5e6d0e9ff9d397d2edbf6f9a46a580",
//         "cardId": "1",
//         "type": "user",
//         "createdAt": "2022-01-10T15:56:49.499Z",
//         "updatedAt": "2022-01-10T15:56:49.500Z",
//         "deletedAt": null
//     },
//     {
//         "id": 7,
//         "fullName": "Demo User",
//         "email": "demo@mailinator.com",
//         "password": "f1b73bd95498828ea29f2ed4b095d4db",
//         "cardId": null,
//         "type": "user",
//         "createdAt": "2022-01-07T19:33:38.865Z",
//         "updatedAt": "2022-01-10T14:26:32.718Z",
//         "deletedAt": null
//     },
//     {
//         "id": 1,
//         "fullName": "MJSSSSSS",
//         "email": "mj@mailinator.com",
//         "password": "1665fc287b6ce9754181aec887088e79",
//         "cardId": "1234567890",
//         "type": "user",
//         "createdAt": "2022-01-05T09:04:43.000Z",
//         "updatedAt": "2022-01-11T09:34:29.143Z",
//         "deletedAt": null
//     }
// ];
users =[];   
name:any;
   email:any;
   phone:any
   pagination= {
    total:0,
    rows:10
   }
   selectedProducts;
  ngOnInit(): void {
   this.getPaymentlists();
   this.getUserlists();
   this.getPaymentOptions();
   this.stripeFG = this.fb.group({
    name: ['', [Validators.required]]
  });
  this.stripeFG.valueChanges.subscribe(valueChanges=>{
    console.log("value changes", valueChanges);
  },err=>console.error(err));
  this.paymentFG = this.fb.group({
    userId: ['', [Validators.required]],
    paymentType: ['', [Validators.required]],
    amount: ['',[Validators.required]],
    cardId: ['']
  })
  }
  delete(id)
  {
  //  this.commonModal.show();
  }
  isCardIdNotFound;
  getCardId() {
    let id = this.paymentFG.controls['userId'].value;
    let user = this.users.filter(item=>item.id==id);
    if(user[0].cardId) {
      this.isCardIdNotFound =false;
    }else {
      this.isCardIdNotFound =true;
    }
  }
  confirmDelete()
  {
    // perform your action on confirm from the confirmation popup. 
      
      /*-------->action<-------*/ 

    // hide modal after successfully delete
  //  this.commonModal.hide();
  }
  paymentList =[];
  getPaymentlists(){
 

    //  console.log("users", this.users)
     this.apiService.get(`${Endpoints.payments}`).subscribe(async(response:any)=>{
       this.commonService.handleApiResponse(response,true).then((res:any)=>{
         console.log(res);
         this.paymentList = res;
       }).catch(e=>{
         console.log("error", e)  
       })
       },(error)=>{
        let eventErr = error?.error;
             this.commonService.logger(' loginErr',eventErr);
             let msg = eventErr && eventErr.message;
             this.commonService.showSuccess('error','',msg);
      }
       )
   }


  loadPayment(event: LazyLoadEvent) {  
    console.log(event.first)
    this.apiService.get(`${Endpoints.payments}`).subscribe(async(response:any)=>{
      this.commonService.handleApiResponse(response,true).then((res:any)=>{
        console.log(res);
        this.paymentList = res;
        this.pagination.total = res?.users?.count;
      }).catch(e=>{
        console.log("error", e)  
      })
      },(error)=>{
        let eventErr = error?.error;
             this.commonService.logger(' loginErr',eventErr);
             let msg = eventErr && eventErr.message;
             this.commonService.showSuccess('error','',msg);
      }
      )
  }
  categoryHeader ='Edit User'
  userObj;
  editUserDialog;
  editUser(obj) {
    this.userObj = {...obj};
    this.editUserDialog= true;

  }
  inviteDialogOpen;
  openInviteDialog() {
    this.inviteDialogOpen = true;
    this.paymentFG.reset();
    this.isCardIdNotFound = false;
  }
  updateUser() {
    let userObj = {fullName: this.userObj.fullName};
    this.apiService.put(`${Endpoints.userList}/${this.userObj.id}`, userObj).subscribe(async(response:any)=>{
      this.commonService.handleApiResponse(response,true).then((res:any)=>{
        console.log(res);
        this.getPaymentlists();
        this.editUserDialog = false;
      }).catch(e=>{
        console.log("error", e)  
      })
      },(error)=>{
        let eventErr = error?.error;
             this.commonService.logger(' loginErr',eventErr);
             let msg = eventErr && eventErr.message;
             this.commonService.showSuccess('error','',msg);
      }
      )
  }


  filter(){
    this.getPaymentlists();
  }
  onRowSelect(event){
    console.log('row select = ',event);
   this.router.navigate([`payments/detail/${event.id}`]);
  }
  get getControls() {
    return this.paymentFG.controls;
  }
  getUserlists(){
     this.apiService.get(`${Endpoints.userList}`).subscribe(async(response:any)=>{
       this.commonService.handleApiResponse(response,true).then((res:any)=>{
         console.log(res);
         this.users = res?.users?.rows;
       }).catch(e=>{
         console.log("error", e)  
       })
       },(error)=>{
        let eventErr = error?.error;
             this.commonService.logger(' loginErr',eventErr);
             let msg = eventErr && eventErr.message;
             this.commonService.showSuccess('error','',msg);
      }
       )
   }

   getPaymentOptions(){
    this.apiService.get(`${Endpoints.paymentOptions}`).subscribe(async(response:any)=>{
      this.commonService.handleApiResponse(response,true).then((res:any)=>{
        console.log(res);
        this.paymentMethods = res;
      }).catch(e=>{
        console.log("error", e)  
      })
      },(error)=>{
       let eventErr = error?.error;
            this.commonService.logger(' loginErr',eventErr);
            let msg = eventErr && eventErr.message;
            this.commonService.showSuccess('error','',msg);
     }
      )
  }

   submitPayment(){
     if(this.paymentFG.invalid)
     {
      this.commonService.showSuccess('error', 'Error', 'Please enter required field')
      return;
     }
     
     let requestObj = {...this.paymentFG.value}
     let user = this.users.filter(item=>item.id==requestObj.userId);
    if(user[0].cardId) {
      requestObj.stripeToken = user[0].cardId;
    }else {
      requestObj.stripeToken = requestObj.cardId;
    }
    this.apiService.post(`${Endpoints.submitPayment}`, requestObj).subscribe(async(response:any)=>{
      this.commonService.handleApiResponse(response).then((res:any)=>{
        console.log(res);
        this.inviteDialogOpen = false;
        this.getPaymentlists();
        // this.users = res?.users?.rows;
      }).catch(e=>{
        console.log("error", e)  
      })
      },(error)=>{
       let eventErr = error?.error;
            this.commonService.logger(' loginErr',eventErr);
            let msg = eventErr && eventErr.message;
            this.commonService.showSuccess('error','',msg);
     }
      )
  }

   cardModel;
   paymentMethods = []
   addCard(): void {
    this.loading =true;
    this.cardError = '';
    this.nameError = '';
    let name: string = this.stripeFG.get('name').value;
    name = name.trim();

    if (name != '') {
      this.stripeService
        .createToken(this.card.element, { name })
        .subscribe((result) => {
          debugger;
          if (result.token) {
            // Use the token
            this.commonService.logger(result.token.id);
            let requestObj = { 'cardId': result.token.id };
            let obj = {...this.paymentFG.value};
            let findIndex = this.users.findIndex(item=>item.id==obj.userId);
            if(findIndex != -1) {
              this.users[findIndex].cardId = result.token.id;
              this.paymentFG.patchValue({cardId: result.token.id})
              this.isCardIdNotFound = false;
            }
            this.apiService.put(`${Endpoints.userList}/add-card/${obj.userId}`, requestObj)
              .subscribe((response: any) => {
                this.loading =false;
                this.cardModel =false;
                this.commonService.showSuccess('success', '', 'Card Added!')
              }, (error) => {
                this.loading =false;
                let eventErr = error?.error;
           this.commonService.logger(' loginErr',eventErr);
           let msg = eventErr && eventErr.message;
           this.commonService.showSuccess('error','',msg);
              })
          } else if (result.error) {
            this.loading =false;
            // Error creating the token
            this.cardError = result.error.message;
          }
        });
    } else {
      this.loading =false;
      this.nameError = "Please provide the cardholder name";
    }
  }

}
