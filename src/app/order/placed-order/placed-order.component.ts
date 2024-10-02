import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from 'src/app/Services/order.service';

@Component({
  selector: 'app-placed-order',
  templateUrl: './placed-order.component.html',
  styleUrls: ['./placed-order.component.css'],
})
export class PlacedOrderComponent implements OnInit {
  constructor(
    private OrderService: OrderService,
    @Inject(MAT_DIALOG_DATA) public data: { orderId: number },
    private MatdilogRef: MatDialogRef<PlacedOrderComponent>,
    private ToasterService: ToastrService,
    private translateService: TranslateService
  ) {}

  OrderDetails: any;
  CustomerBalance: number;
  partsCost: number;
  NetCost: number = 0;
  discount: number = 0;
  isCash: boolean = false;
  isCredit: boolean = false;
  cashAmount: number = 0;
  creditAmount: number = 0;

  ngOnInit(): void {
    this.GetOrderDetails();
    this.CalcNetCost();
  }

  GetOrderDetails() {
    this.OrderService.GetOrderDetails(this.data).subscribe({
      next: (res: any) => {
        console.log(res);
        this.OrderDetails = res;
        this.CustomerBalance = res.customerBalance;
        this.partsCost = res.partsCost;
        this.CalcNetCost();
      },
    });
  }
  //percentage
  // CalcNetCost() {
  //   let total = this.partsCost - this.CustomerBalance;
  //   if (this.discount > 100) {
  //     this.discount = 100;
  //   }
  //   if (this.discount > 0 && this.discount <= 100) {
  //     total = total - (total * this.discount) / 100;
  //   }

  //   this.NetCost = total >= 0 ? total : 0;
  // }

  CalcNetCost() {
    let total = this.partsCost - this.CustomerBalance;

    // Assuming discount is a fixed amount, not a percentage
    total = total - this.discount;

    this.NetCost = total >= 0 ? total : 0;
  }

  // onPaymentMethodChange(PaymentNumber) {
  //   // تأكد من عدم وجود قيم سالبة
  //   if (this.NetCost <= 0) {
  //     return;
  //   }
  //   if (PaymentNumber == 0) {
  //     // الدفع النقدي
  //     if (this.creditAmount == 0) {
  //       this.cashAmount = this.NetCost;
  //     } else {
  //       this.cashAmount = Math.max(this.NetCost - this.creditAmount, 0); // حماية من القيم السالبة
  //     }
  //   } else {
  //     // الدفع بالآجل
  //     if (this.cashAmount == 0) {
  //       this.creditAmount = this.NetCost;
  //     } else {
  //       this.creditAmount = Math.max(this.NetCost - this.cashAmount, 0); // حماية من القيم السالبة
  //     }
  //   }
  // }

  onPaymentMethodChange(checked, PaymentNumber) {
    if (this.NetCost <= 0) {
      return;
    }

    if (PaymentNumber == 0) {
      if (checked) {
        if (this.cashAmount > 0) {
          this.creditAmount = this.NetCost - this.cashAmount;
        } else {
          this.cashAmount = this.NetCost - this.creditAmount;
        }
      } else {
        this.cashAmount = 0;
        if (!this.isCredit) {
          this.creditAmount = 0;
        }
      }
    } else {
      if (checked) {
        if (this.creditAmount > 0) {
          this.cashAmount = this.NetCost - this.creditAmount;
        } else {
          this.creditAmount = this.NetCost - this.cashAmount;
        }
      } else {
        this.creditAmount = 0;
        if (!this.isCash) {
          this.cashAmount = 0;
        }
      }
    }
  }
  FinishOrder(id, isCashChecked, IsCreditCheck) {
    if (this.discount > 100) {
      this.ToasterService.error(
        this.translateService.instant('Discount cannot exceed 100')
      );
      return;
    }
    if (!isCashChecked && !IsCreditCheck) {
      if (this.CustomerBalance < this.partsCost && this.NetCost != 0) {
        this.ToasterService.error(
          this.translateService.instant('Please Choose Payment Type')
        );
        return;
      }
    }
    if (isCashChecked && IsCreditCheck) {
      this.ToasterService.error(
        this.translateService.instant(
          'You cannot select more than one payment method'
        )
      );

      return;
    }
    var obj = {
      OrderId: id,
      CashAmount: this.cashAmount,
      IsCashPaymentType: isCashChecked,
      discount: this.discount,
    };
    this.OrderService.placedOrder(obj).subscribe({
      next: (res) => {
        this.MatdilogRef.close();
        this.ToasterService.success(
          this.translateService.instant('Order Completed Successfully')
        );
      },
    });
  }
}
