import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { PartService } from 'src/app/Services/part.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mange-parts',
  templateUrl: './mange-parts.component.html',
  styleUrls: ['./mange-parts.component.css'],
})
export class MangePartsComponent implements OnInit {
  partsForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA)
    public data: { OrderId: number; customerId: number },
    private PartService: PartService,
    private Toaster: ToastrService,
    private TranslateService: TranslateService
  ) {
    this.partsForm = this.fb.group({
      parts: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.LoadParts();
  }

  LoadParts() {
    this.PartService.GetPartsByOrderId(this.data.OrderId).subscribe({
      next: (parts: any) => {
        console.log('Start Load Parts');
        this.parts.clear();
        parts.forEach((part) => {
          const partGroup = this.fb.group({
            id: [part.id],
            description: [part.description],
            price: [part.price],
            qty: [part.quantity],
            total: [{ value: part.total, disabled: true }],
          });
          this.parts.push(partGroup);
        });
      },
      error: (err) => {
        this.Toaster.error('Failed to load parts');
      },
    });
  }

  get parts() {
    return this.partsForm.get('parts') as FormArray;
  }

  IsValidToAddNewPart() {
    var parts = this.parts.controls.filter((part) => !part.get('id').value);
    if (parts.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  addPart() {
    if (!this.IsValidToAddNewPart()) {
      this.Toaster.error(
        this.TranslateService.instant(
          'Cannot add new parts until all unsaved parts are saved.'
        )
      );
      return;
    }
    const partGroup = this.fb.group({
      id: [null],
      description: [''],
      price: [''],
      qty: [''],
      total: [{ value: '', disabled: true }],
    });
    this.parts.push(partGroup);
  }

  calculateTotal(index: number) {
    const part = this.parts.at(index);
    const price = part.get('price').value;
    const qty = part.get('qty').value;
    const total = price * qty;
    part.get('total').setValue(total);
    console.log(part.get('total').value);
  }
  DeletePart(index, partId) {
    if (!partId) {
      this.parts.removeAt(index);
    } else {
      Swal.fire({
        title: this.TranslateService.instant('Are you sure?'),
        text: this.TranslateService.instant(
          "You won't be able to revert this!"
        ),
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: this.TranslateService.instant('Yes, delete it'),
        cancelButtonText: this.TranslateService.instant('Cancel'),
      }).then((result) => {
        if (result.isConfirmed) {
          this.PartService.DeletePart(partId).subscribe({
            next: (res) => {
              this.Toaster.success(
                this.TranslateService.instant('Part Deleted Successfully')
              );
              this.LoadParts();
            },
          });
        }
      });
    }
  }

  SavePart(id, description, quantity, price, total) {
    var part = {
      Description: description,
      price: price,
      Quantity: quantity,
      Total: total,
      OrderId: this.data.OrderId,
      customerId: this.data.customerId,
    };
    if (!part.Description) {
      this.Toaster.error('Please enter a description for the part.');
      return;
    }
    if (!part.price) {
      this.Toaster.error('Please enter the price for the part.');
      return;
    }
    if (!part.Quantity) {
      this.Toaster.error('Please enter the quantity for the part.');
      return;
    }
    if (!part.Total) {
      this.Toaster.error('The total must be calculated before saving.');
      return;
    }

    if (id == null) {
      this.PartService.CreatePart(part).subscribe({
        next: (res) => {
          this.Toaster.success(
            this.TranslateService.instant('Part Added Successfully')
          );
          this.LoadParts();
        },
        error: (err) => {
          this.Toaster.error('Failed to add the part. Please try again.');
        },
      });
    } else {
      this.PartService.EditPart(id, part).subscribe({
        next: (res) => {
          this.Toaster.success(
            this.TranslateService.instant('Part Updated Successfully')
          );
          this.LoadParts();
        },
        error: (err) => {
          this.Toaster.error('Failed to add the part. Please try again.');
        },
      });
    }
  }
  getTotalQuantity(): number {
    return this.parts.controls.reduce(
      (total, part) => total + part.get('qty').value,
      0
    );
  }

  getTotalPrice(): number {
    return this.parts.controls.reduce(
      (total, part) => total + part.get('total').value,
      0
    );
  }
}
