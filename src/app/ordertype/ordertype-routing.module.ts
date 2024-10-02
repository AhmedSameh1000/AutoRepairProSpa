import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdertypeListComponent } from './ordertype-list/ordertype-list.component';
import { authGuard } from '../Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: OrdertypeListComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdertypeRoutingModule {}
