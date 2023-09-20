import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AccordionModule } from 'primeng/accordion';
import { TabMenuModule } from 'primeng/tabmenu';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    AccordionModule,
    TabMenuModule
  ],
  exports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    AccordionModule,
    TabMenuModule
  ]
})
export class SharedModule { }
