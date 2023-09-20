import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'attributes', loadChildren: () => import('./Component/attributes/attributes.module').then(m => m.AttributesModule) }, 
  { path: 'categories', loadChildren: () => import('./Component/categories/categories.module').then(m => m.CategoriesModule) }, 
  { path: 'products', loadChildren: () => import('./Component/products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }