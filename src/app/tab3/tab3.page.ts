import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  user;
  credentials;

  constructor(private router: Router) {}

  ngOnInit() {
    this.user = this.getUserInfo();
    this.credentials = this.user.credentials;
  }

  getUserInfo() {
    return {
      avatar: 'assets/avatar/avatar-ben.png',
      firstname: 'Ben',
      lastname: 'Ten',
      sub: 'Will be an astronaut someday',
      moto: "Let's go!",
      credentials: [{
        name: 'College',
        sub: 'BSIT'
      }, {
        name: 'School',
        sub: 'MIT'
      }, {
        name: 'Level',
        sub: '3rd Year'
      }]
    }
  }
  
  goToTopup() {
    this.pushPage();
  }


  pushPage() {
    this.router.navigateByUrl('/tabs/tab3/topup');
  }
}
