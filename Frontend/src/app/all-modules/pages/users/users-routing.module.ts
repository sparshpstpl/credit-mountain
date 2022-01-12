import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  {path:'',component:ListComponent, data:{'title':'Users List'}},
  {path:'list',component:ListComponent, data:{'title':'Users List'}},
  { path:'userDetails/:eventId', component:UserDetailsComponent, data:{'title':'User '}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
