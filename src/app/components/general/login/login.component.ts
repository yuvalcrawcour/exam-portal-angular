import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
  }

  public login(userName: string, password: string) {

    this.loginService.login(userName, password).subscribe({
      next: (token) => {
        sessionStorage.setItem("token", token.toString());
        let userType = this.tokenService.extractUserType(token.toString());
        if (userType == "ADMIN") {
          this.router.navigate(["/welcome-admin"]);
        } else {
          if (userType == "REGULAR") {
            this.router.navigate(["/welcome-user"]);
          }
        }
      }, error: (e) => {
        // let errAsObj = JSON.parse(e.error);
        // alert(errAsObj.error + " " + errAsObj.message);
        console.log(e);
        
      }
    });
}}
