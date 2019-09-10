import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule-config',
  templateUrl: './schedule-config.page.html',
  styleUrls: ['./schedule-config.page.scss'],
})
export class ScheduleConfigPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToNext() {
    console.log("going to next page");
    this.pushPage();
  }

  pushPage() {
    this.router.navigate(['/tabs/tab2/tutor-list', {id: 1}])
  }

}
