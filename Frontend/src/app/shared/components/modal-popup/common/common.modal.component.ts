import { Component, OnInit,Input,ViewChild,EventEmitter,Output } from '@angular/core';
import {ModalDirective} from 'ngx-bootstrap/modal';

@Component({
  selector: 'common-modal-popup',
  templateUrl: './common.modal.component.html',
  styleUrls: ['./common.modal.component.scss']
})
export class CommonModalComponent implements OnInit {

  @ViewChild('commonModal') commonModal:ModalDirective;
  @Input()  title:string ='Confirmation';
  @Input()  bodyText:string='This is comman modal text body.';
  @Input()  confirmBtnText:string='Okay';
  @Input()  cancelBtnText:string='Close';
  @Input()  contentIsHTML:boolean=false;
  @Output() onConfirm:EventEmitter<string> =new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  show()
  {
     this.commonModal.show();
  }
  hide()
  {
     this.commonModal.hide();
  }

  onConfirmation()
  {
    this.onConfirm.emit();
    this.hide();
  }


}
