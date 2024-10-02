import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { MangeTechnicalComponent } from '../mange-technical/mange-technical.component';
import { TechnicalService } from 'src/app/Services/technical.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-technical-list',
  templateUrl: './technical-list.component.html',
  styleUrls: ['./technical-list.component.css'],
})
export class TechnicalListComponent {
  constructor(
    private TechnicalService: TechnicalService,
    private dilog: MatDialog,
    private ToasterService: ToastrService,
    private translate: TranslateService,
    public AuthService: AuthService
  ) {}
  ngOnInit(): void {
    this.GetTechnicals();
  }
  Lang = localStorage.getItem('lang');

  Technicals: any;
  GetTechnicals() {
    this.TechnicalService.GetTechnicals().subscribe({
      next: (res) => {
        this.Technicals = res;
      },
    });
  }

  ShowDilog() {
    var DilogAfterClose = this.dilog.open(MangeTechnicalComponent, {
      disableClose: true,
    });
    DilogAfterClose.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.GetTechnicals();
        }
      },
    });
  }
  OpenDilogForEdit(id) {
    var DilogAfterClose = this.dilog.open(MangeTechnicalComponent, {
      data: id,
      disableClose: true,
    });
    DilogAfterClose.afterClosed().subscribe({
      next: (res) => {
        if (res) {
          this.GetTechnicals();
        }
      },
    });
  }
  DeleteTechnical(id) {
    Swal.fire({
      title: this.translate.instant('Are you sure?'),
      text: this.translate.instant("You won't be able to revert this!"),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translate.instant('Yes, delete it'),
      cancelButtonText: this.translate.instant('Cancel'),
    }).then((result) => {
      if (result.isConfirmed) {
        this.TechnicalService.DeleteTechnical(id).subscribe({
          next: (res) => {
            this.ToasterService.success(
              this.translate.instant('Technical Deleted Successfully')
            );
            this.GetTechnicals();
          },
          error: (err) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: this.translate.instant('Something went wrong'),
            });
          },
        });
      }
    });
  }
}
