import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Endpoints } from '../../../../config';
import { CommonService } from '../../../../services/common.service';
import { ApiService } from '../../../../shared/services';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  userDets: any;
  eventId: any;
  blockChainId: any;
  search:boolean =false;
  constructor(private commonService: CommonService,private messageService: MessageService, private apiService: ApiService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.eventId = this.route.snapshot.paramMap.get('eventId');
    this.getUserDetails(this.eventId);
  }


  getUserDetails(val){
    this.apiService.get(Endpoints.getUserDetails+val).subscribe(async(response:any)=>{
      this.commonService.handleApiResponse(response,true).then((res:any)=>{
      //  console.log('eventDets =',res);
      console.log('eventDets',res)
      this.blockChainId=res?.blockchainAddress;
          this.userDets = res?.users;
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



}
