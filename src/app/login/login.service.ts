import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Contants } from '../constants/constants';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  urlBase = environment.API_URL
  url= Contants.VALIDATE_WITH_LOGIN
  
  constructor(private http: HttpClient) {
    
  }

  login(login:Login) {
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    }
    let json = JSON.stringify(login)
    return this.http.post<any>("https://app.gosummus.com/testing/api/login",json,options)
  }
}
