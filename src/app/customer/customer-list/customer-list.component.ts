import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomerService } from 'src/app/Services/customer.service';
import { MangeCustomerComponent } from '../mange-customer/mange-customer.component';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  constructor(
    private CustomerService: CustomerService,
    private dilog: MatDialog,
    private ToasterService: ToastrService,
    private TranslateService: TranslateService,
    public AuthService: AuthService
  ) {}
  Lang = localStorage.getItem('lang');

  ngOnInit(): void {
    this.GetCustomers();
  }

  Customers: any;
  GetCustomers() {
    this.CustomerService.GetCustomers().subscribe({
      next: (res) => {
        this.Customers = res;
      },
    });
  }

  ShowDilog() {
    var DilogAfterClose = this.dilog.open(MangeCustomerComponent, {
      disableClose: true,
    });
    DilogAfterClose.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.GetCustomers();
        }
      },
    });
  }
  OpenDilogForEdit(id) {
    var DilogAfterClose = this.dilog.open(MangeCustomerComponent, {
      data: id,
      disableClose: true,
    });
    DilogAfterClose.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.GetCustomers();
        }
      },
    });
  }
  DeleteCustomer(id) {
    Swal.fire({
      title: this.TranslateService.instant('Are you sure?'),
      text: this.TranslateService.instant("You won't be able to revert this!"),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.TranslateService.instant('Yes, delete it'),
      cancelButtonText: this.TranslateService.instant('Cancel'),
    }).then((result) => {
      if (result.isConfirmed) {
        this.CustomerService.DeleteCustomer(id).subscribe({
          next: (res) => {
            this.ToasterService.success(
              this.TranslateService.instant('Customer Deleted Successfully')
            );
            this.GetCustomers();
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: this.TranslateService.instant('Something went wrong'),
            });
          },
        });
      }
    });
  }
}
