import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/app/Services/auth.service';
import { MangeUserComponent } from '../mange-user/mange-user.component';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  constructor(
    public AuthService: AuthService,
    private MatDilog: MatDialog,
    private Toaster: ToastrService,
    private translateService: TranslateService
  ) {}
  ngOnInit(): void {
    this.GetUers();
    this.GetRoles();
  }
  Lang = localStorage.getItem('lang');

  Users: any;
  GetUers() {
    this.AuthService.GetUsers().subscribe({
      next: (res) => {
        this.Users = res;
      },
    });
  }
  Roles: any;
  GetRoles() {
    this.AuthService.GetRoles().subscribe({
      next: (res) => {
        this.Roles = res;
      },
    });
  }
  selectedRoleId: number;
  OpenUserMangeDilog() {
    var AfterClose = this.MatDilog.open(MangeUserComponent, {
      disableClose: true,
    });
    AfterClose.afterClosed().subscribe({
      next: (res) => {
        if (res) this.GetUers();
      },
    });
  }
  DeleteUser(id) {
    Swal.fire({
      title: this.translateService.instant('Are you sure?'),
      text: this.translateService.instant("You won't be able to revert this!"),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: this.translateService.instant('Yes, delete it'),
      cancelButtonText: this.translateService.instant('Cancel'),
    }).then((result) => {
      if (result.isConfirmed) {
        this.AuthService.Deleteuser(id).subscribe({
          next: (res) => {
            this.Toaster.success(
              this.translateService.instant('User Deleted Successfuly')
            );
            this.GetUers();
          },
        });
      }
    });
  }
  OnRoleChange(event, userId) {
    var ChangeRole = {
      roleId: event.target.value,
      userId: userId,
    };
    this.AuthService.ChangeRoleForUser(ChangeRole).subscribe({
      next: (res) => {
        this.Toaster.success(
          this.translateService.instant('Permission Changed Successfuly')
        );
        this.GetUers();
      },
      error: (err) => {
        this.Toaster.success('Error');
      },
    });
  }
}
