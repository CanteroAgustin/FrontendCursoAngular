import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../services/basic-authentication.service';

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
  constructor(
    private router: Router,
    private auth: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  handleLogin() {
    if (this.auth.authenticate(this.userName, this.password)) {
      this.router.navigate(['welcome', this.userName]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin() {
    this.basicAuthenticationService.executeBasicAuthenticationService(this.userName, this.password)
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['welcome', this.userName]);
          this.invalidLogin = false;
        },
        error => {
          console.log(error);
          this.invalidLogin = true;
        })
  }
}
