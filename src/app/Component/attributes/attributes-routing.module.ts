import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttributeListComponent } from './attributes/attribute-list/attribute-list.component';
import { AttributeCreateComponent } from './attributes/attribute-create/attribute-create.component';
import { AttributeUpdateComponent } from './attributes/attribute-update/attribute-update.component';
import { AttributeDeleteComponent } from './attributes/attribute-delete/attribute-delete.component';
import { AttributesComponent } from './attributes.component';

const routes: Routes = [
  { path: 'list', component: AttributeListComponent },
  { path: 'create', component: AttributeCreateComponent },
  { path: 'update/:id', component: AttributeUpdateComponent },
  { path: 'delete/:id', component: AttributeDeleteComponent },
  {path:'Home',component:AttributesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttributesRoutingModule {}
