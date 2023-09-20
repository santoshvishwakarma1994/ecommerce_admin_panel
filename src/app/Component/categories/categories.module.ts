import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { CategoryService } from 'src/app/Service/categories/category.service';

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryUpdateComponent,
    CategoryDeleteComponent
  ],
  providers:[CategoryService],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class CategoriesModule { }
