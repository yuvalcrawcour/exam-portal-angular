import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question.model';
import { Quiz } from 'src/app/models/quiz.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-edit-quiz',
  templateUrl: './edit-quiz.component.html',
  styleUrls: ['./edit-quiz.component.scss']
})
export class EditQuizComponent implements OnInit {

  public questionToAdd?: Question;
  public quiz:Quiz;
  constructor(private activatedRoute:ActivatedRoute,private quizService:QuizService) {
    this.quiz=new Quiz(new Array(),0,"","");
    let quizId = this.activatedRoute.snapshot.params['id'];
    this.quizService.getQuiz(quizId).subscribe({next:(quizFromDb)=>{this.quiz=quizFromDb;
    },error:(e)=>{alert(e.error.message)}}); }

  ngOnInit(): void {
     
  }
  public deleteQuestion(questionId:number|undefined){
    if(questionId)
      this.quizService.deleteQuestion(questionId).subscribe({next:()=>{alert("question was deleted");},error:(e)=>{alert(e.error.message)}});
  }

  public deleteQuiz(){
    if(this.quiz?.id){
      this.quizService.deleteQuiz(this.quiz?.id).subscribe({next:()=>{alert("quiz was deleted");},error:(e)=>{alert(e.error.message)}});
    }
  }
  // public addQuestion(){
  //   let quest = this.questionToAdd?this.questionToAdd:new Question();
  //   if(this.quiz?.id&&this.questionToAdd){
  //     this.quizService.addQuestionToQuiz(this.quiz?.id,this.questionToAdd).subscribe({next:()=>{this.quiz?.addQuestion(quest);alert("question added")},error:(e)=>{alert(e.error.message)}});
  // }
// }
}
