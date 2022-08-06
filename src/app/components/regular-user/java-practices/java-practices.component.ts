import { Component, OnInit } from '@angular/core';
import { CodingChallenge } from 'src/app/models/coding-challenge.model';
import { ChallengeService } from 'src/app/services/challenge.service';

@Component({
  selector: 'app-java-practices',
  templateUrl: './java-practices.component.html',
  styleUrls: ['./java-practices.component.scss']
})
export class JavaPracticesComponent implements OnInit {

  public codingChallenges?:CodingChallenge[];
  constructor(private challengeService: ChallengeService ) {
    this.challengeService.getAllChallenges().subscribe({next:(challenges)=>{this.codingChallenges=challenges;},error:(err)=>{alert(err.error.message);}})
   }

  ngOnInit(): void {
  }

}
