import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  constructor(private loginService: LoginService) { }



  ngOnInit(): void {
  }

  public register() {
    this.loginService.register(this.user).subscribe({ next: () => { alert("registration succeeded") }, error: (e) => { alert(e.error.message) } });
  }

}
