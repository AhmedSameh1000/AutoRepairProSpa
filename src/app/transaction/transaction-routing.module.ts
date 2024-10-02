import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerTransactionsComponent } from './customer-transactions/customer-transactions.component';
import { authGuard } from '../Guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: CustomerTransactionsComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionRoutingModule {}
