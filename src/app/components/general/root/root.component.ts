import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  public userName?: string |null;

  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
  }
  public logout(){
    this.userName = null;
    sessionStorage.removeItem("token");
  }

  public isSignedIn(){
    let token = sessionStorage.getItem("token");
    if(token == null){
      return false;
    }else{
      this.userName = this.tokenService.extractUserName(token);
      return true;
    }
    
  }

}
