import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { ListComponent } from './list/list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {CardModule} from 'primeng/card';
import {DividerModule} from 'primeng/divider';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [ListComponent,  UserDetailsComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    CardModule,
    DividerModule,TableModule,FormsModule,ButtonModule,SharedModule
  ]
})
export class UsersModule { }
