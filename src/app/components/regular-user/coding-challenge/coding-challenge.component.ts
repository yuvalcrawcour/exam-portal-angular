import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CodingChallenge } from 'src/app/models/coding-challenge.model';
import { ChallengeService } from 'src/app/services/challenge.service';

@Component({
  selector: 'app-coding-challenge',
  templateUrl: './coding-challenge.component.html',
  styleUrls: ['./coding-challenge.component.scss']
})
export class CodingChallengeComponent implements OnInit {

  public codingChallenge?: CodingChallenge;
  constructor(private activatedRoute: ActivatedRoute, private challengeService: ChallengeService) {
  }

  ngOnInit(): void {
    let challengeId: number = this.activatedRoute.snapshot.params['id'];
    this.challengeService.getChallenge(challengeId).subscribe({
      next: (challengeFromDb) => {
        this.codingChallenge = challengeFromDb;
      }, error: (e) => { alert(e.error.message) }
    });
  }

  public submit(answer: string) {
    if (this.activatedRoute.snapshot.params['id'] == 1) {
      this.challengeService.submitAnswerSleepIn(answer).subscribe({
        next: (response) => {
          if (response.toString() == "true")
            alert("that is correct");
          else
            alert("that is wrong");
        }, error: (err) => { alert(err.error.message) }
      });
    } else {
      if (this.activatedRoute.snapshot.params['id'] == 2) {
        this.challengeService.submitAnswerCigarParty(answer).subscribe({
          next: (response) => {
            if (response.toString() == "true")
              alert("that is correct");
            else
              alert("that is wrong");
          }, error: (err) => { alert(err.error.message) }
        });
      } else {
        this.challengeService.submitAnswerBlackJack(answer).subscribe({
          next: (response) => {
            if (response.toString() == "true")
              alert("that is correct");
            else
              alert("that is wrong");
          }, error: (err) => { alert(err.error.message) }
        });
      }

    }

  }

}
