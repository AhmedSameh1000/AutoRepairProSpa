import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { MangeOrdertypeComponent } from '../mange-ordertype/mange-ordertype.component';
import { OrdertypeService } from 'src/app/Services/ordertype.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-ordertype-list',
  templateUrl: './ordertype-list.component.html',
  styleUrls: ['./ordertype-list.component.css'],
})
export class OrdertypeListComponent {
  constructor(
    private OrderTypeService: OrdertypeService,
    private dilog: MatDialog,
    private ToasterService: ToastrService,
    private TranslateService: TranslateService,
    public AuthSerVice: AuthService
  ) {}
  ngOnInit(): void {
    this.GetOrderTypes();
  }

  OrderTypes: any;
  GetOrderTypes() {
    this.OrderTypeService.GetOrderTypes().subscribe({
      next: (res) => {
        this.OrderTypes = res;
      },
    });
  }

  ShowDilog() {
    var DilogAfterClose = this.dilog.open(MangeOrdertypeComponent, {
      disableClose: true,
    });
    DilogAfterClose.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.GetOrderTypes();
        }
      },
    });
  }
  OpenDilogForEdit(id) {
    var DilogAfterClose = this.dilog.open(MangeOrdertypeComponent, {
      data: id,
      disableClose: true,
    });
    DilogAfterClose.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.GetOrderTypes();
        }
      },
    });
  }
  DeleteOrderType(id) {
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
        this.OrderTypeService.DeleteOrderType(id).subscribe({
          next: (res) => {
            this.ToasterService.success(
              this.TranslateService.instant('OrderType Deleted Successfully')
            );
            this.GetOrderTypes();
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
  Lang = localStorage.getItem('lang');
}
