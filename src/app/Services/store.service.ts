import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  GetStores() {
    return this.httpClient.get(environment.BaseUrl + '/Store/Stores');
  }
  CreateStore(StoreForCreateDto) {
    return this.httpClient.post(
      environment.BaseUrl + '/Store/CreateStore',
      StoreForCreateDto
    );
  }
  UpdateStore(id, StoreForUpdateDto) {
    return this.httpClient.post(
      environment.BaseUrl + `/Store/UpdateStore/${id}`,
      StoreForUpdateDto
    );
  }
  GetStoreById(StoreId) {
    return this.httpClient.get(
      environment.BaseUrl + '/Store/GetStore/' + StoreId
    );
  }
  DeleteStore(StoreId) {
    return this.httpClient.delete(
      environment.BaseUrl + '/Store/DeleteStore/' + StoreId
    );
  }
}
