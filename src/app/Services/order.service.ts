import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private httpClient: HttpClient) {}
  GetOrders(query: string) {
    const searchQuery = query ? query : '';
    return this.httpClient.get(
      environment.BaseUrl + '/Order/Orders?query=' + searchQuery
    );
  }

  CreateOrder(OrderForCreateDto) {
    return this.httpClient.post(
      environment.BaseUrl + '/Order/CreateOrder',
      OrderForCreateDto
    );
  }
  EditOrder(OrderForEditDto, id) {
    return this.httpClient.post(
      environment.BaseUrl + '/Order/EditOrder/' + id,
      OrderForEditDto
    );
  }
  DeleteOrder(id) {
    return this.httpClient.delete(
      environment.BaseUrl + '/Order/DeleteOrder/' + id
    );
  }
  GetOrderById(id) {
    return this.httpClient.get(
      environment.BaseUrl + '/Order/GetOrderById/' + id
    );
  }
  GetOrderDetails(id) {
    return this.httpClient.get(
      environment.BaseUrl + '/Order/GetOrderDetails/' + id
    );
  }
  placedOrder(data) {
    return this.httpClient.post(
      environment.BaseUrl + '/Order/PlacedOrder/',
      data
    );
  }
}
