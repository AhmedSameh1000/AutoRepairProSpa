import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class TechnicalService {
  constructor(private httpClient: HttpClient) {}

  GetTechnicals() {
    return this.httpClient.get(environment.BaseUrl + '/Technical/Technicals');
  }
  CreateTechnical(TechnicalForCreateDto) {
    return this.httpClient.post(
      environment.BaseUrl + '/Technical/CreateTechnical',
      TechnicalForCreateDto
    );
  }
  UpdateTechnical(id, TechnicalForUpdateDto) {
    return this.httpClient.post(
      environment.BaseUrl + `/Technical/UpdateTechnical/${id}`,
      TechnicalForUpdateDto
    );
  }
  GetTechnicalById(TechnicalId) {
    return this.httpClient.get(
      environment.BaseUrl + '/Technical/GetTechnical/' + TechnicalId
    );
  }
  DeleteTechnical(TechnicalId) {
    return this.httpClient.delete(
      environment.BaseUrl + '/Technical/DeleteTechnical/' + TechnicalId
    );
  }
}
