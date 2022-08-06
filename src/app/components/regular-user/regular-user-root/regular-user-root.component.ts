import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-regular-user-root',
  templateUrl: './regular-user-root.component.html',
  styleUrls: ['./regular-user-root.component.scss']
})
export class RegularUserRootComponent implements OnInit {

  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
  }

  public isUser(){
    let token =  sessionStorage.getItem("token");
    if(token!=null){
      return this.tokenService.extractUserType(token)=="REGULAR";
    }
  return false;
  }

}
