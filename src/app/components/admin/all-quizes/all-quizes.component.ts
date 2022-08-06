import { Component, OnInit } from '@angular/core';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-all-quizes',
  templateUrl: './all-quizes.component.html',
  styleUrls: ['./all-quizes.component.scss']
})
export class AllQuizesComponent implements OnInit {

  public quizes?: Quiz[];
  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getAllQuizes().subscribe({next:(quizes)=>{console.log(quizes);
     this.quizes=quizes},error:(e)=>{alert(e.error.message)}});
  }


  public deleteQuiz(quizId?:number){
    if(quizId){
      this.quizService.deleteQuiz(quizId).subscribe({next:()=>{
        if(this.quizes){
        for (let i = 0; i < this.quizes.length; i++) {
          if(this.quizes[i].id==quizId){
            this.quizes.splice(i);
          }
        }
      }
        alert("quiz was deleted");},error:(e)=>{alert(e.error.message)}});
    }
  }
}
