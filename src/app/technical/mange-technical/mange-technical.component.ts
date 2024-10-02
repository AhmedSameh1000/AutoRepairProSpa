import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { TechnicalService } from 'src/app/Services/technical.service';
@Component({
  selector: 'app-mange-technical',
  templateUrl: './mange-technical.component.html',
  styleUrls: ['./mange-technical.component.css'],
})
export class MangeTechnicalComponent {
  constructor(
    private TechnicalService: TechnicalService,
    private Toaster: ToastrService,
    private MatDilogRef: MatDialogRef<MangeTechnicalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: string },
    private translate: TranslateService
  ) {}
  ngOnInit(): void {
    this.InitialzeFor();
    if (this.data) {
      this.FillTechnicalData();
    }
  }
  TechnicalForm: FormGroup;
  InitialzeFor() {
    this.TechnicalForm = new FormGroup({
      Name: new FormControl(null, Validators.required),
      Description: new FormControl(null, Validators.required),
      isActive: new FormControl(false, Validators.required),
    });
  }
  FillTechnicalData() {
    this.TechnicalService.GetTechnicalById(this.data).subscribe({
      next: (res: any) => {
        this.TechnicalForm.setValue({
          Name: res.name,
          isActive: res.isActive,
          Description: res.description,
        });
      },
    });
  }
  CreateTechnical() {
    if (this.data) {
      this.TechnicalService.UpdateTechnical(
        this.data,
        this.TechnicalForm.value
      ).subscribe({
        next: (res) => {
          this.Toaster.success(
            this.translate.instant('Technical Updated Successfuly')
          );
          this.MatDilogRef.close(true);
        },
      });
    } else {
      this.TechnicalService.CreateTechnical(this.TechnicalForm.value).subscribe(
        {
          next: (res) => {
            this.Toaster.success(
              this.translate.instant('Technical Created Successfuly')
            );
            this.MatDilogRef.close(true);
          },
        }
      );
    }
  }
}
