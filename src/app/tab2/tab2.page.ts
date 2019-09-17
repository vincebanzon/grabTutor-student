import { Component } from '@angular/core';

import { NavController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  courses = this.getAllAvailableCourses();

  constructor(public router: Router, public navCtrl: NavController) {}

  pushPage(course) {
    this.router.navigate(['/tabs/tab2/subject-list', {
      course: JSON.stringify(course)
    }]);
  }

  courseSelected(course) {
    console.log("course: ", course);
    this.pushPage(course);
  }

  getAllAvailableCourses() {
    return [{
      id: 0,
      name: 'Math',
      sub: 'Learn Math in no time!'
    }, {
      id: 1,
      name: 'English',
      sub: 'Learn Eng in no time!'
    }, {
      id: 2,
      name: 'Science',
      sub: 'Learn Science in no time!'
    }, {
      id: 3,
      name: 'History',
      sub: 'Learn History in no time!'
    }]
  }

}
