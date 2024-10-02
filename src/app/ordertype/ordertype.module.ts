import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdertypeRoutingModule } from './ordertype-routing.module';
import { OrdertypeListComponent } from './ordertype-list/ordertype-list.component';
import { MangeOrdertypeComponent } from './mange-ordertype/mange-ordertype.component';
import { SharedModule } from '../Shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrdertypeListComponent, MangeOrdertypeComponent],
  imports: [
    CommonModule,
    OrdertypeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class OrdertypeModule {}
