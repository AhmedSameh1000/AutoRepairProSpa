import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { CustomerService } from 'src/app/Services/customer.service';
import { TransactionService } from 'src/app/Services/transaction.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposit-withdraw-component',
  templateUrl: './deposit-withdraw-component.component.html',
  styleUrls: ['./deposit-withdraw-component.component.css'],
})
export class DepositWithdrawComponentComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { isDeposit: boolean },
    private CustomerService: CustomerService,
    private AuthService: AuthService,
    private TransactionService: TransactionService,
    private TransalteService: TranslateService,
    private ToasterService: ToastrService,
    private MatDilogRef: MatDialogRef<DepositWithdrawComponentComponent>
  ) {}
  ngOnInit(): void {
    console.log(this.data);
    this.LoadCustomers();
  }
  Customers: any;
  LoadCustomers() {
    this.CustomerService.GetCustomers().subscribe({
      next: (res) => {
        this.Customers = res;
        console.log(res);
      },
    });
  }
  CustomerBalance: any = 0;
  CustomerId: any;
  Amount: any;
  description: any;
  OnCustomerChange($event) {
    var UserInfo: string = $event.target.value;
    var UserInfoAsArray = UserInfo.split(',');
    this.CustomerBalance = UserInfoAsArray[1];
    this.CustomerId = UserInfoAsArray[0];
    console.log();
  }
  SaveTransaction() {
    var transaction = {
      customerId: this.CustomerId,
      description: this.description,
      AppUserId: this.AuthService.GetUserId(),
      Amount: this.Amount,
    };
    if (!this.Amount) {
      return;
    }
    if (!this.description) {
      return;
    }
    if (!this.CustomerId) {
      return;
    }
    if (this.data.isDeposit) {
      this.TransactionService.Deposit(transaction).subscribe({
        next: (res) => {
          this.ToasterService.success(
            this.TransalteService.instant('Transaction Done Successful')
          );
          this.MatDilogRef.close(true);
        },
        error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: this.TransalteService.instant('Something went wrong'),
          });
        },
      });
    } else {
      this.TransactionService.WithDraw(transaction).subscribe({
        next: (res) => {
          console.log(res);
          this.TransalteService.instant('Transaction Done Successful');
          this.MatDilogRef.close(true);
        },
        error: (err) => {
          var Message = err.error.message;
          if (Message) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: this.TransalteService.instant(Message),
            });
          }
        },
      });
    }
  }
}
