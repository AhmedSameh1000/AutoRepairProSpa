import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionRoutingModule } from './transaction-routing.module';
import { CustomerTransactionsComponent } from './customer-transactions/customer-transactions.component';
import { SharedModule } from '../Shared/shared.module';
import { DepositWithdrawComponentComponent } from './deposit-withdraw-component/deposit-withdraw-component.component';

@NgModule({
  declarations: [CustomerTransactionsComponent, DepositWithdrawComponentComponent],
  imports: [CommonModule, TransactionRoutingModule, SharedModule],
})
export class TransactionModule {}
