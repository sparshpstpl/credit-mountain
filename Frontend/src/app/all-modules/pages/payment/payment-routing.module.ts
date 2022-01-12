import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent
},
{
  path:'detail/:paymentId',
  component: PaymentDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
