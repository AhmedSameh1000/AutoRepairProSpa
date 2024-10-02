import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-mange-customer',
  templateUrl: './mange-customer.component.html',
  styleUrls: ['./mange-customer.component.css'],
})
export class MangeCustomerComponent implements OnInit {
  constructor(
    private CustomerService: CustomerService,
    private Toaster: ToastrService,
    private MatDilogRef: MatDialogRef<MangeCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private translateService: TranslateService
  ) {}
  ngOnInit(): void {
    this.InitialzeFor();
    if (this.data) {
      this.FillCustomerData();
    }
  }
  CustomerForm: FormGroup;
  InitialzeFor() {
    this.CustomerForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      location: new FormControl(null, Validators.required),
      balance: new FormControl(null, Validators.required),
      isActive: new FormControl(false, Validators.required),
    });
  }
  FillCustomerData() {
    this.CustomerService.GetCustomerById(this.data).subscribe({
      next: (res: any) => {
        this.CustomerForm.setValue({
          fullName: res.fullName,
          phoneNumber: res.phoneNumber,
          location: res.location,
          balance: res.balance,
          isActive: res.isActive,
        });
      },
    });
  }
  CreateCustomer() {
    if (this.data) {
      this.CustomerService.UpdateCustomer(
        this.data,
        this.CustomerForm.value
      ).subscribe({
        next: (res) => {
          this.Toaster.success(
            this.translateService.instant('Customer Updated Successfuly')
          );
          this.MatDilogRef.close(true);
        },
      });
    } else {
      this.CustomerService.CreateCustomer(this.CustomerForm.value).subscribe({
        next: (res) => {
          this.Toaster.success(
            this.translateService.instant('Customer Created Successfuly')
          );
          this.MatDilogRef.close(true);
        },
      });
    }
  }
}
