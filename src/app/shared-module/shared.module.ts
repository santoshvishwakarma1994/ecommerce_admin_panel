import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { MultiSelectModule } from 'primeng/multiselect';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { TooltipModule } from 'primeng/tooltip';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { CardModule } from 'primeng/card';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    AccordionModule,
    TabMenuModule,
    DropdownModule,
    MultiSelectModule,
    TableModule,
    PaginatorModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DialogModule,
    DynamicDialogModule,
    TooltipModule,
    MessagesModule,
    ToastModule,
    CardModule,
    MessageModule
  ],
  exports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    AccordionModule,
    TabMenuModule,
    DropdownModule,
    MultiSelectModule,
    TableModule,
    PaginatorModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    DialogModule,
    DynamicDialogModule,
    TooltipModule,
    MessagesModule,
    ToastModule,
    CardModule,
    MessageModule
  ]
})
export class SharedModule { }
