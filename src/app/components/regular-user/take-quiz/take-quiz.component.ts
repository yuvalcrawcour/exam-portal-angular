import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question.model';
import { QuizSummary } from 'src/app/models/quiz-summary.model';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';
import { TokenService } from 'src/app/services/token.service';



@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.scss']
})
export class TakeQuizComponent implements OnInit {

  public quiz?:Quiz;
  public curQuestionNumber:number=0;
  public value? : number;
  public timeLeft: number = 60;
  public interval?: number | undefined;
  public disabled : boolean= false;
  public finished: boolean = false;
  public correctAnswers: number=0;
  public wrongAnswers: number=0;
  public grade:number = 0;
  

  constructor(private quizService:QuizService,private activatedRoute : ActivatedRoute,private tokenService:TokenService) {    


  }

  public finishQuiz(){
    this.finished=true;
    this.grade = this.correctAnswers/(this.correctAnswers+this.wrongAnswers)*100;
    let token = sessionStorage.getItem("token");
    if(this.quiz&&token)
      this.quizService.saveQuizSummary(this.tokenService.extractUserId(token),new QuizSummary(0,this.quiz,this.grade,new Date())).subscribe({next:(id)=>{alert("quiz summary was added")},error:(err)=>{alert(err.error.message)}});

  }
  public goToNextQuestion(){

    if(this.quiz){
    if(this.curQuestionNumber==this.quiz.questions.length-1){
      this.finishQuiz();
    }else{
      this.disabled=false;
      this.curQuestionNumber++;
      this.timeLeft=60;
      this.startTimer();
      this.value=undefined;
    }}
  }
  public submitAnswer(){
    clearInterval(this.interval);
    this.disabled = true;

    if(this.quiz&&this.value==this.quiz.questions[this.curQuestionNumber].rightAnswer){
      this.correctAnswers++;
    }else{
      this.wrongAnswers++;
    }

    

  }

  ngOnInit(): void {

    let id:number= this.activatedRoute.snapshot.params['id'];
    this.quizService.getQuiz(id).subscribe({next:(quiz)=>{this.quiz=quiz;console.log(quiz);this.timeLeft=60;
    },error:(err)=>{alert(err.error.message)}});
    this.startTimer();
  }



startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft >= 0) {
        this.timeLeft--;
      } else {
        if(this.timeLeft==-1){
          this.submitAnswer();
          clearInterval(this.interval)
          this.disabled = true;
        }else{
          this.timeLeft = 60;
        }
        
      }
    },1000)
  }


}
