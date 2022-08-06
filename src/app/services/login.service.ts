import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  public login (userName:string,password:string){
    let body= "userName="+userName+"&password="+password;
    let httpHeaders = new HttpHeaders().set('Content-Type',"application/x-www-form-urlencoded");

    let options:any = {headers:httpHeaders,responseType:'text'};
    return this.httpClient.post("http://localhost:8080/login",body,options);

  }

  public register (user:User){
    let body= "userName="+user.userName+"&email="+user.email+"&password="+user.password;
    let httpHeaders = new HttpHeaders().set('Content-Type',"application/x-www-form-urlencoded");

    let options:any = {headers:httpHeaders,responseType:'text'};
    return this.httpClient.post("http://localhost:8080/login/register",body,options);

  }
}
