import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Import 3rd party components
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import {InputSwitchModule} from 'primeng-lts/inputswitch';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// import components
import { CommonModalComponent } from './components';
import { RippleModule } from 'primeng/ripple';
import {StepsModule} from 'primeng/steps';
import {TabViewModule} from 'primeng/tabview';
import {DividerModule} from 'primeng/divider';
import {CardModule} from 'primeng/card';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { NgxStripeModule } from 'ngx-stripe';



const comp = [CommonModalComponent, SpinnerOverlayComponent];
@NgModule({
  declarations: [...comp],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    OverlayModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
    PerfectScrollbarModule,
    ChartsModule,
    HttpClientModule,
    PaginationModule.forRoot(),
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ListboxModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    InputSwitchModule,
    RippleModule,
    StepsModule,
    TabViewModule,
    DividerModule,
    CardModule,
    NgxStripeModule.forRoot('pk_test_51KH7HMG0rXHtZEJGCXlbvRsKiCrBdSMtGAJExxY8P4NXZxiCyC6bhPycjClABeME509ZrzQOdguvmT7KVp96BbFB00RpGWgAYd')
  ],
  exports: [CommonModule,
    FormsModule, ReactiveFormsModule,
    TabsModule,
    TableModule,
    BsDropdownModule,
    PerfectScrollbarModule,
    ChartsModule,
    HttpClientModule,
    PaginationModule,
    CollapseModule,
    TooltipModule,
    ModalModule,
    ListboxModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    InputSwitchModule,
    RippleModule,
    StepsModule,
    TabViewModule,
    DividerModule,
    CardModule,
    NgxStripeModule,
    ...comp],
  providers: [MessageService, ConfirmationService]
})
export class SharedModule { }
