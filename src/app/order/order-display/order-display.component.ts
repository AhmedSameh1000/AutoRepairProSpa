import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/Services/customer.service';
import { ImageService } from 'src/app/Services/image.service';
import { OrderService } from 'src/app/Services/order.service';
import { OrdertypeService } from 'src/app/Services/ordertype.service';
import { StoreService } from 'src/app/Services/store.service';
import { TechnicalService } from 'src/app/Services/technical.service';
import { GalaryComponent } from 'src/app/Shared/galary/galary.component';

@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.css'],
})
export class OrderDisplayComponent implements OnInit {
  constructor(
    private ImagesService: ImageService,
    @Inject(MAT_DIALOG_DATA) public data: { id: any },
    private CustomerServices: CustomerService,
    private TechnicalService: TechnicalService,
    private StoreService: StoreService,
    private OrderTypeService: OrdertypeService,
    private OrderService: OrderService
  ) {}
  ngOnInit(): void {
    this.InitializeOrderForm();
    this.GetStores();
    this.GetCusotmers();
    this.GetOrderTypes();
    this.GetTechnical();
    this.LoadOrder();
    this.OrderForm.disable();
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
  OrderForm: FormGroup;
  InitializeOrderForm() {
    this.OrderForm = new FormGroup({
      CustomerId: new FormControl(null, Validators.required),
      StoreId: new FormControl(null, Validators.required),
      OrderTypeId: new FormControl(null, Validators.required),
      TechnicalId: new FormControl(null, Validators.required),
      Description: new FormControl(null, Validators.required),
      images: new FormControl(null),
    });
  }
  LoadOrder() {
    this.OrderService.GetOrderById(this.data.id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.OrderForm.setValue({
          CustomerId: res.customerId,
          StoreId: res.storeId,
          OrderTypeId: res.orderTypeId,
          TechnicalId: res.technicalId,
          Description: res.description,
          images: res.images || null,
        });
      },
      error: (err) => {
        console.error('Error loading order:', err);
      },
    });
  }
}
