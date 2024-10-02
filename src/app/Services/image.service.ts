import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private httpClient: HttpClient) {}
  GetImages(id) {
    return this.httpClient.get(
      environment.BaseUrl + '/OrderImage/Images/' + id
    );
  }
  DeleteImage(id) {
    return this.httpClient.delete(
      environment.BaseUrl + '/OrderImage/DeleteImage/' + id
    );
  }
  BulkImport(Images) {
    return this.httpClient.post(
      environment.BaseUrl + '/OrderImage/BulkImages/',
      Images
    );
  }
}
