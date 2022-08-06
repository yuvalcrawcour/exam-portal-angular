import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) { }


  public getUser(userId:number): Observable<User> {
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.get<User>("http://localhost:8080/api/regular/get-user/"+userId, options);
 
  }
}
