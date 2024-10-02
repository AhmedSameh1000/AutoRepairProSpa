import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpClient: HttpClient) {}

  GetCustomers() {
    return this.httpClient.get(environment.BaseUrl + '/Customer/Customers');
  }
  CreateCustomer(CustomerForCreateDto) {
    return this.httpClient.post(
      environment.BaseUrl + '/Customer/CreateCustomer',
      CustomerForCreateDto
    );
  }
  UpdateCustomer(id, CustomerForUpdateDto) {
    return this.httpClient.post(
      environment.BaseUrl + `/Customer/UpdateCustomer/${id}`,
      CustomerForUpdateDto
    );
  }
  GetCustomerById(CustomerId) {
    return this.httpClient.get(
      environment.BaseUrl + '/Customer/GetCustomer/' + CustomerId
    );
  }
  DeleteCustomer(CustomerId) {
    return this.httpClient.delete(
      environment.BaseUrl + '/Customer/DeleteCustomer/' + CustomerId
    );
  }
}
