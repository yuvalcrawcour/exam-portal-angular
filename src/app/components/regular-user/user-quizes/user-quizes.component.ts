import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-user-quizes',
  templateUrl: './user-quizes.component.html',
  styleUrls: ['./user-quizes.component.scss']
})
export class UserQuizesComponent implements OnInit {

  public quizes?: Quiz[];
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizService.getAllQuizes().subscribe({next:(quizes)=>{this.quizes=quizes},error:(err)=>{alert(err.error.message)}});
  }

}
