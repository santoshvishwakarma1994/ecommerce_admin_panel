import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductService } from './Service/products/product.service';
import { CategoryService } from './Service/categories/category.service';
import { AttributeService } from './Service/attributes/attribute.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { MultiSelectModule } from 'primeng/multiselect';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MultiSelectModule,
  ],
  providers: [CategoryService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
