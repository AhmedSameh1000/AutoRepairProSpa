import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { GalleryItem, ImageItem } from 'ng-gallery';
import { ToastrService } from 'ngx-toastr';
import { CustomerService } from 'src/app/Services/customer.service';
import { ImageService } from 'src/app/Services/image.service';
import { OrdertypeService } from 'src/app/Services/ordertype.service';
import { StoreService } from 'src/app/Services/store.service';
import { TechnicalService } from 'src/app/Services/technical.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-galary',
  templateUrl: './galary.component.html',
  styleUrls: ['./galary.component.css'],
})
export class GalaryComponent implements OnInit {
  galleryImages: GalleryItem[];
  @Input() OrderId: any;
  @Input() ToUpdate = false;
  constructor(
    private ImagesService: ImageService,
    @Inject(MAT_DIALOG_DATA) public data: { id: any; isUpdatable: boolean },
    private ToasterService: ToastrService,
    private MatDilogref: MatDialogRef<GalaryComponent>,
    private TranslateService: TranslateService,
    private CustomerServices: CustomerService,
    private TechnicalService: TechnicalService,
    private StoreService: StoreService,
    private OrderTypeService: OrdertypeService
  ) {}
  ngOnInit(): void {
    console.log('data = ', this.data);
    console.log('orderId = ', this.OrderId);
    console.log('Are they equal', this.OrderId == undefined);
    if (!this.data.id) {
      this.data.id = this.OrderId.OrderId;
    }
    this.GetImages();
  }

  Images: any;
  GetImages() {
    this.ImagesService.GetImages(this.data.id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.galleryImages = res.map(
          (image) =>
            new ImageItem({
              src: image.path,
              thumb: image.path,
            })
        );
      },
    });
  }
  DeleteImage(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.ImagesService.DeleteImage(id).subscribe({
          next: (res) => {
            this.ToasterService.success('OrderType Deleted Successfully');
            this.GetImages();
          },
        });
      }
    });
  }
  OnFileChange(event) {
    console.log(this.data.id);
    const formData = new FormData();

    const files = event.target.files as FileList;
    console.log(files);
    if (files.length > 4) {
      this.ToasterService.error(
        this.TranslateService.instant(
          'You are not allowed to upload more than 4 images.'
        )
      );
      return;
    }
    for (let i = 0; i < files.length; i++) {
      formData.append('formFiles', files[i], files[i].name);
    }
    formData.append('orderId', this.data.id);
    formData.append('IsReceiving', String(true));
    this.ImagesService.BulkImport(formData).subscribe({
      next: (res) => {
        this.GetImages();
        this.ToasterService.success(
          this.TranslateService.instant('Images Uploaded Successfuly')
        );
      },
    });
  }
}
