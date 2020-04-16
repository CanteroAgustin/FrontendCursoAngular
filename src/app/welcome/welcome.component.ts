import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  name;
  welcomeMessageFromService;

  constructor(private route: ActivatedRoute,
    private welcomeDataService: WelcomeDataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];

  }

  getWelcomeMessageWithPathVariable() {
    this.welcomeDataService.executeWorldBeanServiceWithPathVariable(this.name)
      .subscribe(
        response => this.welcomeMessageFromService = response.message,
        error => this.welcomeMessageFromService = error.error.message
      );
  }

}
