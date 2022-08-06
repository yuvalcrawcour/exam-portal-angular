import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CodingChallenge } from '../models/coding-challenge.model';

@Injectable({
  providedIn: 'root'
})
export class ChallengeService {

  constructor(private httpClient:HttpClient) { }


  public getChallenge(challengeId:number): Observable<CodingChallenge> {
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.get<CodingChallenge>("http://localhost:8080/api/regular/get-challenge/"+challengeId, options);
 
  }

  public getAllChallenges(): Observable<CodingChallenge[]> {
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.get<CodingChallenge[]>("http://localhost:8080/api/regular/get-all", options);
 
  }

  
  public submitAnswerSleepIn(ans:string){

    let url = "http://localhost:8080/api/jdoodle/checkSleepIn";
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.post<string>(url,ans,options);
 
  } 
  public submitAnswerCigarParty(ans:string){

    let url = "http://localhost:8080/api/jdoodle/checkCigarParty";
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.post<string>(url,ans,options);
 
  } 

  public submitAnswerBlackJack(ans:string){

    let url = "http://localhost:8080/api/jdoodle/checkBlackJack";
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.post<string>(url,ans,options);
 
  } 
}
