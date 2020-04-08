import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationService } from '../services/hardcoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  constructor(private auth: HardcodedAuthenticationService) { }

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }

}
