import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
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
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { TreeSelectModule } from 'primeng/treeselect';

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
    MessageModule,
    InputTextareaModule,
    TreeSelectModule
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
    MessageModule,
    InputTextareaModule,
    TreeSelectModule
  ]
})
export class SharedModule { }
