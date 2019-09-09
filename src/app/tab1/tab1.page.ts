import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  schedules = this.getAllSchedules();

  constructor(public router: Router) {}

  pushPage(schedule) {
    this.router.navigate(['/tabs/tab1/schedule-detail', {
      schedule: JSON.stringify(schedule)
    }]);
  }

  scheduleSelected(schedule) {
    console.log("schedule selected: ", schedule);
    this.pushPage(schedule);
  }

  getAllSchedules() {
    return [{
      id: 0,
      subject: {
        name: 'Math',
        sub: 'Learn Math in no time!'
      },
      starttime: "10:00",
      date: "Saturday"
    }, {
      id: 1,
      subject: {
        name: 'English',
        sub: 'Learn English in no time!'
      },
      starttime: "10:00",
      date: "Saturday"
    }, {
      id: 2,
      subject: {
        name: 'Science',
        sub: 'Learn Science in no time!'
      },
      starttime: "10:00",
      date: "Saturday"
    }]
  }

}
