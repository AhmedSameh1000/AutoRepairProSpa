import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrderService } from 'src/app/Services/order.service';
import { MangeOrderComponent } from '../mange-order/mange-order.component';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { MangePartsComponent } from '../mange-parts/mange-parts.component';
import { ImageService } from 'src/app/Services/image.service';
import { PlacedOrderComponent } from '../placed-order/placed-order.component';
import { OrderDisplayComponent } from '../order-display/order-display.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  constructor(
    private OrderService: OrderService,
    private Dilog: MatDialog,
    private Toaster: ToastrService,
    private ImagesService: ImageService,
    private TranslateService: TranslateService
  ) {}
  Lang = localStorage.getItem('lang');
  ngOnInit(): void {
    this.GetAllOrders();
  }
  Orders: any;
  GetAllOrders() {
    this.OrderService.GetOrders(null).subscribe({
      next: (res) => {
        console.log(res);
        this.Orders = res;
      },
    });
  }
  OpenDilogForEdit(id) {
    var afterClosed = this.Dilog.open(MangeOrderComponent, {
      disableClose: true,
      data: id,
    });
    afterClosed.afterClosed().subscribe({
      next: (res) => {
        this.GetAllOrders();
      },
    });
  }
  DeleteOrder(id) {
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
        this.OrderService.DeleteOrder(id).subscribe({
          next: (res) => {
            this.Toaster.success(
              this.TranslateService.instant('Order Deleted Successfully')
            );
            this.GetAllOrders();
          },
        });
      }
    });
  }
  ShowDilog() {
    var AfterDilog = this.Dilog.open(MangeOrderComponent, {
      disableClose: true,
    });
    AfterDilog.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.GetAllOrders();
        }
      },
    });
  }
  OnSearch(query) {
    this.OrderService.GetOrders(query).subscribe({
      next: (res) => {
        this.Orders = res;
      },
    });
  }
  OpenDilogForParts(OrderId, customerId) {
    var afterClosed = this.Dilog.open(MangePartsComponent, {
      data: {
        OrderId: OrderId,
        customerId: customerId,
      },
    });
    afterClosed.afterClosed().subscribe({
      next: (res) => {
        this.GetAllOrders();
      },
    });
  }
  OnFileChange(event, OrderId) {
    const formData = new FormData();

    const files = event.target.files as FileList;
    console.log(files);
    if (files.length > 4) {
      this.Toaster.error(
        this.TranslateService.instant(
          'You are not allowed to upload more than 4 images.'
        )
      );
      return;
    }
    for (let i = 0; i < files.length; i++) {
      formData.append('formFiles', files[i], files[i].name);
    }
    formData.append('orderId', OrderId);
    formData.append('IsReceiving', String(false));
    this.ImagesService.BulkImport(formData).subscribe({
      next: (res) => {
        this.GetAllOrders();
        this.Toaster.success(
          this.TranslateService.instant('Images Delivered Successfuly')
        );
      },
    });
  }
  PlacedthisOrder(orderId) {
    var afterClosed = this.Dilog.open(PlacedOrderComponent, {
      data: orderId,
    });
    afterClosed.afterClosed().subscribe({
      next: (res) => {
        this.GetAllOrders();
      },
    });
  }

  DisplayOrder(id) {
    this.Dilog.open(OrderDisplayComponent, {
      data: {
        id: id,
        isUpdatable: false,
      },
    });
  }
}
