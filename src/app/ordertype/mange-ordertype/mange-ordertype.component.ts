import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { OrdertypeService } from 'src/app/Services/ordertype.service';

@Component({
  selector: 'app-mange-ordertype',
  templateUrl: './mange-ordertype.component.html',
  styleUrls: ['./mange-ordertype.component.css'],
})
export class MangeOrdertypeComponent {
  constructor(
    private OrderTypeService: OrdertypeService,
    private Toaster: ToastrService,
    private MatDilogRef: MatDialogRef<MangeOrdertypeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private TranslateService: TranslateService
  ) {}
  ngOnInit(): void {
    this.InitialzeFor();
    if (this.data) {
      this.FillOrderTypeData();
    }
  }
  OrderTypeForm: FormGroup;
  InitialzeFor() {
    this.OrderTypeForm = new FormGroup({
      Name: new FormControl(null, Validators.required),
      isActive: new FormControl(false, Validators.required),
    });
  }
  FillOrderTypeData() {
    this.OrderTypeService.GetOrderTypeById(this.data).subscribe({
      next: (res: any) => {
        this.OrderTypeForm.setValue({
          Name: res.name,
          isActive: res.isActive,
        });
      },
    });
  }
  CreateOrderType() {
    if (this.data) {
      this.OrderTypeService.UpdateOrderType(
        this.data,
        this.OrderTypeForm.value
      ).subscribe({
        next: (res) => {
          this.Toaster.success(
            this.TranslateService.instant('OrderType Updated Successfuly')
          );
          this.MatDilogRef.close(true);
        },
      });
    } else {
      this.OrderTypeService.CreateOrderType(this.OrderTypeForm.value).subscribe(
        {
          next: (res) => {
            this.Toaster.success(
              this.TranslateService.instant('OrderType Created Successfuly')
            );
            this.MatDilogRef.close(true);
          },
        }
      );
    }
  }
}
