import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OrdertypeService {
  constructor(private httpClient: HttpClient) {}

  GetOrderTypes() {
    return this.httpClient.get(environment.BaseUrl + '/OrderType/OrderTypes');
  }
  CreateOrderType(OrderTypeForCreateDto) {
    return this.httpClient.post(
      environment.BaseUrl + '/OrderType/CreateOrderType',
      OrderTypeForCreateDto
    );
  }
  UpdateOrderType(id, OrderTypeForUpdateDto) {
    return this.httpClient.post(
      environment.BaseUrl + `/OrderType/UpdateOrderType/${id}`,
      OrderTypeForUpdateDto
    );
  }
  GetOrderTypeById(OrderTypeId) {
    return this.httpClient.get(
      environment.BaseUrl + '/OrderType/GetOrderType/' + OrderTypeId
    );
  }
  DeleteOrderType(OrderTypeId) {
    return this.httpClient.delete(
      environment.BaseUrl + '/OrderType/DeleteOrderType/' + OrderTypeId
    );
  }
}
