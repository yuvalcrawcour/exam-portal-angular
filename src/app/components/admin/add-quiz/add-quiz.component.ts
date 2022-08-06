import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent implements OnInit {

  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
  }
  public addQuiz(name:string,description:string){
    this.quizService.addQuiz(new Quiz(new Array(),0,name,description)).subscribe({next:()=>{alert("quiz added")},error:(e)=>{alert(e.error.message)}});



  }

}
