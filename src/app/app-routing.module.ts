import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeCreateComponent } from './Component/attributes/attributes/attribute-create/attribute-create.component';
import { AttributeUpdateComponent } from './Component/attributes/attributes/attribute-update/attribute-update.component';
import { AttributeDeleteComponent } from './Component/attributes/attributes/attribute-delete/attribute-delete.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'attributes/list' },
  {
    path: 'attributes/list',
    loadChildren: () =>
      import('./Component/attributes/attributes.module').then(
        (m) => m.AttributesModule
      ),
  },
  {
    path: 'attributes',
    loadChildren: () =>
      import('./Component/attributes/attributes.module').then(
        (m) => m.AttributesModule
      ),
  },

  { path: 'categories', loadChildren: () => import('./Component/categories/categories.module').then(m => m.CategoriesModule) }, 
  { path: 'products', loadChildren: () => import('./Component/products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
