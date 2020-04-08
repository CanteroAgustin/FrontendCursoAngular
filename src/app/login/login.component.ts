import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = 'Agustin';
  password = '';
  errorMessage = 'Invalid Credentials!';
  invalidLogin = false;
  constructor(private router: Router, private auth: HardcodedAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.auth.authenticate(this.userName, this.password)) {
      this.router.navigate(['welcome',this.userName]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
