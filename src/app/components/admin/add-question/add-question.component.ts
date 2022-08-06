import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from 'src/app/models/question.model';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  public quizId:number;
  public questionToAdd:Question;
  constructor(private activatedRoute: ActivatedRoute,private quizService: QuizService) {   
     this.quizId=this.activatedRoute.snapshot.params['id']; 
     this.questionToAdd=new Question(0,0,"","","","","",0);
    }

  ngOnInit(): void {


  }

  public addQuestion(){
    this.quizService.addQuestionToQuiz(this.quizId,this.questionToAdd).subscribe({next:()=>{alert("question added")},error:(e)=>{alert(e.error.message)}});
  }

}
