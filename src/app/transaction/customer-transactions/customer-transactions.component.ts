import { Dialog } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/Services/transaction.service';
import { DepositWithdrawComponentComponent } from '../deposit-withdraw-component/deposit-withdraw-component.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-customer-transactions',
  templateUrl: './customer-transactions.component.html',
  styleUrls: ['./customer-transactions.component.css'],
})
export class CustomerTransactionsComponent implements OnInit {
  constructor(
    private TransactionService: TransactionService,
    private Matdilog: MatDialog
  ) {}
  ngOnInit(): void {
    this.GetTransactions();
  }
  Lang = localStorage.getItem('lang');
  Transactions: any;
  GetTransactions() {
    this.TransactionService.GetTransactions().subscribe({
      next: (res) => {
        this.Transactions = res;
        console.log(res);
      },
    });
  }
  OpenDepositWithDrawComponent(isDeposit) {
    var Dilog = this.Matdilog.open(DepositWithdrawComponentComponent, {
      data: {
        isDeposit: isDeposit,
      },
    });
    Dilog.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.GetTransactions();
        }
      },
    });
  }
}
