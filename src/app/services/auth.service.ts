import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUserAPI = "http://127.0.0.1:8080/login"
  private registerUserAPI = "http://127.0.0.1:8080/register"

  constructor(private http: HttpClient,) { }

  loginUser(user) {
    return this.http.post<any>(this.loginUserAPI, user, { observe: 'response' })
  }
  registerUser(user) {
    return this.http.post<any>(this.registerUserAPI, user, { observe: 'response' })
  }

  isLoggedIn() {
    let token = localStorage.getItem('mytoken')

    if (token) {
      return true
    } else {
      return false
    }
  }

  isLoggedAdmin() {
    let token = localStorage.getItem('mytoken')

    if (token) {

      const helper = new JwtHelperService();

      const decodedToken = helper.decodeToken(token);

      if (decodedToken.roles == "ADMIN") {
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  }

  isLoggedClient() {
    
    let token = localStorage.getItem('mytoken')

    if (token) {
      const helper = new JwtHelperService();

      const decodedToken = helper.decodeToken(token);

      if (decodedToken.roles == "client") {
        return true
      } else {
        return false
      }

    } else {
      return false
    }
  }

}
