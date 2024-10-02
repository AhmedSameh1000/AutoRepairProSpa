import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Services/auth.service';
import { CustomerService } from 'src/app/Services/customer.service';
import { OrderService } from 'src/app/Services/order.service';
import { OrdertypeService } from 'src/app/Services/ordertype.service';
import { StoreService } from 'src/app/Services/store.service';
import { TechnicalService } from 'src/app/Services/technical.service';
import { GalaryComponent } from 'src/app/Shared/galary/galary.component';

@Component({
  selector: 'app-mange-order',
  templateUrl: './mange-order.component.html',
  styleUrls: ['./mange-order.component.css'],
})
export class MangeOrderComponent implements OnInit {
  constructor(
    private OrderTypeService: OrdertypeService,
    private StoreService: StoreService,
    private TechnicalService: TechnicalService,
    private CustomerServices: CustomerService,
    private OrderService: OrderService,
    private Toaster: ToastrService,
    private AuthService: AuthService,
    private MatDilogRef: MatDialogRef<MangeOrderComponent>,
    private Dilog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public id: { id: string },
    private TranslateService: TranslateService
  ) {}

  OrderForm: FormGroup;
  InitializeOrderForm() {
    this.OrderForm = new FormGroup({
      CustomerId: new FormControl(null, Validators.required),
      StoreId: new FormControl(null, Validators.required),
      OrderTypeId: new FormControl(null, Validators.required),
      TechnicalId: new FormControl(null, Validators.required),
      Description: new FormControl(null, Validators.required),
      UserId: new FormControl(this.AuthService.GetUserId()),
      images: new FormControl(null),
    });
  }
  ngOnInit(): void {
    this.InitializeOrderForm();
    this.GetCusotmers();
    this.GetOrderTypes();
    this.GetStores();
    this.GetTechnical();
    if (this.id) {
      this.LoadOrder();
    }
  }

  Stores: any;
  GetStores() {
    this.StoreService.GetStores().subscribe({
      next: (res) => {
        this.Stores = res;
      },
    });
  }
  Technicals: any;
  GetTechnical() {
    this.TechnicalService.GetTechnicals().subscribe({
      next: (res) => {
        this.Technicals = res;
      },
    });
  }

  OrderTypes: any;
  GetOrderTypes() {
    this.OrderTypeService.GetOrderTypes().subscribe({
      next: (res) => {
        this.OrderTypes = res;
      },
    });
  }

  Customers: any;
  GetCusotmers() {
    this.CustomerServices.GetCustomers().subscribe({
      next: (res) => {
        this.Customers = res;
        console.log(res);
      },
    });
  }
  CreateOrder() {
    const formData = new FormData();

    const imageControl = this.OrderForm.get('images')?.value;
    if (imageControl == null || imageControl == undefined) {
      this.Toaster.error(
        this.TranslateService.instant('please select at list one Image')
      );
      return;
    }
    if (imageControl.length > 4) {
      this.Toaster.error(
        this.TranslateService.instant(
          'You are not allowed to upload more than 4 images.'
        )
      );
      return;
    }

    if (imageControl instanceof FileList) {
      for (let i = 0; i < imageControl.length; i++) {
        formData.append('images', imageControl[i], imageControl[i].name);
      }
    } else if (imageControl instanceof File) {
      formData.append('images', imageControl, imageControl.name);
    }

    formData.append('CustomerId', this.OrderForm.value.CustomerId);
    formData.append('StoreId', this.OrderForm.value.StoreId);
    formData.append('OrderTypeId', this.OrderForm.value.OrderTypeId);
    formData.append('TechnicalId', this.OrderForm.value.TechnicalId);
    formData.append('Description', this.OrderForm.value.Description);
    formData.append('UserId', this.OrderForm.value.UserId);

    this.OrderService.CreateOrder(formData).subscribe({
      next: (res) => {
        this.Toaster.success(
          this.TranslateService.instant('Order Created Successfuly')
        );
        this.MatDilogRef.close(true);
      },
    });
  }
  firstImageUrl: string | null = null;

  onFileChange(event: any) {
    const files: FileList = event.target.files;
    this.OrderForm.get('images')?.setValue(files);

    if (files.length > 0) {
      const file = files[0]; // الحصول على الصورة الأولى فقط
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.firstImageUrl = e.target.result; // تخزين رابط الصورة الأولى
      };

      reader.readAsDataURL(file); // قراءة الصورة كـ data URL
    } else {
      this.firstImageUrl = null; // في حالة عدم اختيار أي صورة
    }
  }

  LoadOrder() {
    this.OrderService.GetOrderById(this.id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.OrderForm.setValue({
          CustomerId: res.customerId,
          StoreId: res.storeId,
          OrderTypeId: res.orderTypeId,
          TechnicalId: res.technicalId,
          Description: res.description,
          UserId: this.AuthService.GetUserId(),
          images: res.images || null,
        });
      },
      error: (err) => {
        console.error('Error loading order:', err);
      },
    });
  }
  EditOrder() {
    this.OrderService.EditOrder(this.OrderForm.value, this.id).subscribe({
      next: (res) => {
        this.Toaster.success(
          this.TranslateService.instant('Order Updated Successfully')
        );
        this.MatDilogRef.close(true);
      },
    });
  }
  OpenGalary() {
    this.Dilog.open(GalaryComponent, {
      data: {
        id: this.id,
        isUpdatable: true,
      },
    });
  }
}
