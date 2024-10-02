import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { StoreService } from 'src/app/Services/store.service';

@Component({
  selector: 'app-mange-store',
  templateUrl: './mange-store.component.html',
  styleUrls: ['./mange-store.component.css'],
})
export class MangeStoreComponent {
  constructor(
    private StoreService: StoreService,
    private Toaster: ToastrService,
    private MatDilogRef: MatDialogRef<MangeStoreComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    public translateService: TranslateService
  ) {}
  ngOnInit(): void {
    this.InitialzeFor();
    if (this.data) {
      this.FillStoreData();
    }
  }
  StoreForm: FormGroup;
  InitialzeFor() {
    this.StoreForm = new FormGroup({
      Name: new FormControl(null, Validators.required),
      isActive: new FormControl(false, Validators.required),
    });
  }
  FillStoreData() {
    this.StoreService.GetStoreById(this.data).subscribe({
      next: (res: any) => {
        this.StoreForm.setValue({
          Name: res.name,
          isActive: res.isActive,
        });
      },
    });
  }
  CreateStore() {
    if (this.data) {
      this.StoreService.UpdateStore(this.data, this.StoreForm.value).subscribe({
        next: (res) => {
          this.Toaster.success(
            this.translateService.instant('Store Updated Successfuly')
          );
          this.MatDilogRef.close(true);
        },
      });
    } else {
      this.StoreService.CreateStore(this.StoreForm.value).subscribe({
        next: (res) => {
          this.Toaster.success(
            this.translateService.instant('Store Created Successfuly')
          );
          this.MatDilogRef.close(true);
        },
      });
    }
  }
}
