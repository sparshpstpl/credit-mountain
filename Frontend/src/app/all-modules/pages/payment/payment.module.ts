import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../../../shared/shared.module';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';


@NgModule({
  declarations: [
    HomeComponent,
    PaymentDetailComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule,
    SharedModule
  ]
})
export class PaymentModule { }
