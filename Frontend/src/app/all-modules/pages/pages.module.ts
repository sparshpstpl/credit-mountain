import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {AppAsideModule,AppBreadcrumbModule,AppHeaderModule,AppFooterModule,AppSidebarModule,
} from '@coreui/angular';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagesComponent } from './pages.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ApiRequestService } from '../../services/api-request.service';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule, 
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule.forRoot(),
    SharedModule
  ],
  providers:[ApiRequestService]
})
export class PagesModule { }
