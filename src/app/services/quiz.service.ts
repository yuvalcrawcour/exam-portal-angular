import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { Quiz } from '../models/quiz.model';
import {QuizSummary} from '../models/quiz-summary.model'

@Injectable({
  providedIn: 'root'
})
export class QuizService {



  constructor(private httpClient:HttpClient) { }

  public getAllQuizSummaries(userId:number): Observable<QuizSummary[]> {
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.get<QuizSummary[]>("http://localhost:8080/api/regular/get-quiz-summaries/"+userId, options);
 
  }
  public saveQuizSummary(userId:number, quizSummary:QuizSummary){
    let url = "http://localhost:8080/api/regular/save-quiz-summary/"+userId;
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.post<QuizSummary>(url,quizSummary,options);
 
  }
  public addQuestionToQuiz(quizId:number,question:Question){

    let url = "http://localhost:8080/api/admin/add-question-to-quiz/"+quizId;
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.post<Question>(url,question,options);
 
  } 

  public addQuiz(quiz:Quiz){

    let url = "http://localhost:8080/api/admin/add-quiz";
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.post<Quiz>(url,quiz,options);
 
  } 

  public getAllQuizes(): Observable<Quiz[]> {
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.get<Quiz[]>("http://localhost:8080/api/admin/get-all-quizes", options);
 
  }
  public getQuiz(quizId:number): Observable<Quiz> {
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.get<Quiz>("http://localhost:8080/api/admin/get-quiz/"+quizId, options);
 
  }

  deleteQuestion(id: number) {
    let url = "http://localhost:8080/api/admin/delete-question/"+id;
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.delete(url,options);
    
  }
  deleteQuiz(id: number) {
    let url = "http://localhost:8080/api/admin/delete-quiz/"+id;
    let token = sessionStorage.getItem("token");
    token = token!=null?token:"";
    let httpHeaders = new HttpHeaders().set("token",token);
    let options = {headers:httpHeaders};
    return this.httpClient.delete(url,options);
    
  }
}
