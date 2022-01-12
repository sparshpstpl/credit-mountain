import { Injectable } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { environment } from '.././../../src/environments/environment';
import { CONSOLE_LOGS } from './constant';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) { }

  handleApiResponse(response, isHide?) {
    return new Promise((resolve, reject) => {
      try {
        let code = response.code ? response.code : response.statusCode ? response.statusCode : 0;
        switch (code) {
          case 200:
          case 201:  
            !isHide && this.showSuccess('success', '', response.message);
            resolve(response.data);
            break;
          case 402:
          case 404:
          case 1002:
            this.showSuccess('error', '', response.message)
            reject();
            break;
          case 403:
            this.showSuccess('error', '', response.message)
            reject('403');
            break;
          default:
            let msg = response.message || 'Somthin went wrong'
            let title = code != 0 ? 'info' : 'error'
            !isHide && this.showSuccess(title, '', msg)
            response && response.data ? resolve(response.data) : response ? resolve(response) : reject();
            break;
        }
      } catch (e) {
        reject('error');
      }
    })
  }
 
  logger(message, code?) {
    if(environment.production) return;
    switch(code){
      case CONSOLE_LOGS.ERROR:
        console.error(message);
      break;
      case CONSOLE_LOGS.INFO:
        console.info(message);
        break;
      default:
          console.log(message);
      break;    
    }
  }
  
  // handleApiResponse(response, isHide?) {
  //   return new Promise((resolve, reject) => {
  //     try {
  //       let code = response.code || 0;
  //       resolve(response);
  //       switch (code) {
  //         case 200:
  //           !isHide && this.showSuccess('success', '', response.message);
  //           resolve(response.data);
  //           break;
  //         case 402:
  //           this.showSuccess('error', '', response.message)
  //           reject();
  //           break;
  //         case 403:
  //           this.showSuccess('error', '', response.message)
  //           reject('403');
  //           break;
  //         default:
  //           let msg = response.message || 'Somthin went wrong'
  //           let title = code != 0 ? 'info' : 'error'
  //           this.showSuccess(title, '', msg)
  //           reject();
  //           break;
  //       }
  //     } catch (e) {

  //     }
  //   })
  // }

  showSuccess(severity, summary, detail) {
    if(severity && detail) {
      this.messageService.add({ severity: severity, summary: summary, detail: detail });
    }
    
  }
}
