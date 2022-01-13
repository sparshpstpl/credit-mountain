import { Component, OnInit,ViewChild } from '@angular/core';
//import { AlertService } from '@shared/services';
//import { CommonModalComponent } from '@shared/components';
import { CommonService } from '../../../../services/common.service';
import { ApiService } from '../../../../shared/services/api.service';
import { Endpoints } from '../../../../config';
import { ConfirmationService, LazyLoadEvent } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @ViewChild('dt') dt; 
  //@ViewChild(CommonModalComponent) commonModal:CommonModalComponent
  constructor(private commonService: CommonService,
    private confirmationService: ConfirmationService,
   private apiService: ApiService , private router : Router ) { }
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
   this.getUserlists();
  }
  delete(id)
  {
  //  this.commonModal.show();
  }

  confirmDelete()
  {
    // perform your action on confirm from the confirmation popup. 
      
      /*-------->action<-------*/ 

    // hide modal after successfully delete
  //  this.commonModal.hide();
  }
  inviteUserObj ={fullName:'', email:''}
  getUserlists(){
 

    //  console.log("users", this.users)
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


  loadUser(event: LazyLoadEvent) {  
    console.log(event.first)
    this.apiService.get(`${Endpoints.userList}`).subscribe(async(response:any)=>{
      this.commonService.handleApiResponse(response,true).then((res:any)=>{
        console.log(res);
        this.users = res?.users?.rows;
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
    this.inviteUserObj ={fullName:'', email:''};
  }
  deleteUser(val) {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete selected user (${val.fullName}) ?`,
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.apiService.delete(`${Endpoints.userList}/${val.id}`).subscribe(async(response:any)=>{
          this.commonService.handleApiResponse(response,true).then((res:any)=>{
            this.getUserlists();
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
      }})
  }
  updateUser() {
    let userObj = {fullName: this.userObj.fullName};
    this.apiService.put(`${Endpoints.userList}/${this.userObj.id}`, userObj).subscribe(async(response:any)=>{
      this.commonService.handleApiResponse(response,true).then((res:any)=>{
        console.log(res);
        this.getUserlists();
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

  InviteUser() {
    let userObj = {fullName: this.inviteUserObj.fullName, email: this.inviteUserObj.email};
    this.apiService.post(`${Endpoints.inviteUser}`, userObj).subscribe(async(response:any)=>{
      this.commonService.handleApiResponse(response,true).then((res:any)=>{
        console.log(res);
        this.getUserlists();
        this.inviteDialogOpen = false;
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
    this.getUserlists();
  }
  onRowSelect(event){
    console.log('row select = ',event);
   this.router.navigate([`/users/userDetails/${event.id}`]);
  }
}