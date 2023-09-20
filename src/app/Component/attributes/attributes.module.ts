import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributesRoutingModule } from './attributes-routing.module';
import { AttributeListComponent } from './attributes/attribute-list/attribute-list.component';
import { AttributeCreateComponent } from './attributes/attribute-create/attribute-create.component';
import { AttributeUpdateComponent } from './attributes/attribute-update/attribute-update.component';
import { AttributeDeleteComponent } from './attributes/attribute-delete/attribute-delete.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AttributeService } from 'src/app/Service/attributes/attribute.service';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AttributeListComponent,
    AttributeCreateComponent,
    AttributeUpdateComponent,
    AttributeDeleteComponent,
  ],
  providers:[AttributeService],
  imports: [CommonModule,HttpClientModule,ReactiveFormsModule,SharedModule,FormsModule, AttributesRoutingModule],
})
export class AttributesModule {}
