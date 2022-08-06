import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-admin-root',
  templateUrl: './admin-root.component.html',
  styleUrls: ['./admin-root.component.scss']
})
export class AdminRootComponent implements OnInit {

  constructor(private tokenSrvice: TokenService) { }

  ngOnInit(): void {
  }
  public isAdmin(): boolean{
    let token =  sessionStorage.getItem("token");
    if(token!=null){
      return this.tokenSrvice.extractUserType(token)=="ADMIN";
    }
  return false;
}

}
