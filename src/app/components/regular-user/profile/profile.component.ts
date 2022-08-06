import { Component, OnInit } from '@angular/core';
import { QuizSummary } from 'src/app/models/quiz-summary.model';
import { User } from 'src/app/models/user.model';
import { QuizService } from 'src/app/services/quiz.service';
import { TokenService } from 'src/app/services/token.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public quizSummaries?: QuizSummary[];
  public user? : User;
  public quizesPassed:number=0;
  constructor(private quizService: QuizService, private tokenService: TokenService,private userService:UserService) { }

  ngOnInit(): void {
    let token = sessionStorage.getItem("token");
    let userId=0;
     if(token){
      userId = this.tokenService.extractUserId(token);
    }
    this.userService.getUser(userId).subscribe({next:(userFromServer)=>{this.user=userFromServer},error:(err)=>{alert(err.error.message)}});
    this.quizService.getAllQuizSummaries(userId).subscribe({next:(quizSummaries)=>{this.quizSummaries=quizSummaries; 
      this.quizSummaries.forEach(quiz => {if(quiz.grade>55)this.quizesPassed++});    },error:(err)=>{alert(err.error.message)}});
  }

}
