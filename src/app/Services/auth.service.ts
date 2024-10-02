import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpclient: HttpClient) {}

  LogIn(logInModel: any) {
    return this.httpclient.post(
      environment.BaseUrl + '/Auth/LogIn',
      logInModel
    );
  }
  CreateUser(CreateUserModelModel: any) {
    return this.httpclient.post(
      environment.BaseUrl + '/Auth/CreateUser',
      CreateUserModelModel
    );
  }
  GetUsers() {
    return this.httpclient.get(environment.BaseUrl + '/Auth/GetUsers');
  }
  GetRoles() {
    return this.httpclient.get(environment.BaseUrl + '/Auth/GetRoles');
  }
  Deleteuser(id) {
    return this.httpclient.delete(
      environment.BaseUrl + `/Auth/DeleteUser/${id}`
    );
  }
  ChangeRoleForUser(changeRole) {
    return this.httpclient.post(
      environment.BaseUrl + `/Auth/ChangeRoleForUser`,
      changeRole
    );
  }

  JWTHealper = new JwtHelperService();
  GetUserId() {
    if (this.isLoggedIn()) {
      var decodedToken = this.GetDecodedToken();
      return decodedToken.Id;
    }
  }

  GetEmail() {
    if (this.isLoggedIn()) {
      var DecodedToken = this.GetDecodedToken();
      return DecodedToken.Email;
    }
  }
  GetName() {
    if (this.isLoggedIn()) {
      var DecodedToken = this.GetDecodedToken();
      return DecodedToken.Name;
    }
  }
  GetDecodedToken(): any {
    if (this.isLoggedIn()) {
      const token = this.GetToken();
      var decodedToken = this.JWTHealper.decodeToken(token);
      return decodedToken;
    }
  }

  IsUser(): any {
    if (this.isLoggedIn()) {
      var decodedToken = this.GetDecodedToken();
      var Role: string = decodedToken.roles;
      if (Role == 'User') {
        return true;
      } else {
        return false;
      }
    }
  }

  IsManger(): any {
    if (this.isLoggedIn()) {
      var decodedToken = this.GetDecodedToken();
      var Role: string = decodedToken.roles;
      if (Role == 'Manager') {
        return true;
      } else {
        return false;
      }
    }
  }
  isLoggedIn(): boolean {
    const token =
      localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token == null || token == undefined) return false;
    else return true;
  }

  GetToken(): any {
    return localStorage.getItem('token') || sessionStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
  }
}
