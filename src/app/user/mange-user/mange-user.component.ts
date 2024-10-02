import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-mange-user',
  templateUrl: './mange-user.component.html',
  styleUrls: ['./mange-user.component.css'],
})
export class MangeUserComponent implements OnInit {
  constructor(
    private AuthService: AuthService,
    private MatDilogRef: MatDialogRef<MangeUserComponent>,
    private Toaster: ToastrService,
    private translateService: TranslateService
  ) {}
  ngOnInit(): void {
    this.InitializeForm();
    this.GetRoles();
  }

  CreateUserForm: FormGroup;
  InitializeForm() {
    this.CreateUserForm = new FormGroup({
      fullName: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null, Validators.required),
      roleId: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
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
  Result: any;
  CreateUser() {
    this.AuthService.CreateUser(this.CreateUserForm.value).subscribe({
      next: (res) => {
        this.Toaster.success(
          this.translateService.instant('User Created Successfuly')
        );
        this.MatDilogRef.close(true);
      },
      error: (err) => {
        console.log(err);
        this.Result = err.error;
      },
    });
  }
}
