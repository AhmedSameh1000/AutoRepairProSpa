import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { MangeOrderComponent } from './mange-order/mange-order.component';
import { SharedModule } from '../Shared/shared.module';
import { MangePartsComponent } from './mange-parts/mange-parts.component';
import { PlacedOrderComponent } from './placed-order/placed-order.component';
import { GalaryComponent } from '../Shared/galary/galary.component';
import { OrderDisplayComponent } from './order-display/order-display.component';

@NgModule({
  declarations: [
    OrderListComponent,
    MangeOrderComponent,
    MangePartsComponent,
    PlacedOrderComponent,
    OrderDisplayComponent,
  ],
  imports: [CommonModule, OrderRoutingModule, SharedModule],
})
export class OrderModule {}
