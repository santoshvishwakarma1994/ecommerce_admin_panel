import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductService } from 'src/app/Service/products/product.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { MessageService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  providers:[ProductService,MessageService],
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule,SharedModule,FormsModule,ProductsRoutingModule],

})
export class ProductsModule { }
