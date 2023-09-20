import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryUpdateComponent } from './category/category-update/category-update.component';
import { CategoryDeleteComponent } from './category/category-delete/category-delete.component';

const routes: Routes = [
  { path: 'list', component: CategoryListComponent },
  { path: 'create', component: CategoryCreateComponent },
  { path: 'update/:id', component: CategoryUpdateComponent },
  { path: 'delete/:id', component: CategoryDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoriesRoutingModule { }
