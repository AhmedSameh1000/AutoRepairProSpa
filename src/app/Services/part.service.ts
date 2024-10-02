import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PartService {
  constructor(private httpClient: HttpClient) {}

  GetParts() {
    return this.httpClient.get(environment.BaseUrl + '/Part/Parts');
  }
  CreatePart(PartForCreateDto) {
    return this.httpClient.post(
      environment.BaseUrl + '/Part/CreatePart',
      PartForCreateDto
    );
  }
  EditPart(id, partForUpdate) {
    return this.httpClient.post(
      environment.BaseUrl + '/Part/EditPart/' + id,
      partForUpdate
    );
  }
  DeletePart(PartId) {
    return this.httpClient.delete(
      environment.BaseUrl + '/Part/DeletePart/' + PartId
    );
  }
  GetPartsByOrderId(orderId) {
    return this.httpClient.get(
      environment.BaseUrl + '/Part/GetPartsByOrderId/' + orderId
    );
  }
}
