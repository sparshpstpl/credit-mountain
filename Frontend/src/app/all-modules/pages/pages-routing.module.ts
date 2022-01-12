import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from '../../containers';
import { AuthGuard } from '../../guard/auth.guard';
import { PagesComponent } from './pages.component';
import {LogoutComponent} from './logout/logout.component'

const routes: Routes = [
  {path:'logout',component:LogoutComponent},
  {path:'',component:PagesComponent,children:[
    {path:'',loadChildren:()=>import("../../../app/views/chartjs/chartjs.module").then((m)=>m.ChartJSModule),data:{'title':'Chart'}},
    {path:'users',loadChildren:()=>import("./users/users.module").then((m)=>m.UsersModule),data:{'title':'Users'}},
    {path:'payments',loadChildren:()=>import("./payment/payment.module").then((m)=>m.PaymentModule),data:{'title':'Payment'}},
  ],canActivateChild:[AuthGuard],data:{'title':'Home'}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
