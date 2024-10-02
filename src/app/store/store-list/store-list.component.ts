import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { MangeStoreComponent } from '../mange-store/mange-store.component';
import { StoreService } from 'src/app/Services/store.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css'],
})
export class StoreListComponent {
  constructor(
    private StoreService: StoreService,
    private dilog: MatDialog,
    private ToasterService: ToastrService,
    private TranslateService: TranslateService,
    public AuthService: AuthService
  ) {}
  ngOnInit(): void {
    this.GetStores();
  }
  Lang = localStorage.getItem('lang');

  Stores: any;
  GetStores() {
    this.StoreService.GetStores().subscribe({
      next: (res) => {
        this.Stores = res;
      },
    });
  }

  ShowDilog() {
    var DilogAfterClose = this.dilog.open(MangeStoreComponent, {
      disableClose: true,
    });
    DilogAfterClose.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.GetStores();
        }
      },
    });
  }
  OpenDilogForEdit(id) {
    var DilogAfterClose = this.dilog.open(MangeStoreComponent, {
      data: id,
      disableClose: true,
    });
    DilogAfterClose.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.GetStores();
        }
      },
    });
  }
  DeleteStore(id) {
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
        this.StoreService.DeleteStore(id).subscribe({
          next: (res) => {
            this.ToasterService.success(
              this.TranslateService.instant('Store Deleted Successfully')
            );
            this.GetStores();
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
