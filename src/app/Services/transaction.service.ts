import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private HttpClient: HttpClient) {}

  GetTransactions() {
    return this.HttpClient.get(
      environment.BaseUrl + '/CustomerTransaction/GetTransactions'
    );
  }
  Deposit(transaction) {
    return this.HttpClient.post(
      environment.BaseUrl + '/CustomerTransaction/Deposit',
      transaction
    );
  }
  WithDraw(transaction) {
    return this.HttpClient.post(
      environment.BaseUrl + '/CustomerTransaction/Withdraw',
      transaction
    );
  }
}
